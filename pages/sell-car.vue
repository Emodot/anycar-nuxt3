<template>
  <div class="main_ctn" @click="closeList = true">
    <div class="inner">
      <div class="top_section">
        <div>
          <h2 class="title">
            Sell your car, new or old
          </h2>
          <p class="sub_title">
            Kindly upload the details of your car, once approved, it will be visible to potential buyers
          </p>
        </div>
      </div>
      <div class="main_section">
        <div class="lhs">
          <div class="lhs_img">
            <img src="~assets/images/sell_car_img.jpg" alt="">
          </div>
        </div>
        <div class="rhs">
          <div v-if="!carAdded" class="rhs_inner">
            <SellCarOne v-if="formOne" :save-form="saveFormOne" :close-list="closeList" @next="toFormTwo()" />
            <SellCarTwo v-if="formTwo" :save-form="saveFormTwo" @next="toFormThree()" />
            <SellCarThree v-if="formThree" :save-form="saveFormThree" @next="submit" />
            <div class="bottom_section">
              <div class="progress_bar">
                <div :class="`progress_line ${formOneCompleted ? 'completed_line' : formOne ? 'active_line completed_line' : ''}`" />
                <div :class="`progress_line ${formTwoCompleted ? 'completed_line' : formTwo ? 'active_line completed_line' : ''}`" />
                <div :class="`progress_line ${formThreeCompleted ? 'completed_line' : formThree ? 'active_line completed_line' : ''}`" />
              </div>
              <div class="bottom_btns">
                <button :class="`global_btn_2 ${formOne ? 'disabled_btn' : ''}`" @click="prevForm()">
                  Prev
                </button>
                <button v-if="!loading" class="global_btn" @click="submitForm()">
                  {{ formThree ? 'Submit' : 'Next' }}
                </button>
                <button v-else class="global_btn" disabled>
                  <Loader class="come-down" />
                </button>
              </div>
            </div>
          </div>
          <SellCarDetailsAdded v-else :date-time="dateTime" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      saveFormOne: false,
      saveFormTwo: false,
      saveFormThree: false,
      formOne: true,
      formTwo: false,
      formThree: false,
      formOneCompleted: false,
      formTwoCompleted: false,
      formThreeCompleted: false,
      carAdded: false,
      loading: false,
      dateTime: {
        date: '',
        time: ''
      },
      closeList: false
    }
  },
  methods: {
    submitForm () {
      if (this.formOne) {
        this.saveFormOne = true
        this.saveFormTwo = false
        this.saveFormThree = false
      } else if (this.formTwo) {
        this.saveFormTwo = true
        this.saveFormOne = false
        this.saveFormThree = false
      } else {
        this.saveFormThree = true
        this.saveFormTwo = false
        this.saveFormOne = false
      }
    },
    toFormTwo () {
      this.formOne = false
      this.formTwo = true
      this.formOneCompleted = true
    },
    toFormThree () {
      this.formOne = false
      this.formTwo = false
      this.formThree = true
      this.formTwoCompleted = true
    },
    async submit (data) {
      this.loading = true
      const form = this.$store.state.sellCarForm
      const carImages = data
      console.log(carImages)
      const formattedYear = new Date(form.year_manufacture).getFullYear()
      const convertedDate = new Date(form.inspectionDate)
      // const displayDate = new Date(this.proposedInspectionDate).toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
      this.dateTime.date = form.inspectionDate
      this.dateTime.time = form.inspectionTime
      console.log(this.dateTime)
      // console.log(form.inspectionDate)
      const formdata = new FormData()
      formdata.append('make', form.make)
      formdata.append('model', form.model)
      formdata.append('yearOfManufacture', formattedYear)
      formdata.append('condition', form.condition)
      formdata.append('transmissionType', form.transmission_type)
      formdata.append('interiorColor', form.interior_color)
      formdata.append('exteriorColor', form.exterior_color)
      formdata.append('vin', form.vin)
      formdata.append('engineType', form.engine_type)
      formdata.append('name', form.name)
      formdata.append('phoneNumber', form.phone)
      for (let i = 0; i < carImages.length; i++) {
        formdata.append('images', carImages[i])
      }
      formdata.append('email', form.email)
      formdata.append('askingPrice', form.asking_price)
      formdata.append('proposedInspectionDate', convertedDate)
      formdata.append('proposedInspectionTime', form.inspectionTime)
      console.log(formdata)
      await this.$axios.$post('api/sell', formdata)
        .then((response) => {
          console.log(response)
          this.carAdded = true
          const clearedForm = {
            makeId: 0,
            make: '',
            model: '',
            year_manufacture: 0,
            formattedYear: 0,
            condition: '',
            transmission_type: '',
            interior_color: '',
            exterior_color: '',
            vin: '',
            engine_type: '',
            asking_price: '',
            name: '',
            email: '',
            phone: '',
            inspectionDate: '',
            inspectionTime: ''
          }
          this.$store.commit('setSellCarForm', clearedForm)
          this.$toaster.showToast({
            content: response.data?.message || 'Car Listing created successfully',
            state: 'success'
          })
        })
        .catch((_err) => {
          this.saveFormThree = false
          const errorMsg = _err?.response?.data?.error || _err?.message
          const feedback = {
            content:
              errorMsg || 'Oops, something went wrong, please try again later',
            state: 'error'
          }
          console.log(feedback)
          this.$toaster.showToast(feedback)
        })
        .finally(() => {
          this.loading = false
        })
    },
    prevForm () {
      this.saveFormTwo = false
      this.saveFormOne = false
      this.saveFormThree = false
      if (this.formTwo) {
        this.formTwoCompleted = false
        this.formOneCompleted = false
        this.formTwo = false
        this.formThree = false
        this.formOne = true
        console.log(this.formOne)
      } else if (this.formThree) {
        this.formThreeCompleted = false
        this.formTwoCompleted = false
        this.formThree = false
        this.formTwo = true
        this.formOne = false
      } else {
        console.log(this.formData)
      }
    }
  }
}
</script>

<style scoped>
.main_ctn {
  padding: 120px 0;
}

.inner {
  max-width: 1344px;
  width: 80%;
  margin: auto;
}
.top_section {
  display: flex;
  justify-content: space-between;
  /* padding: 20px 0 40px; */
}

.title {
  margin-bottom: 5px;
}

.main_section {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.lhs {
  flex-basis: 45%;
  margin-top: 3rem;
}

.lhs_img {
  width: 100%;
}

.lhs_img img {
  width: 100%;
  border-radius: 10px;
}

.rhs {
  flex-basis: 30%;
}

.rhs_inner {
  height: fit-content;
  transition: .5s;
}

.bottom_section {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress_bar {
  display: flex;
  flex-basis: 60%;
}

.progress_line {
  width: 3rem;
  height: 5px;
  border-radius: 30px;
  margin-right: 15px;
  background-color: rgba(21, 10, 65, 0.20);
  transition: .5s;
}

.completed_line {
  background-color: var(--primary-color);
}

.active_line {
  background-color: var(--primary-color);
  width: 5rem;
}

.global_btn_2 {
  margin-right: 10px;
}

.bottom_btns {
  display: flex;
}

.disabled_btn {
  opacity: 0.3;
  cursor: not-allowed;
}

@media only screen and (max-width: 1300px) {
}

@media only screen and (max-width: 1200px) {
  .inner {
    width: 90%;
  }
  .lhs {
    flex-basis: 45%;
  }
  .rhs {
    flex-basis: 50%;
    display: flex;
    justify-content: flex-end;
  }
  .rhs_inner {
    width: 90%;
  }
  .progress_bar {
    flex-basis: 100%;
    margin-bottom: 30px;
  }
  .bottom_section {
    padding-top: 10px;
    flex-direction: column;
  }
}
@media only screen and (max-width: 900px) {
  .lhs {
    flex-basis: 40%;
  }
  .rhs {
    flex-basis: 55%;
  }
}
@media only screen and (max-width: 500px) {
  .lhs {
    display: none;
  }
  .rhs {
    flex-basis: 100%;
  }
  .rhs_inner {
    width: 100%;
  }
}
</style>

<template>
  <div class="modal-backdrop" @click="$emit('close-modal')">
    <div class="modal reveals" @click.stop>
      <div class="top_section">
        <p class="modal_title">
          Schedule an Inspection Date
        </p>
        <span class="material-icons-outlined close" @click="$emit('close-modal')">
          close
        </span>
      </div>
      <div class="modal_content">
        <div class="input_flex">
          <div class="input_flex_item">
            <p class="label">
              First Name
            </p>
            <input v-model="firstName" class="form_input" type="text">
          </div>
          <div class="input_flex_item">
            <p class="label">
              Last Name
            </p>
            <input v-model="lastName" class="form_input" type="text">
          </div>
        </div>
        <div class="input_ctn">
          <p class="label">
            Phone Number
          </p>
          <input v-model="phoneNumber" class="form_input" type="number">
        </div>
        <div class="input_ctn">
          <p class="label">
            Email Address
          </p>
          <input v-model="email" class="form_input" type="email">
        </div>
        <div class="input_flex">
          <div class="input_flex_item">
            <p class="label">
              Proposed Inspection Date
            </p>
            <input v-model="proposedInspectionDate" class="form_input" type="date">
          </div>
          <div class="input_flex_item">
            <p class="label">
              Proposed Inspection Time
            </p>
            <input v-model="proposedInspectionTime" class="form_input" type="time">
          </div>
        </div>
        <button v-if="!loading" class="global_btn" @click="scheduleInspection()">
          Schedule Inspection
        </button>
        <button v-else class="global_btn" disabled>
          <Loader class="come-down" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    carId: {
      type: String,
      default: () => {}
    }
  },
  data () {
    return {
      productList: [],
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      proposedInspectionDate: '',
      proposedInspectionTime: '',
      loading: false,
      total: 0
    }
  },
  // created () {
  //   this.productList = this.$store.state.cartList
  //   this.calculateTotal()
  // },
  methods: {
    async scheduleInspection () {
      this.loading = true
      if (this.phoneNumber.length > 10) {
        this.phoneNumber = this.phoneNumber.substring(1)
      }
      const convertedDate = new Date(this.proposedInspectionDate)
      const displayDate = new Date(this.proposedInspectionDate).toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
      const dateTime = {
        date: displayDate,
        time: this.proposedInspectionTime
      }
      console.log(displayDate)
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        email: this.email,
        proposedInspectionDate: convertedDate.toISOString(),
        proposedInspectionTime: this.proposedInspectionTime
      }
      console.log(data)
      await this.$axios.$post(`api/buy/${this.carId}`, data)
        .then((response) => {
          console.log(response)
          this.$emit('scheduleCompleted', dateTime)
        })
        .catch((_err) => {
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
    }
  }
}
</script>

<style scoped>
.modal-backdrop {
  z-index: 50;
  position: fixed;
  overflow: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(24, 18, 46, 0.8);
}

.modal {
  /* margin-top: 5%; */
  position: relative;
  background-color: white;
  width: 40%;
  max-width: 550px;
  height: fit-content;
  align-items: center;
  border-radius: 20px;
  overflow-y: auto;
  padding: 40px 4rem;
}

.top_section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 3rem; */
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 20px;
}

.modal_title {
  font-size: 18px;
  font-weight: 700;
}

.close {
  position: absolute;
  cursor: pointer;
  color: #C5C5C5;
  right: 2rem;
  top: 2rem;
}

.modal_content {
  margin-top: 10px;
}

.input_ctn {
  width: 100%;
  margin-bottom: 20px;
}

.input_flex_item {
  flex-basis: 48%;
}

.global_btn {
  width: 100%;
  margin-top: 2rem;
}

@media only screen and (max-width: 1200px) {
  .modal {
    width: 50%;
  }
}

@media only screen and (max-width: 900px) {
  .modal {
    width: 70%;
  }
}

@media only screen and (max-width: 500px) {
  .modal {
    width: 90%;
    padding: 2rem;
    height: 80vh;
  }
}

</style>

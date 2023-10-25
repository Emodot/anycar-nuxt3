<template>
  <div class="form_container" @click="showItemList = false">
    <div class="form_inner">
      <div class="input_ctn" @click.stop>
        <p class="label">
          Make
        </p>
        <div class="form_input custom_input_box" @click="showItemList = !showItemList">
          <p>{{ formOne.make }}</p>
          <SmallLoader v-if="makeLoading" class="arrow" />
          <span v-else class="material-icons-outlined">
            expand_more
          </span>
        </div>
        <div v-if="showItemList" class="list_ctn" @click.stop>
          <div class="item_list_ctn">
            <div
              v-for="(make, index) in carMakes"
              :key="index"
              class="item_list"
              @click="selectMake(make)"
            >
              <p class="item_name">
                {{ make.name || '--' }}
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="form-select">
          <select v-model="formOne.make">
            <option value="" disabled />
            <option v-for="(make, index) in carMakes" :key="index" :value="make.name" @input="getMakeID">
              {{ make.name }}
            </option>
          </select>
          <span class="material-icons-outlined arrow">
            expand_more
          </span>
        </div> -->
      </div>
      <div class="input_ctn">
        <p class="label">
          Year of Manufacture
        </p>
        <!-- <datepicker
          :value="formOne.year_manufacture"
          :format="'yyyy'"
          class="datePicker"
          :minimum-view="'year'"
          :maximum-view="'year'"
          :initial-view="'year'"
          @input="getDate"
        /> -->
      </div>
      <div class="input_ctn">
        <p class="label">
          Model
        </p>
        <div class="form-select">
          <select v-model="formOne.model">
            <option value="" disabled />
            <option v-for="(models, index) in carModels" :key="index" :value="models.name">
              {{ models.name }}
            </option>
          </select>
          <SmallLoader v-if="modelLoading" class="arrow" />
          <span v-else class="material-icons-outlined arrow">
            expand_more
          </span>
        </div>
      </div>
      <div class="input_ctn">
        <p class="label">
          Condition
        </p>
        <div class="form-select">
          <select v-model="formOne.condition">
            <option value="" disabled />
            <option value="new">
              New
            </option>
            <option value="foreignUsed">
              Foreign Used
            </option>
            <option value="used">
              Used
            </option>
          </select>
          <span class="material-icons-outlined arrow">
            expand_more
          </span>
        </div>
      </div>
      <div class="input_ctn">
        <p class="label">
          Transmission Type
        </p>
        <div class="form-select">
          <select v-model="formOne.transmission_type">
            <option value="" disabled />
            <option value="automatic">
              Automatic
            </option>
            <option value="manual">
              Manual
            </option>
            <option value="semiautomatic">
              Semi-Automatic
            </option>
          </select>
          <span class="material-icons-outlined arrow">
            expand_more
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Datepicker from 'vuejs-datepicker'
import moment from 'moment'
export default {
  // components: {
  //   Datepicker
  // },
  props: {
    saveForm: {
      type: Boolean,
      default: () => false
    },
    closeList: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      // customFormatter: 'YYYY',
      showItemList: false,
      makeLoading: false,
      modelLoading: false,
      carMakes: [],
      carModels: [],
      formOne: {
        makeId: 0,
        make: '',
        model: '',
        year_manufacture: 0,
        formattedYear: 0,
        condition: '',
        transmission_type: ''
      }
    }
  },
  watch: {
    saveForm: {
      immediate: true,
      handler (val) {
        // console.log(val)
        if (val) {
          console.log(this.formOne.year_manufacture)
          this.$store.dispatch('setSellCarForm', this.formOne)
          this.$emit('next')
        }
      }
    },
    closeList: {
      // immediate: true,
      handler (val) {
        console.log(val)
        if (val) {
          this.showItemList = false
        }
      }
    }
  },
  created () {
    const formData = this.$store.state.sellCarForm
    console.log(formData)
    this.formOne.make = formData.make
    this.formOne.makeId = formData.makeId
    this.formOne.model = formData.model
    this.formOne.year_manufacture = formData.year_manufacture
    this.formOne.formattedYear = formData.formattedYear
    this.formOne.condition = formData.condition
    this.formOne.transmission_type = formData.transmission_type
    this.getMake()
    this.getModels()
  },
  methods: {
    selectMake (data) {
      console.log(data)
      this.formOne.make = data.name
      this.formOne.makeId = data.id
      this.showItemList = false
      if (this.formOne.formattedYear !== 0) {
        this.getModels()
      }
    },
    getMake () {
      this.makeLoading = true
      this.$axios.$get('api/make')
        .then((response) => {
          console.log(response)
          this.carMakes = response.docs.data
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
          this.makeLoading = false
        })
    },
    getModels (year) {
      this.modelLoading = true
      this.$axios.$get(`api/model?year=${this.formOne.formattedYear}&make_id=${this.formOne.makeId}`)
        .then((response) => {
          console.log(response)
          this.carModels = response.data.data
        })
        .catch((_err) => {
          console.log(_err)
          const errorMsg = _err?.response?.data?.error || _err?.message
          const feedback = {
            content:
              errorMsg || 'Oops, something went wrong, please try again later',
            state: 'error'
          }
          console.log(feedback)
          // this.$toaster.showToast(feedback)
        })
        .finally(() => {
          this.modelLoading = false
        })
    },
    customFormatter (date) {
      return moment(date).format('YYYY')
    },
    getDate (val) {
      console.log(val)
      this.formOne.year_manufacture = val
      const dateString = val
      this.formOne.formattedYear = new Date(dateString).getFullYear()
      // this.formOne.year_manufacture = date
      console.log(this.formOne.formattedYear)
      this.getModels()
    }
  }

}
</script>

<style scoped>
.custom_input_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.list_ctn {
  position: relative;
}
.item_list_ctn {
  border: 1px solid #00000039;
  max-height: 40rem;
  width: 100%;
  overflow: auto;
  border-radius: 5px;
  background-color: #fff;
  /* margin-top: 30px; */
  position: absolute;
  top: 0;
  z-index: 5;
  /* left: 40%; */
}
.item_list {
  /* height: 50px; */
  border-bottom: 1px solid #00000011;
  /* display: flex;
  align-items: center; */
  cursor: pointer;
  padding: 15px 0 15px 20px;
  background-color: #fff;
}
</style>

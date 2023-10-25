<template>
  <div class="main_ctn">
    <div class="inner">
      <div class="top_section">
        <div>
          <h2 class="title">
            Compare cars available in our lots
          </h2>
          <p class="sub_title">
            Make Better decisions before purchase while you compare side by side cars available in our lots
          </p>
        </div>
        <p class="clear_cars" @click="clearCars()">
          Clear Cars
        </p>
      </div>
      <div v-if="carsSelected" class="cars_ctn">
        <div v-if="!loading" class="car_1">
          <div v-if="carOneSelected">
            <!-- <img :src="carOne.images[0].urls" alt=""> -->
            <div class="car_img" :style="{ backgroundImage: `url(${carOne.images[0].urls})` }" />
            <div class="car_content">
              <p class="car_name">
                <!-- 2008 Lexus ES 350 -->
                {{ carOne.yearOfManufacture }} {{ carOne.make }} {{ carOne.model }}
              </p>
              <p class="car_amount">
                {{ currency(carOne.askingPrice, 'NGN') }}
              </p>
              <!-- <p class="change_car" @click="$router.push('/compare-cars/select-car')">
                Change Car
              </p> -->
            </div>
          </div>
          <div v-else>
            <img src="~assets/images/temp_car.png" alt="">
            <button class="global_btn" @click="$router.push('/compare-cars/select-car?firstCar')">
              Select Cars to Compare
            </button>
          </div>
        </div>
        <div class="car_2">
          <div v-if="carTwoSelected">
            <!-- <img :src="carTwo.images[0].urls" alt=""> -->
            <div class="car_img" :style="{ backgroundImage: `url(${carTwo.images[0].urls})` }" />
            <div class="car_content">
              <p class="car_name">
                <!-- 2008 Lexus ES 350 -->
                {{ carTwo.yearOfManufacture }} {{ carTwo.make }} {{ carTwo.model }}
              </p>
              <p class="car_amount">
                {{ currency(carTwo.askingPrice, 'NGN') }}
              </p>
              <!-- <p class="change_car" @click="$router.push('/compare-cars/select-car')">
                Change Car
              </p> -->
            </div>
          </div>
          <div v-else>
            <img src="~assets/images/temp_car_2.png" alt="">
            <button class="global_btn" @click="$router.push(`/compare-cars/select-car?firstCar=${$route.query.firstCar}&secondCar`)">
              Select Cars to Compare with
            </button>
          </div>
        </div>
      </div>
      <!-- <div v-else>
        <div class="cars_ctn">
          <div class="car_1">
            <img src="~assets/images/temp_car.png" alt="">
          </div>
          <div class="car_1">
            <img src="~assets/images/temp_car_2.png" alt="">
          </div>
        </div>
        <div class="bottom_ctn">
          <button class="global_btn" @click="$router.push('/compare-cars/select-car')">
            Select Cars to Compare
          </button>
          <button class="global_btn">
            Select Car to Compare with
          </button>
        </div>
      </div> -->
      <div v-if="carOneSelected && carTwoSelected" class="details_ctn">
        <div class="details_inner">
          <p class="details_name">
            {{ carOne.engineType }}
          </p>
          <p class="details_value">
            Engine
          </p>
          <p class="details_name">
            {{ carTwo.engineType }}
          </p>
        </div>
        <hr class="details_line">
        <div class="details_inner">
          <p class="details_name">
            {{ capitalizeFirstLetter(carOne.transmissionType) }}
          </p>
          <p class="details_value">
            Transmission
          </p>
          <p class="details_name">
            {{ capitalizeFirstLetter(carTwo.transmissionType) }}
          </p>
        </div>
        <hr class="details_line">
        <div class="details_inner">
          <p class="details_name">
            {{ capitalizeFirstLetter(carOne.interiorColor) }}
          </p>
          <p class="details_value">
            Interior Color
          </p>
          <p class="details_name">
            {{ capitalizeFirstLetter(carTwo.interiorColor) }}
          </p>
        </div>
        <hr class="details_line">
        <div class="details_inner">
          <p class="details_name">
            {{ capitalizeFirstLetter(carOne.exteriorColor) }}
          </p>
          <p class="details_value">
            Exterior Color
          </p>
          <p class="details_name">
            {{ capitalizeFirstLetter(carTwo.exteriorColor) }}
          </p>
        </div>
        <hr class="details_line">
        <div class="details_inner">
          <p class="details_name">
            {{ carOne.vin }}
          </p>
          <p class="details_value">
            VIN
          </p>
          <p class="details_name">
            {{ carTwo.vin }}
          </p>
        </div>
        <hr class="details_line">
        <div class="details_inner">
          <p class="details_name">
            {{ currency(carOne.askingPrice) }}
          </p>
          <p class="details_value">
            Asking Price
          </p>
          <p class="details_name">
            {{ currency(carTwo.askingPrice) }}
          </p>
        </div>
        <div class="details_btn_ctn">
          <button class="global_btn_2" @click="scheduleInspection(carOne._id)">
            Request Inspection
          </button>
          <button class="global_btn_2" @click="scheduleInspection(carTwo._id)">
            Request Inspection
          </button>
        </div>
      </div>
    </div>
    <ModalsScheduleInspection v-if="inspectionForm" :car-id="carId" @close-modal="inspectionForm = false" @scheduleCompleted="scheduleCompleted" />
    <ModalsSuccess v-if="successModal" :date-time="dateTime" @close-modal="successModal = false" />
  </div>
</template>

<script>
import functions from '@/utils/functions'
export default {
  data () {
    return {
      carId: '',
      currency: functions.formatCurrency,
      capitalizeFirstLetter: functions.capitalizeFirstLetter,
      carOne: {},
      carTwo: {},
      carsSelected: true,
      loading: false,
      inspectionForm: false,
      successModal: false
    }
  },
  computed: {
    carOneSelected () {
      if (Object.keys(this.carOne).length) {
        return true
      } else {
        return false
      }
    },
    carTwoSelected () {
      if (Object.keys(this.carTwo).length) {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    // this.carOne = this.$store.state.carOneDetails
    // this.carTwo = this.$store.state.carTwoDetails
    this.getFirstCarDetails()
    this.getSecCarDetails()
  },
  methods: {
    scheduleInspection (val) {
      this.carId = val
      this.inspectionForm = true
    },
    clearCars () {
      this.$store.commit('setCarOneDetails', {})
      this.$store.commit('setCarTwoDetails', {})
      this.$router.push('/compare-cars')
      // window.location.reload()
      this.carOne = {}
      this.carTwo = {}
    },
    getFirstCarDetails () {
      this.loading = true
      const carId = this.$route.query.firstCar
      this.$axios.$get(`api/sell/${carId}`)
        .then((response) => {
          this.carOne = response.docs
          // this.$store.commit('setCarOneDetails', this.carOne)
          // console.log(response)
          // if (Object.keys(this.carOne).length) {
          //   this.carTwo = response.docs
          //   this.$store.commit('setCarTwoDetails', this.carTwo)
          //   console.log('Not Working')
          // } else {
          //   this.carOne = response.docs
          //   this.$store.commit('setCarOneDetails', this.carOne)
          //   console.log('Working')
          // }
          this.cars = response
        })
        .catch((_err) => {
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
          this.loading = false
        })
    },
    getSecCarDetails () {
      this.loading = true
      const carId = this.$route.query.secondCar
      this.$axios.$get(`api/sell/${carId}`)
        .then((response) => {
          this.carTwo = response.docs
          console.log(this.carTwo)
          // this.$store.commit('setCarTwoDetails', this.carTwo)
          // console.log(response)
          // if (Object.keys(this.carOne).length) {
          //   this.carTwo = response.docs
          //   this.$store.commit('setCarTwoDetails', this.carTwo)
          //   console.log('Not Working')
          // } else {
          //   this.carOne = response.docs
          //   this.$store.commit('setCarOneDetails', this.carOne)
          //   console.log('Working')
          // }
          this.cars = response
        })
        .catch((_err) => {
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
          this.loading = false
        })
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
  align-items: center;
  /* padding: 20px 0 40px; */
}

.clear_cars {
  color: red;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.title {
  margin-bottom: 5px;
}

.cars_ctn {
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
}

.car_img {
  width: 100%;
  height: 25rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  margin-bottom: 1rem;
}

.car_1 {
  flex-basis: 43%;
}

.car_2 {
  flex-basis: 43%;
  text-align: right;
}

.car_1 img {
  width: 100%;
}

.car_2 img {
  width: 100%;
}

.car_content_2 {
  text-align: right;
}

.car_name {
  font-size: 20px;
  font-weight: 700;
  line-height: 36px;
}

.car_amount {
  font-size: 16px;
  font-weight: 700;
  line-height: 36px;
}

.change_car {
  color: #55003B;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
}

.bottom_ctn {
  display: flex;
  justify-content: space-between;
}

.details_ctn {
  margin-top: 5rem;
  /* border: 1px solid #150a411a; */
  border-radius: 20px;
  padding: 4rem 9rem;
  background-color: #F3F8FF;
}

.details_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

.details_name {
  font-size: 12px;
  font-weight: 400;
}
.details_value {
  font-size: 14px;
  font-weight: 700;
}

.details_line {
  border: none;
  border-top: 1px solid #150a411a;
}

.details_btn_ctn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}

@media only screen and (max-width: 1300px) {
}

@media only screen and (max-width: 1200px) {
  .inner {
    width: 90%;
  }
}
@media only screen and (max-width: 900px) {
  .details_ctn {
    padding: 4rem;
  }
}
@media only screen and (max-width: 500px) {
  .car_name {
    font-size: 18px;
  }
  .details_ctn {
    width: 100%;
    padding: 2rem 1.5rem;
  }
  .global_btn_2 {
    font-size: 11px;
  }
}
</style>

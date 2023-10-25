<template>
  <div class="main_ctn">
    <div class="inner">
      <div class="top">
        <div class="back_ctn" @click="$router.go(-1)">
          <span class="material-icons-outlined">
            arrow_back
          </span>
          <p>Back</p>
        </div>
        <div class="search_side">
          <SearchInput />
        </div>
      </div>
      <CarDetails :data="carsDetails.docs" @requestInspection="inspectionForm = true" />
      <OtherCarsYouMayLike :data="limitedCars" />
    </div>
    <ModalsScheduleInspection v-if="inspectionForm" :car-id="carsDetails.docs._id" @close-modal="inspectionForm = false" @scheduleCompleted="scheduleCompleted" />
    <ModalsSuccess v-if="successModal" :date-time="dateTime" @close-modal="successModal = false" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    // console.log(params)
    const carId = params.details
    const [carsDetails, cars] = await Promise.all([
      $axios.$get(`api/sell/${carId}`),
      $axios.$get('api/sell')
    ])
    const otherCars = cars.docs
    let limitedCars = otherCars
    if (otherCars.length > 6) {
      limitedCars = otherCars.slice(0, 6)
    }
    console.log(carsDetails)
    return { carsDetails, limitedCars }
  },
  data () {
    return {
      dateTime: {},
      inspectionForm: false,
      successModal: false
    }
  },
  methods: {
    scheduleCompleted (val) {
      this.dateTime = val
      this.inspectionForm = false
      this.successModal = true
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
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
}

.search_side {
  flex-basis: 30%;
}
@media only screen and (max-width: 1300px) {
}

@media only screen and (max-width: 1200px) {
  .inner {
    width: 90%;
  }
}
@media only screen and (max-width: 900px) {
}
@media only screen and (max-width: 500px) {
  .search_side {
    flex-basis: 70%;
  }
}
</style>

<template>
  <div class="main_ctn">
    <div class="inner">
      <div class="top">
        <BackBtn @backAction="$router.go(-1)"/>
        <div class="search_side">
          <SearchInput :type="'icon'" />
        </div>
      </div>
      <div v-if="!carDataLoading">
        <CarDetails
          :data="carDetails.docs"
          @requestInspection="inspectionForm = true"
        />
        <OtherCarsYouMayLike :data="limitedCars" />
      </div>
      <div v-else class="page_loader_ctn">
        <PageLoader />
      </div>
    </div>
    <ModalsScheduleInspection
      v-if="inspectionForm"
      :car-id="carDetails.docs._id"
      @close-modal="inspectionForm = false"
      @scheduleCompleted="scheduleCompleted"
    />
    <ModalsSuccess
      v-if="successModal"
      :date-time="dateTime"
      @close-modal="successModal = false"
    />
  </div>
</template>

<script setup>
import axios from "axios";
const config = useRuntimeConfig();
const baseUrl = config.public.BASE_URL;
const route = useRoute();

const dateTime = ref({});
const carDetails = ref({});
const limitedCars = ref([]);
const inspectionForm = ref(false);
const successModal = ref(false);
const carDataLoading = ref(false);

const scheduleCompleted = (val) => {
  dateTime.value = val;
  inspectionForm.value = false;
  successModal.value = true;
};

const getCarData = async () => {
  carDataLoading.value = true;
  const carId = route.params.details;
  const path1 = `api/sell/${carId}`;
  const path2 = "api/sell";
  console.log(path1);
  Promise.all([
    axios.get(`${baseUrl}${path1}`),
    axios.get(`${baseUrl}${path2}`),
  ])
    .then((response) => {
      console.log(response);
      carDetails.value = response[0].data;
      const cars = response[1].data;
      const otherCars = cars.docs;
      limitedCars.value = otherCars;
      if (otherCars.length > 6) {
        limitedCars.value = otherCars.slice(0, 6);
      }
    })
    .catch((error) => {
      const { message } = error?.response?.data;
      apiErrorMessage.value = message;
    })
    .finally(() => {
      carDataLoading.value = false;
    });
  // console.log(carsDetails);
  // console.log(cars);
};

console.log(route.params);
getCarData();

// export default {
//   async asyncData({ $axios, params }) {
//     // console.log(params)
//     const carId = params.details;
//     const [carsDetails, cars] = await Promise.all([
//       $axios.$get(`api/sell/${carId}`),
//       $axios.$get("api/sell"),
//     ]);
//     const otherCars = cars.docs;
//     let limitedCars = otherCars;
//     if (otherCars.length > 6) {
//       limitedCars = otherCars.slice(0, 6);
//     }
//     console.log(carsDetails);
//     return { carsDetails, limitedCars };
//   },
// };
</script>

<style scoped>
.main_ctn {
  background-color: #F2F4F7;
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

<template>
  <div class="main_ctn">
    <div class="hero_ctn">
      <div class="hero_inner">
        <div class="hero_lhs">
          <p>Buy Car on financing and pay easily within 48 months.</p>
        </div>
        <div class="hero_rhs">
          <PriceFilter />
        </div>
      </div>
    </div>
    <div class="body_ctn">
      <RecentlyUpdated :data="cars" :loading="fetchCarsLoading" />
      <HomeCompareOptions />
      <HomeDoMoreAnycar />
    </div>
    <HomeSellCarSection />
  </div>
</template>

<script setup>
import axios from "axios";
const config = useRuntimeConfig();
const baseUrl = config.public.BASE_URL;

const cars = ref([]);
const fetchCarsLoading = ref(false);

const fetchCars = () => {
  fetchCarsLoading.value = true;
  // console.log(baseUrl);
  const path = "api/sell";
  axios
    .get(`${baseUrl}${path}`)
    .then((response) => {
      console.log(response);
      const updatedCars = response.data.docs;
      let limitedCars = updatedCars;
      if (updatedCars.length > 6) {
        limitedCars = updatedCars.slice(0, 6);
      }
      cars.value = limitedCars;
      // console.log(cars);
    })
    .catch((error) => {
      const { message } = error?.response?.data;
      apiErrorMessage.value = message;
    })
    .finally(() => {
      fetchCarsLoading.value = false;
    });
};

fetchCars();

// onMounted(() => {
//   fetchCars();
// });
</script>

<style scoped>
.main_ctn {
	background-color: #F2F4F7;
}
.hero_ctn {
  background-image: url("assets/images/hero-1.jpg");
  background-size: cover;
  height: 100vh;
  padding: 120px 0;
  display: flex;
  align-items: center;
}
.hero_inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1344px;
  width: 80%;
  margin: auto;
}

.hero_lhs {
  flex-basis: 45%;
}

.hero_rhs {
  flex-basis: 40%;
}

.hero_lhs p {
  color: white;
  font-size: 50px;
  font-weight: 900;
}

/* .search_input {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #FFFFFC;
  padding: 5px 20px 5px 40px;
  border-radius: 10px;
}

.search_input input {
  width: 100%;
} */

.body_ctn {
  max-width: 1344px;
  width: 80%;
  margin: auto;
  padding-bottom: 7rem;
}

@media only screen and (max-width: 1300px) {
}

@media only screen and (max-width: 1200px) {
  .body_ctn {
    width: 90%;
    margin: auto;
    padding-bottom: 7rem;
  }
}
@media only screen and (max-width: 900px) {
  .hero_ctn {
    height: 50vh;
  }
}
@media only screen and (max-width: 500px) {
  .hero_ctn {
    height: 70vh;
  }
}
</style>

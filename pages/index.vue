<template>
  <div class="main_ctn">
    <div class="hero_ctn">
      <div class="hero_inner">
        <SearchInput />
      </div>
    </div>
    <PriceFilter />
    <div class="body_ctn">
      <!-- <RecentlyUpdated :data="limitedCars" /> -->
      <CompareOptions />
      <DoMoreAnycar />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
const config = useRuntimeConfig();
const baseUrl = config.public.BASE_URL;

onMounted(() => {
  fetchCars()
})

const fetchCars = () => {
  console.log(baseUrl);
  const path = "api/sell";
  axios
    .get(`${baseUrl}${path}`)
    .then((response) => {
      console.log(response);
      const updatedCars = response.docs;
      let limitedCars = updatedCars;
      if (updatedCars.length > 6) {
        limitedCars = updatedCars.slice(0, 6);
      }
    })
    .catch((error) => {
      const { message } = error?.response?.data;
      apiErrorMessage.value = message;
    })
    .finally(() => {
      isFetching.value = false;
    });
};
</script>

<style scoped>
/* .main_ctn {
} */
.hero_ctn {
  background-image: url("assets/images/hero-1.jpg");
  background-size: cover;
  height: 70vh;
  padding: 120px 0;
}
.hero_inner {
  max-width: 1344px;
  width: 80%;
  margin: auto;
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

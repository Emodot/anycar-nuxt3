<template>
  <div class="main_ctn">
    <div class="inner">
      <div class="top_section">
        <h2 class="title">Search for Cars on AnyCar</h2>
        <SearchInput />
        <div class="content">
          <!-- <FilterCars
            :data="cars"
            :loading="getCarsLoading"
            @changePage="changePage"
            @filterMake="filterMake"
            @filterYear="filterYear"
            @filterPrice="filterPrice"
            @filterMileage="filterMileage"
            @filterType="filterType"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const config = useRuntimeConfig();
const baseUrl = config.public.BASE_URL;

const getCarsLoading = ref(false);
const cars = ref({});
const currentPage = ref(1);
const make = ref("");
const year = ref("");
const maxPrice = ref("");
const maxMileage = ref("");
const type = ref("");

onMounted(() => {
  getCars(
    this.currentPage,
    this.make,
    this.year,
    this.maxPrice,
    this.maxMileage,
    this.type
  );
});

const changePage = (val) => {
  getCars(val, this.make, this.year, this.maxPrice, this.maxMileage, this.type);
};
const filterMake = (val) => {
  getCars(
    this.currentPage,
    val,
    this.year,
    this.maxPrice,
    this.maxMileage,
    this.type
  );
};
const filterYear = (val) => {
  getCars(
    this.currentPage,
    this.make,
    val,
    this.maxPrice,
    this.maxMileage,
    this.type
  );
};
const filterPrice = (val) => {
  getCars(
    this.currentPage,
    this.make,
    this.year,
    val,
    this.maxMileage,
    this.type
  );
};
const filterMileage = (val) => {
  getCars(
    this.currentPage,
    this.make,
    this.year,
    this.maxPrice,
    val,
    this.type
  );
};
const filterType = (val) => {
  getCars(
    this.currentPage,
    this.make,
    this.year,
    this.maxPrice,
    this.maxMileage,
    val
  );
};
const getCars = (currentPage, make, year, maxPrice, maxMileage, type) => {
  getCarsLoading.value = true;
  // console.log(type)
  const path = `api/sell?pageNumber=${currentPage}&pageSize=9&make=${make}&year=${year}&maxPrice=${maxPrice}&maxMileage=${maxMileage}&type=${type}`;
  axios
    .get(`${baseUrl}${path}`)
    .then((response) => {
      console.log(response);
      cars.value = response;
    })
    .catch((_err) => {
      const errorMsg = _err?.response?.data?.error || _err?.message;
      const feedback = {
        content:
          errorMsg || "Oops, something went wrong, please try again later",
        state: "error",
      };
      console.log(feedback);
      // this.$toaster.showToast(feedback);
    })
    .finally(() => {
      this.getCarsLoading = false;
    });
};
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

.title {
  margin-bottom: 20px;
}

.content {
  margin-top: 5rem;
}

@media only screen and (max-width: 1300px) {
  .inner {
    width: 90%;
  }
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

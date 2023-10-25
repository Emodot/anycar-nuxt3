<template>
  <div class="main_ctn">
    <div class="inner">
      <div class="top">
        <div>
          <h2 class="title">
            Compare cars available in our lots
          </h2>
          <p class="sub_title">
            Make Better decisions before purchase while you compare side by side cars available in our lots
          </p>
        </div>
        <div class="search_side">
          <SearchInput />
        </div>
      </div>
      <div class="content">
        <FilterCars
          :data="cars"
          :loading="getCarsLoading"
          @changePage="changePage"
          @filterMake="filterMake"
          @filterYear="filterYear"
          @filterPrice="filterPrice"
          @filterMileage="filterMileage"
          @filterType="filterType"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cars: {},
      currentPage: 1,
      make: '',
      year: '',
      maxPrice: '',
      maxMileage: '',
      type: '',
      getCarsLoading: false
    }
  },
  created () {
    this.getCars(
      this.currentPage,
      this.make,
      this.year,
      this.maxPrice,
      this.maxMileage,
      this.type
    )
  },
  methods: {
    changePage (val) {
      this.getCars(
        val,
        this.make,
        this.year,
        this.maxPrice,
        this.maxMileage,
        this.type
      )
    },
    filterMake (val) {
      this.getCars(
        this.currentPage,
        val,
        this.year,
        this.maxPrice,
        this.maxMileage,
        this.type
      )
    },
    filterYear (val) {
      this.getCars(
        this.currentPage,
        this.make,
        val,
        this.maxPrice,
        this.maxMileage,
        this.type
      )
    },
    filterPrice (val) {
      this.getCars(
        this.currentPage,
        this.make,
        this.year,
        val,
        this.maxMileage,
        this.type
      )
    },
    filterMileage (val) {
      this.getCars(
        this.currentPage,
        this.make,
        this.year,
        this.maxPrice,
        val,
        this.type
      )
    },
    filterType (val) {
      this.getCars(
        this.currentPage,
        this.make,
        this.year,
        this.maxPrice,
        this.maxMileage,
        val
      )
    },
    getCars (
      currentPage,
      make,
      year,
      maxPrice,
      maxMileage,
      type
    ) {
      // console.log(type)
      this.getCarsLoading = true
      this.$axios.$get(`api/sell?pageNumber=${currentPage}&pageSize=9&make=${make}&year=${year}&maxPrice=${maxPrice}&maxMileage=${maxMileage}&type=${type}`)
        .then((response) => {
          console.log(response)
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
          this.$toaster.showToast(feedback)
        })
        .finally(() => {
          this.getCarsLoading = false
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

.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
}

.search_side {
  flex-basis: 30%;
}

.title {
  margin-bottom: 5px;
}

.content {
  margin-top: 5rem;
}
</style>

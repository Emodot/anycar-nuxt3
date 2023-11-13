<template>
  <div class="box_ctn">
    <div class="inner">
      <h2 class="head">Search for a car</h2>
      <p class="sub_head">Search by make or model</p>
      <SearchInput />
      <div class="bottom">
          <p class="bottom_text">Search by price</p>
          <div class="select_value_ctn">
            <div v-for="(value, index) in filterValues" :key="index" class="select_value">
              <p>{{ value }}</p>
            </div>
          </div>
      </div>
      <button class="global_btn">Search</button>
    </div>
  </div>
</template>

<script setup>
const filterValues = ref([
  'Under 3M',
  '3M - 6M',
  '6M - 10M',
  '10M - 15M',
  'Above 15M',
])
</script>

<style scoped>
.box_ctn {
  background-color: #F2F4F7;
  border-radius: 20px;
  /* box-shadow: 0px 5px 20px #dadada; */
  width: 100%;
  max-width: 800px;
  padding: 40px;
}

.head {
  font-size: 22px;
  font-weight: 900;
}

.inner {
  width: 100%;
  margin: auto;
}
.sub_head {
  color: #000000;
  /* text-align: center; */
  margin: 7px 0 10px 0;
}

.bottom {
  margin: 3rem 0 2rem 0;
}

.select_value_ctn {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.select_value {
  background-color: white;
  padding: 0 17px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: 1px solid #150a411a;
}

.select_value p {
  font-weight: 700;
}

  .global_btn {
    width: 100%;
    height: 55px;
  }

@media only screen and (max-width: 1300px) {
}

@media only screen and (max-width: 1200px) {
  .box_ctn {
    width: 70%;
  }
  .range_slider {
    width: 60%;
  }
}
@media only screen and (max-width: 900px) {
  .box_ctn {
    width: 80%;
  }
  .range_slider {
    width: 70%;
  }
  .inner {
    width: 85%;
  }
}
@media only screen and (max-width: 500px) {
  .box_ctn {
    width: 95%;
  }
  .range_slider {
    width: 90%;
  }
  .bottom {
    flex-direction: column;
  }

  .rhs {
    margin-top: 30px;
    text-align: center;
  }

  .price {
    margin: 10px 0;
  }

  .global_btn {
    width: 100%;
  }
}
</style>

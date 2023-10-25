<template>
  <div class="box_ctn">
    <div class="inner">
      <h2 class="head">
        Do you have a budget?
      </h2>
      <p class="sub_head">
        Search for any car with a price filter
      </p>
      <div class="range_slider">
        <!-- <vue-slider
          v-model="value"
          v-bind="options"
          :tooltip-formatter="formatter2"
          :enable-cross="false"
          :tooltip="'always'"
          :tooltip-placement="['bottom', 'bottom']"
        /> -->
      </div>
      <div class="bottom">
        <div class="lhs">
          <p class="lhs_text">
            What kind of Car do you want to search for?
          </p>
          <div class="car_select">
            <div class="car">
              <img src="~assets/images/new_car.svg" alt="">
              <div class="checkbox_ctn">
                <input class="checkbox" type="checkbox" name="new">
                <p>New</p>
              </div>
            </div>
            <div class="car">
              <img src="~assets/images/old_car.svg" alt="">
              <div class="checkbox_ctn">
                <input class="checkbox" type="checkbox" name="old">
                <p>Old</p>
              </div>
            </div>
            <div class="car">
              <img src="" alt="">
              <div class="checkbox_ctn">
                <input class="checkbox" type="checkbox" name="all">
                <p>All</p>
              </div>
            </div>
          </div>
        </div>
        <div class="rhs">
          <p class="rhs_text">
            Est. Average Price
          </p>
          <h2 class="price">
            ₦12,450,000
          </h2>
          <button class="global_btn">
            Search for Cars
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VueSlider from 'vue-slider-component'
// import 'vue-slider-component/theme/antd.css'
export default {
  // components: {
  //   VueSlider
  // },
  data () {
    return {
      value: [900000, 10000000],
      options: {
        min: 500000,
        max: 30000000,
        interval: 100000,
        dotSize: 20,
        height: 5
        // tooltip: 'active'
      },
      formatter2: v => `₦${('' + v).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
    }
  }

}
</script>

<style scoped>
.box_ctn {
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 5px 20px #dadada;
  width: 60%;
  margin: auto;
  margin-top: -12rem;
  max-width: 800px;
  padding: 50px 0;
}

.head {
  text-align: center;
}

.inner {
  width: 80%;
  margin: auto;
}
.sub_head {
  color: #00000080;
  text-align: center;
  margin-top: 7px;
}

.range_slider {
  width: 50%;
  margin: 30px auto;
}

.bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
}

.lhs {
  flex-basis: 50%;
}
.rhs {
  flex-basis: 15%;
}

.car_select {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

.car_select .car {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.checkbox {
  width: unset;
}

.checkbox_ctn {
  display: flex;
  align-items: center;
}

.checkbox_ctn p {
  margin-left: 10px;
}

.price {
  margin: 2px 0 10px;
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
    width: 80%;
  }
}
</style>

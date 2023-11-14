<template>
  <div>
    <div class="details">
      <div class="lhs">
        <div
          class="main_image"
          :style="{ backgroundImage: `url(${mainImage})` }"
        >
          <!-- <img src="~assets/images/car-2.jpg" alt=""> -->
        </div>
        <div class="other_images">
          <div
            v-for="image in props.data.images"
            :key="image.index"
            class="inner_images"
          >
            <div
              :style="{ backgroundImage: `url(${image.urls})` }"
              @click="changeMainImg(image)"
            />
            <!-- <img src="~assets/images/car.jpg" alt=""> -->
          </div>
        </div>
      </div>
      <div class="rhs">
        <h2>{{ props.data.make }} {{ props.data.model }}</h2>
        <div class="car_options">
          <div class="option">
            <p>{{ props.data.yearOfManufacture ?? "--" }}</p>
          </div>
          <div class="option">
            <p>{{ props.data.miles ?? "-- Miles" }}</p>
          </div>
          <div class="option">
            <p>{{ props.data.model ?? "--" }}</p>
          </div>
          <div class="option">
            <p>{{ props.data.engineType ?? "--" }}</p>
          </div>
          <div class="option">
            <p>
              {{
                functions.capitalizeFirstLetter(props.data.condition) ?? "--"
              }}
            </p>
          </div>
        </div>
        <div class="prices_btns_ctn">
          <div class="prices_ctn">
            <div>
              <p class="price_title">One off Price</p>
              <p class="price_text">
                {{ functions.formatCurrency(props.data.askingPrice, "NGN") }}
              </p>
            </div>
            <div>
              <p class="price_title">Installment Payment</p>
              <p class="price_text">
                {{ functions.formatCurrency(props.data.askingPrice, "NGN") }}/MO
              </p>
            </div>
          </div>
          <div class="prices_btn">
            <button class="global_btn_2">Pay cash</button>
            <button class="global_btn" @click="$emit('requestInspection')">
              Apply for Loan
            </button>
          </div>
        </div>
        <div class="table_ctn">
          <p class="table_title">Car Specifications</p>
          <div class="table_inner">
            <p class="table_name">Engine</p>
            <p class="table_value">
              {{ props.data.engineType ?? "--" }}
            </p>
          </div>
          <div class="table_inner">
            <p class="table_name">Transmission</p>
            <p class="table_value">
              {{ props.data.transmissionType ?? "--" }}
            </p>
          </div>
          <div class="table_inner">
            <p class="table_name">Fuel Type</p>
            <p class="table_value">
              {{ props.data.fuelType ?? "--" }}
            </p>
          </div>
          <div class="table_inner">
            <p class="table_name">Interior Color</p>
            <p class="table_value">
              {{ props.data.interiorColor ?? "--" }}
            </p>
          </div>
          <div class="table_inner">
            <p class="table_name">Exterior Color</p>
            <p class="table_value">
              {{ props.data.exteriorColor ?? "--" }}
            </p>
          </div>
          <div class="table_inner">
            <p class="table_name">VIN</p>
            <p class="table_value">
              {{ props.data.vin ?? "--" }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section_ctn">
      <p class="section_title">Condition Assessment</p>
      <div class="section_box">
        <div class="box_tabs">
          <div
            v-for="(tab, index) in assessmentsTabs"
            :key="index"
            class="box_tab_item"
            :class="assessmentActiveTab === tab.name ? 'active_box_tab' : ''"
            @click="assessmentActiveTab = tab.name"
          >
            <p>{{ tab.name }}</p>
            <span v-if="tab.caution === 0" class="material-icons-outlined"> check_circle </span>
            <div v-else class="caution_ctn">
              <p>{{ tab.caution }}</p>
            </div>
          </div>
        </div>
        <hr class="tab_line" />
      </div>
    </div>
    <div class="section_ctn">
      <p class="section_title">Car Features</p>
      <div class="section_box">
        <div class="box_inner">
          <div
            v-for="(data, index) in carFeatures"
            :key="index"
            class="box_item"
          >
            <p>{{ data }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});

const mainImage = ref("");

const assessmentActiveTab = ref("Engine");
const assessmentsTabs = ref([
  {
    name: "Engine",
    caution: 0,
  },
  {
    name: "Electricals",
    caution: 0,
  },
  {
    name: "Transmission & Clutch",
    caution: 2,
  },
  {
    name: "Suspension & Steering",
    caution: 0,
  },
  {
    name: "Test Drive",
    caution: 0,
  },
  {
    name: "Exterior",
    caution: 0,
  },
  {
    name: "Interior",
    caution: 0,
  },
  {
    name: "Air conditioning System",
    caution: 0,
  },
]);
const carFeatures = ref([
  "Anti-lock Braking System",
  "Reverse Camera",
  "Parking Sensor",
  "Navigation System",
  "Bluetooth HandsFree",
  "DVD system",
  "Car Tracker",
  "CoolBox",
  "Remote Entry",
  "Remote Start",
  "Heated Seat",
  "Adaptive Headlamps",
  "Auto-Dimming Mirrors",
  "Heated Arm Rests",
  "Blind Spot Aleart",
  "Navigation System",
  "Heated Seat",
  "Adaptive Headlamps",
  "Auto-Dimming Mirrors",
  "Heated Arm Rests",
  "Navigation System",
  "Bluetooth HandsFree",
  "DVD system",
  "Car Tracker",
  "CoolBox",
  "Remote Entry",
  "Heated Seat",
  "Adaptive Headlamps",
  "Auto-Dimming Mirrors",
  "Heated Arm Rests",
  "Blind Spot Aleart",
  "Reverse Camera",
  "Parking Sensor",
  "Navigation System",
  "Bluetooth HandsFree",
  "DVD system",
  "Heated Arm Rests",
  "Blind Spot Aleart",
  "Navigation System",
  "Parking Sensor",
]);

const createdData = () => {
  mainImage.value = props.data.images[0].urls;
};
const changeMainImg = (val) => {
  mainImage.value = val.urls;
};

createdData();
</script>

<style scoped>
.details {
  display: flex;
  justify-content: space-between;
}

.lhs {
  flex-basis: 48%;
}

.main_image {
  width: 100%;
  border-radius: 10px;
  height: 25rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* .main_image img {
  width: 100%;
} */

.other_images {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.inner_images {
  flex-basis: 32%;
  margin-right: 1%;
  margin-bottom: 5px;
}

.inner_images div {
  width: 100%;
  height: 10rem;
  border-radius: 7px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}

.rhs {
  flex-basis: 48%;
}

h2 {
  font-size: 22px;
}

.car_options {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0 20px;
}

.option {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-right: 15px;
  /* margin-top: 10px; */
}

.option p {
  color: var(--primary-color);
  font-size: 13px;
}

.table_ctn {
  background-color: #ffffff;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 30px 40px;
}

.table_title {
  color: var(--primary-color);
  font-size: 18px;
  font-weight: 700;
  /* margin-bottom: 10px; */
}

.table_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 0;
}

.table_name {
  font-size: 14px;
  font-weight: 400;
}
.table_value {
  font-size: 14px;
  font-weight: 400;
}

.prices_btns_ctn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
}

.prices_ctn {
  display: flex;
  align-items: center;
}

.prices_ctn div {
  margin-right: 15px;
}

.price_title {
  font-size: 13px;
  margin-bottom: 6px;
}

.price_text {
  font-size: 14px;
  font-weight: 800;
}

.prices_btn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* margin-top: 20px; */
}

.global_btn_2 {
  font-size: 13px;
  padding: 13px 18px;
}

.global_btn {
  margin-left: 10px;
  font-size: 13px;
  padding: 13px 18px;
}

.section_ctn {
  margin: 90px 0;
}

.section_title {
  font-weight: 700;
  font-size: 18px;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.section_box {
  background-color: white;
  border-radius: 10px;
  padding: 40px;
}

.box_inner {
  display: flex;
  flex-wrap: wrap;
}

.box_item {
  padding: 12px 16px;
  background-color: #f2f4f7;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.box_tabs {
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.tab_line {
  border: none;
  border-top: 2px solid #150a411a;
}

.box_tab_item {
  cursor: pointer;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
}

.material-icons-outlined {
  font-size: 18px;
  color: #3AA880;
  margin-left: 7px;
}


.box_tab_item p {
  font-size: 14px;
  /* font-weight: 700; */
  color: #4d4a5780;
  /* text-align: center; */
}

.active_box_tab {
  border-bottom: 2px solid var(--primary-color);
}

.active_box_tab p {
  color: var(--primary-color);
}


.caution_ctn {
  margin-left: 7px;
  width: 18px;
  height: 18px;
  background-color: #FF0000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.caution_ctn p {
  font-size: 12px;
  color: white;
  font-weight: 700;
}

@media only screen and (max-width: 1300px) {
}

@media only screen and (max-width: 1200px) {
}
@media only screen and (max-width: 900px) {
  .lhs {
    flex-basis: 42%;
  }
  .rhs {
    flex-basis: 45%;
  }
  .main_image {
    height: 18rem;
  }
  .inner_images div {
    height: 7rem;
  }
  .global_btn {
    margin-left: 10px;
  }
  .table_ctn {
    padding: 30px;
  }
}
@media only screen and (max-width: 500px) {
  .details {
    flex-direction: column;
  }

  .lhs {
    margin-bottom: 30px;
  }
  .table_ctn {
    padding: 20px;
  }
}
</style>

<template>
  <div class="details">
    <div class="lhs">
      <div class="main_image" :style="{ backgroundImage: `url(${mainImage})` }">
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
          <p>{{ props.data.yearOfManufacture }}</p>
        </div>
        <div class="option">
          <p>243 Miles</p>
        </div>
        <div class="option">
          <p>{{ props.data.model }}</p>
        </div>
        <div class="option">
          <p>{{ props.data.engineType }}</p>
        </div>
        <div class="option">
          <p>New</p>
        </div>
      </div>
      <div class="table_ctn">
        <div class="table_inner">
          <p class="table_name">Engine</p>
          <p class="table_value">
            {{ props.data.engineType }}
          </p>
        </div>
        <div class="table_inner">
          <p class="table_name">Transmission</p>
          <p class="table_value">
            {{ props.data.transmissionType }}
          </p>
        </div>
        <div class="table_inner">
          <p class="table_name">Interior Color</p>
          <p class="table_value">
            {{ props.data.interiorColor }}
          </p>
        </div>
        <div class="table_inner">
          <p class="table_name">Exterior Color</p>
          <p class="table_value">
            {{ props.data.exteriorColor }}
          </p>
        </div>
        <div class="table_inner">
          <p class="table_name">VIN</p>
          <p class="table_value">
            {{ props.data.vin }}
          </p>
        </div>
        <div class="table_inner">
          <p class="table_name">Asking Price</p>
          <p class="table_value">
            {{ functions.formatCurrency(props.data.askingPrice, "NGN") }}
          </p>
        </div>
        <div class="table_btn">
          <button class="global_btn_2">Compare Car</button>
          <button class="global_btn" @click="$emit('requestInspection')">
            Request Inspection
          </button>
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

.car_options {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 40px;
}

.option {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  background-color: #eef2f4;
  border-radius: 4px;
  margin-right: 15px;
  margin-top: 10px;
}

.option p {
  color: var(--primary-color);
  font-size: 13px;
}

.table_ctn {
  background-color: #f3f8ff;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 30px 40px;
}

.table_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 0;
}

.table_name {
  font-size: 14px;
  font-weight: 400;
}
.table_value {
  font-size: 14px;
  font-weight: 400;
}

.table_btn {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.global_btn {
  margin-left: 20px;
}

/* .compare_btn {
  border: 1px solid var(--primary-color);
  background-color: #fff;
  color: var(--primary-color);
} */
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

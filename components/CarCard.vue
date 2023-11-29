<template>
  <div class="card_list">
    <div
      v-for="(card, index) in props.cardDetails"
      :key="index"
      class="card_ctn"
    >
      <div class="card_image_ctn">
        <div
          class="card_image"
          :style="{
            backgroundImage: `url(${card.images[0].urls})`,
            height: `${imgHeight}rem`,
          }"
        ></div>
        <div class="card_type">
          <p>{{ functions.capitalizeFirstLetter(card.condition) }}</p>
        </div>
      </div>
      <p class="card_title">
        {{ functions.capitalizeFirstLetter(card.make) }} -
        {{ functions.capitalizeFirstLetter(card.model) }}
      </p>
      <div class="card_details">
        <p class="year">
          {{ card.yearOfManufacture }}
        </p>
        <!-- <img class="dot" src="~assets/icons/Ellipse_3.svg" alt="">
        <p class="other_info">
          243 Miles
        </p> -->
        <img class="dot" src="~assets/icons/Ellipse_3.svg" alt="" />
        <p class="other_info">
          {{ card.engineType }}
        </p>
        <!-- <img class="dot" src="~assets/icons/Ellipse_3.svg" alt="">
        <p class="other_info">
          {{ capitalizeFirstLetter(card.condition) }}
        </p> -->
      </div>
      <p class="card_amount">
        {{ functions.formatCurrency(card.askingPrice, "NGN") }}
      </p>
      <div class="bottom_section">
        <button class="card_btn" @click="$emit('cardAction', card)">
          <p>View Details</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cardDetails: {
    type: Array,
    default: [],
  },
  imgHeight: {
    type: Number,
    default: 14,
  },
});

const { cardDetails, imgHeight } = props;

const route = useRoute();
const router = useRoute();
const getRoute = () => {
  console.log(route);
};

const selectProduct = (card) => {
  if (route.name === "compare-cars-select-car") {
    navigateTo("/compare-cars-select-car");
  } else {
    navigateTo(`/buy-car/${card._id}`);
  }
};

getRoute();

// export default {
//   methods: {
//     selectProduct (card) {
//       if (this.$route.name === 'compare-cars-select-car') {
//         // this.$router.push(`/compare-cars/?firstCar=${card._id}`)
//         if (this.$route.query.firstCar === null) {
//           this.firstCarId = card._id
//           this.$router.push({
//             name: 'compare-cars-car_id',
//             query: {
//               firstCar: card._id
//             }
//           })
//         } else if (this.$route.query.secondCar === null) {
//           this.$router.push({
//             name: 'compare-cars-car_id',
//             query: {
//               firstCar: this.$route.query.firstCar,
//               secondCar: card._id
//             }
//           })
//         }
//       } else {
//         this.$router.push(`/buy-car/${card._id}`)
//       }
//       // console.log(card)
//       // this.$store.commit('setselectedProduct', card)
//     }
//   }

// }
</script>

<style scoped>
.card_list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.card_ctn {
  /* padding: 30px; */
  border-radius: 20px;
  width: 31%;
  margin-bottom: 50px;
}

.card_image_ctn {
  position: relative;
  width: 100%;
  height: 14rem;
  border-radius: 20px;
  overflow: hidden;
}

.card_image_ctn:hover .card_image {
  -ms-transform: scale(1.05, 1.05);
  -webkit-transform: scale(1.05, 1.05);
  transform: scale(1.05, 1.05);
}

.card_image {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.4s all ease-in-out;
  /* transition: transform .5s; */
}

.card_type {
  position: absolute;
  right: 10px;
  top: 10px;
  width: fit-content;
  padding: 3px 6px;
  border-radius: 50px;
  background-color: #ffb800;
  /* margin-right: 10px; */
}

.card_type p {
  color: white;
  font-size: 12px;
  font-weight: 700;
}

.card_title {
  margin: 15px 0;
  font-size: 16px;
  font-weight: 800;
}

.card_details {
  display: flex;
  margin-bottom: 10px;
}

.year {
  font-weight: 700;
  font-size: 12px;
}

.dot {
  margin: 0 10px;
}

.other_info {
  color: #00000066;
  font-size: 12px;
}

.bottom_section {
  display: flex;
}

.card_btn {
  min-width: 7rem;
  width: fit-content;
  padding: 12px 20px;
  border-radius: 5px;
  background-color: var(--primary-color);
  margin-right: 10px;
}

.card_btn p {
  color: white;
  font-size: 12px;
  font-weight: 800;
}

.card_amount {
  color: var(--primary-color);
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 15px;
}

@media only screen and (max-width: 1200px) {
  .card_ctn {
    width: 31%;
  }
}
@media only screen and (max-width: 900px) {
  .card_ctn {
    width: 48%;
  }
}
@media only screen and (max-width: 500px) {
  /* .card_list {
    justify-content: center;
  } */
  .card_ctn {
    width: 100%;
  }
}
</style>

<template>
  <div class="card_list">
    <div v-for="(card, index) in cardDetails" :key="index" class="card_ctn" @click="selectProduct(card)">
      <div class="card_image" :style="{ backgroundImage: `url(${card.images[0].urls})`, height: `${imgHeight}rem` }">
        <!-- <img :src="card.images[0].urls" alt=""> -->
      </div>
      <p class="card_title">
        {{ capitalizeFirstLetter(card.make) }} - {{ capitalizeFirstLetter(card.model) }}
      </p>
      <div class="card_details">
        <p class="year">
          {{ card.yearOfManufacture }}
        </p>
        <!-- <img class="dot" src="~assets/icons/Ellipse_3.svg" alt="">
        <p class="other_info">
          243 Miles
        </p> -->
        <img class="dot" src="~assets/icons/Ellipse_3.svg" alt="">
        <p class="other_info">
          {{ card.engineType }}
        </p>
        <!-- <img class="dot" src="~assets/icons/Ellipse_3.svg" alt="">
        <p class="other_info">
          {{ capitalizeFirstLetter(card.condition) }}
        </p> -->
      </div>
      <div class="bottom_section">
        <div class="card_amount">
          <p>{{ currency(card.askingPrice, 'NGN') }}</p>
        </div>
        <div class="card_type">
          <!-- <p>{{ card.condition }}</p> -->
          <p>{{ capitalizeFirstLetter(card.condition) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import functions from '@/utils/functions'
export default {
  props: {
    cardDetails: {
      type: Array,
      default: () => []
    },
    imgHeight: {
      type: Number,
      default: () => 14
    }
  },
  data () {
    return {
      firstCarId: '',
      currency: functions.formatCurrency,
      capitalizeFirstLetter: functions.capitalizeFirstLetter
    }
  },
  created () {
    console.log(this.$route)
  },
  methods: {
    selectProduct (card) {
      if (this.$route.name === 'compare-cars-select-car') {
        // this.$router.push(`/compare-cars/?firstCar=${card._id}`)
        if (this.$route.query.firstCar === null) {
          this.firstCarId = card._id
          this.$router.push({
            name: 'compare-cars-car_id',
            query: {
              firstCar: card._id
            }
          })
        } else if (this.$route.query.secondCar === null) {
          this.$router.push({
            name: 'compare-cars-car_id',
            query: {
              firstCar: this.$route.query.firstCar,
              secondCar: card._id
            }
          })
        }
      } else {
        this.$router.push(`/buy-car/${card._id}`)
      }
      // console.log(card)
      // this.$store.commit('setselectedProduct', card)
    }
  }

}
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
  cursor: pointer;
  margin-bottom: 50px;
  transition:  0.4s all ease-in-out;
}

.card_ctn:hover {
  -ms-transform: scale(1.05); /* IE 9 */
  -webkit-transform: scale(1.05); /* Safari 3-8 */
  transform: scale(1.05);
}

.card_image {
  width: 100%;
  height: 14rem;
  border-radius: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* transition: transform .5s; */
}

/* .card_image img {
  width: 100%;
} */

.card_title {
  margin: 15px 0;
  font-size: 15px;
  font-weight: 700;
}

.card_details {
  display: flex;
  margin-bottom: 30px;
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

.card_amount {
  min-width: 7rem;
  width: fit-content;
  padding: 12px 20px;
  border-radius: 5px;
  background-color: #CCE6FF;
  margin-right: 10px;
}

.card_amount p {
  color: var(--primary-color);
  font-size: 12px;
  font-weight: 700;
}
.card_type {
  min-width: 5rem;
  width: fit-content;
  padding: 12px 20px;
  border-radius: 5px;
  background-color: #150a4133;
  margin-right: 10px;
}

.card_type p {
  color: #55003B;
  font-size: 12px;
  font-weight: 700;
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

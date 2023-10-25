<template>
  <div class="products_ctn">
    <div class="top_section">
      <div>
        <h2 class="title">
          Other Cars you may like
        </h2>
        <p class="sub_title">
          Check the varieties of cars recently updated on our lots
        </p>
      </div>
      <!-- <div class="tab_section">
        <button class="global_btn">
          Search for Cars
        </button>
      </div> -->
    </div>
    <div class="product_list_ctn">
      <CarCard :card-details="data" />
    </div>
    <div class="bottom_text">
      <p>
        Didn’t find what you were looking for? <span class="bottom_link">See more</span>
      </p>
      <span class="material-icons-outlined">
        arrow_forward
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      cars: [
        {
          name: 'Ford Explore Limited SUV',
          price: '13,000,000',
          year: '2018',
          image: require('assets/images/car.jpg'),
          miles: '475 Miles',
          cylinder: '4-Cylinder Turbo',
          type: 'AWD',
          condition: 'New',
          value: 1
        },
        {
          name: 'Ford Explore Limited SUV',
          price: '13,000,000',
          year: '2018',
          image: require('assets/images/car.jpg'),
          miles: '475 Miles',
          cylinder: '4-Cylinder Turbo',
          type: 'AWD',
          condition: 'New',
          value: 1
        },
        {
          name: 'Ford Explore Limited SUV',
          price: '13,000,000',
          year: '2018',
          image: require('assets/images/car.jpg'),
          miles: '475 Miles',
          cylinder: '4-Cylinder Turbo',
          type: 'AWD',
          condition: 'New',
          value: 1
        },
        {
          name: 'Ford Explore Limited SUV',
          price: '13,000,000',
          year: '2018',
          image: require('assets/images/car.jpg'),
          miles: '475 Miles',
          cylinder: '4-Cylinder Turbo',
          type: 'AWD',
          condition: 'New',
          value: 1
        },
        {
          name: 'Ford Explore Limited SUV',
          price: '13,000,000',
          year: '2018',
          image: require('assets/images/car.jpg'),
          miles: '475 Miles',
          cylinder: '4-Cylinder Turbo',
          type: 'AWD',
          condition: 'New',
          value: 1
        },
        {
          name: 'Ford Explore Limited SUV',
          price: '13,000,000',
          year: '2018',
          image: require('assets/images/car.jpg'),
          miles: '475 Miles',
          cylinder: '4-Cylinder Turbo',
          type: 'AWD',
          condition: 'New',
          value: 1
        }
      ]
    }
  }

}
</script>

<style scoped>
.products_ctn {
  margin-top: 30px;
}

.top_section {
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
  /* padding: 20px 0 40px; */
  border-bottom: 1px solid var(--border-color);
}

.title {
  margin-bottom: 5px;
}

.line {
  /* padding-bottom: 40px; */
  margin-top: -1px;
  border: 1px solid var(--primary-color);
  width: 11rem;
  z-index: 2;
}

.tab_section {
  display: flex;
  align-items: center;
}

.tab {
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
}

.tab p {
  font-size: 13px;
  line-height: 13px;
}

.product_list_ctn {
  padding: 3rem 0;
}

.bottom_text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bottom_text p {
  text-align: center;
  color: var(--primary-color);
  font-size: 16px;
}

.bottom_link {
  color: #053361;
  font-size: inherit;
  font-weight: 700;
}

.material-icons-outlined {
  color: #053361;
  font-size: 18px;
  margin-left: 10px;
}

@media only screen and (max-width: 900px) {
  .navbar_inner {
    width: 90%;
  }
}
@media only screen and (max-width: 500px) {
  .top_section {
    flex-direction: column;
    padding-bottom: 20px;
  }

  .title {
    margin-bottom: 30px;
  }
}

</style>

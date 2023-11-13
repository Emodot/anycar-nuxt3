<template>
  <div class="container">
    <div class="sell_car_ctn">
    <div class="lhs">
      <h1>
        Sell your car here and Reach Thousands of Car Buyers Today
      </h1>
      <p class="sub_title">
        Expand your car business by showcasing and selling your inventory to a wide audience of potential customers through our app's thriving marketplace.
      </p>
      <button class="global_btn">
        <p>Sell Car</p>
      </button>
    </div>
    <div class="rhs">
    </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1, p {
  color: white;
}

.container  {
  padding: 7rem 0;
  background-image: url('assets/images/sell_car_section_img.jpg');
  background-position: center;
  background-size: cover;
}
.sell_car_ctn {
  max-width: 1344px;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 10rem; */
}

.lhs {
  flex-basis: 50%;
}

h1 {
  font-weight: 900;
}

.sub_title {
  margin-top: 2rem;
  line-height: 20px;
  width: 80%;
}

.global_btn {
  margin-top: 40px;
  background-color: white;
  color: var(--primary-color);
}

.global_btn p {
  color: var(--primary-color);
  font-weight: 800;
}

.material-icons-outlined {
  color: var(--primary-color);
  font-weight: 200;
  font-size: 20px;
}

.rhs {
  flex-basis: 30%;
  display: flex;
  justify-content: flex-end;
}

.rhs_img {
  width: 80%;
}

.rhs_img img {
  width: 100%;
  border-radius: 30px;
}

@media only screen and (max-width: 1300px) {
}

@media only screen and (max-width: 1200px) {
  .lhs {
    flex-basis: 50%;
  }
  .sell_car_ctn {
    background-position: left;
  }
}
@media only screen and (max-width: 900px) {
  .sell_car_ctn {
    padding: 4rem;
  }
}
@media only screen and (max-width: 500px) {
  .lhs {
    flex-basis: 100%;
    text-align: center;
  }
  .rhs {
    display: none;
  }
  .sell_car_ctn {
    background-position: center;
  }
  .sell_car_ctn {
    padding: 2.5rem;
  }

  .global_btn {
    margin: 40px auto 0;
  }
}
</style>

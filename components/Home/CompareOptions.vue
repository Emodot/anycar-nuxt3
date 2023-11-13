<template>
  <div class="compare_ctn">
    <div class="lhs">
      <h1>
        Compare Car Features and Make the Right Choice: Find Your Ideal Ride Today
      </h1>
      <p class="sub_title">
        Discover the perfect car for your needs by easily comparing the features of different models and make a confident purchase decision.
      </p>
      <button class="global_btn" @click="$router.push('/compare-cars')">
        Compare Cars
      </button>
    </div>
    <div class="rhs">
      <div class="rhs_img">
        <img src="~assets/images/option_image-1.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.compare_ctn {
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
}

.lhs {
  flex-basis: 37%;
}

h1 {
  font-weight: 900;
}

.sub_title {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.add_car_section {
  display: flex;
  margin: 4rem 0 2rem;
}

.add_car_btn {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: #150a411a;
  margin-right: 30px;
}

.add_car_btn p {
  color: #150a4180;
  margin: 0 10px;
  font-weight: 700;
}

.material-icons-outlined {
  color: var(--primary-color);
  font-weight: 200;
  font-size: 20px;
}

.rhs {
  flex-basis: 60%;
  display: flex;
  justify-content: flex-end;
}

.rhs_img {
  width: 100%;
}

.rhs_img img {
  width: 100%;
  border-radius: 30px;
}

@media only screen and (max-width: 1300px) {
}

@media only screen and (max-width: 1200px) {
  .rhs_img {
    width: 90%;
  }
}
@media only screen and (max-width: 900px) {
  .add_car_btn p {
    white-space: nowrap;
  }
}
@media only screen and (max-width: 500px) {
  .lhs {
    flex-basis: 100%;
    text-align: center;
  }
  .lhs h1 {
    text-align: center;
    width: 100%;
  }
  .rhs {
    display: none;
  }
  .add_car_section {
    justify-content: center;
    margin-top: 2rem;
  }
  .add_car_section {
    width: 100%;
  }
  .add_car_btn {
    padding: 15px 10px;
    margin-right: 10px;
  }

  .add_car_btn p {
    margin: 0 5px;
    font-size: 14px;
  }
}
</style>

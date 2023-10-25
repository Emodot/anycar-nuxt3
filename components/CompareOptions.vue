<template>
  <div class="compare_ctn">
    <div class="lhs">
      <h1>
        Don’t know what to go for? You can compare your options.
      </h1>
      <p class="sub_title">
        Check the varieties of cars recently updated on our lots
      </p>
      <!-- <div class="add_car_section">
        <div class="add_car_btn" @click="$router.push('/compare-cars')">
          <span class="material-icons-outlined">
            add_circle_outline
          </span>
          <p>ADD CAR</p>
          <span class="material-icons-outlined">
            expand_more
          </span>
        </div>
        <div class="add_car_btn">
          <span class="material-icons-outlined">
            add_circle_outline
          </span>
          <p>ADD CAR</p>
          <span class="material-icons-outlined">
            expand_more
          </span>
        </div>
      </div> -->
      <button class="global_btn" @click="$router.push('/compare-cars')">
        Compare
      </button>
    </div>
    <div class="rhs">
      <div class="rhs_img">
        <img src="~assets/images/option_image.jpg" alt="">
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
  flex-basis: 45%;
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
  flex-basis: 45%;
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

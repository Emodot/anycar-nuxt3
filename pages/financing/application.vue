<template>
  <div class="main_ctn">
    <div class="inner">
      <div class="top_section">
        <BackBtn @backAction="$router.go(-1)" />
        <h1 class="title">
          Your Journey Begins Here: Seamless Auto Financing Solutions
        </h1>
        <div class="application_section">
          <div class="lhs">
            <div class="car_details">
              <div class="card_image_ctn">
                <div class="card_image"></div>
                <div class="card_type">
                  <p>New</p>
                </div>
              </div>
              <p class="card_title">Ford Explore Limited SUV</p>
              <div class="card_details">
                <p class="year">2018</p>
                <img class="dot" src="~assets/icons/Ellipse_3.svg" alt="" />
                <p class="other_info">243 Miles</p>
                <img class="dot" src="~assets/icons/Ellipse_3.svg" alt="" />
                <p class="other_info">AWD</p>
                <img class="dot" src="~assets/icons/Ellipse_3.svg" alt="" />
                <p class="other_info">4-Cylinder Turbo</p>
              </div>
              <hr class="line" />
              <p class="card_text">One off Price</p>
              <p class="card_title">N7,500,000</p>
              <hr class="line" />
              <p class="card_text">Down Payment</p>
              <p class="card_title">N1,500,000</p>
              <hr class="line" />
              <p class="card_text">Monthly Payment</p>
              <p class="card_title">N142,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.main_ctn {
  padding: 120px 0;
  background-color: #f2f4f7;
}

.inner {
  max-width: 1344px;
  width: 80%;
  margin: auto;
}

.title {
  margin-top: 30px;
  margin-bottom: 20px;
}

.content {
  margin-top: 5rem;
}

.application_section {
  display: flex;
  margin-top: 2rem;
}

.lhs {
  flex-basis: 30%;
}

.car_details {
  width: 100%;
  padding: 30px 30px 40px 30px;
  background-color: white;
  border-radius: 20px;
}

.card_image_ctn {
  position: relative;
  width: 100%;
  height: 14rem;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 20px;
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
  background-image: url("assets/images/car-2.jpg");
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
  /* margin: 15px 0; */
  font-size: 16px;
  font-weight: 800;
}

.card_details {
  display: flex;
  margin-top: 15px;
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

.line {
  border: none;
  border-top: 1px solid #150a411a;
  margin: 20px 0;
}

.card_text {
  color: #000;
  font-size: 14px;
  margin-bottom: 8px;
}

@media only screen and (max-width: 1300px) {
  .inner {
    width: 90%;
  }
}

@media only screen and (max-width: 1200px) {
  .body_ctn {
    width: 90%;
    margin: auto;
    padding-bottom: 7rem;
  }
}
@media only screen and (max-width: 900px) {
  .hero_ctn {
    height: 50vh;
  }
}
@media only screen and (max-width: 500px) {
  .hero_ctn {
    height: 70vh;
  }
}
</style>

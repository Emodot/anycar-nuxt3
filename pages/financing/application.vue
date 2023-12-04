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
          <div class="rhs">
            <div class="progress_bar">
              <div class="icons_bar">
                <img src="~assets/icons/how_it_works.svg" alt="" />
                <hr class="progress_line" />
                <img src="~assets/icons/personal_information.svg" alt="" />
                <hr class="progress_line" />
                <img src="~assets/icons/profession.svg" alt="" />
                <hr class="progress_line" />
                <img src="~assets/icons/loan_preference.svg" alt="" />
                <hr class="progress_line" />
                <img src="~assets/icons/consent_terms.svg" alt="" />
              </div>
              <div class="progress_text">
                <p>How it Works</p>
                <p>Personal Information</p>
                <p>Profession</p>
                <p>Loan Preferences</p>
                <p>Consent and Terms</p>
              </div>
            </div>
            <div class="application_form">
              <div class="start_form">
                <p class="head">HOW IT WORKS</p>
                <p class="sub_head">
                  Your New Car Awaits: Apply for Financing in Minutes
                </p>
                <div class="start_form_content">
                  <div class="box">
                    <div class="box_image">
                      <img src="~assets/images/fill_form.png" alt="" />
                    </div>
                    <p class="box_title">Fill the Form</p>
                    <p class="box_text">
                      We've streamlined the process to ensure your information
                      is gathered quickly
                    </p>
                  </div>
                  <div class="box">
                    <div class="box_image">
                      <img src="~assets/images/fill_form.png" alt="" />
                    </div>
                    <p class="box_title">Await Our Feedback</p>
                    <p class="box_text">
                      Anticipate our prompt response as we carefully review your information and prepare tailored feedback
                    </p>
                  </div>
                  <div class="box">
                    <div class="box_image">
                      <img src="~assets/images/fill_form.png" alt="" />
                    </div>
                    <p class="box_title">Inspect Your Car</p>
                    <p class="box_text">
                      Upon successful feedback, you can inspect your car, pay down payment and drive your car home
                    </p>
                  </div>
                </div>
                <button class="global_btn">Start Application</button>
              </div>
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
  justify-content: space-between;
  margin-top: 2rem;
}

.lhs {
  flex-basis: 27%;
}

.rhs {
  flex-basis: 68%;
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

.progress_bar {
  border-radius: 10px;
  border: 1px solid rgba(21, 10, 65, 0.1);
  background: #f4f4fb;
  box-shadow: 0px 4px 30px 0px #150a410a;
  padding: 25px;
  margin-bottom: 30px;
}

.icons_bar {
  display: flex;
  align-items: center;
}

.progress_line {
  border: none;
  border-top: 3px solid #9b96b1;
  border-radius: 3px;
  width: 10rem;
  margin: 0 10px;
}

.progress_text {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  width: 97%;
}

.progress_text p {
  color: #9b96b1;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
}

.application_form {
  border-radius: 20px;
  background: #fff;
  padding: 4rem;
}

.start_form .head {
  color: #00083e80;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 10px;
}

.start_form .sub_head {
  color: #000;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
}

.start_form_content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.box {
  flex-basis: 28%;
}

.box_image {
  width: 40%;
  text-align: center;
  margin: auto;
  margin-bottom: 10px;
}

.box_image img {
  width: 100%;
}

.box_title {
  text-align: center;
  color: #000;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
}

.box_text {
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  font-size: 14px;
  font-weight: 400;
}

.start_form {
  text-align: center;
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

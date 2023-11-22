<template>
  <div class="about_ctn">
    <div class="lhs">
      <div class="lhs_img">
        <img src="~assets/images/about_financing.webp" alt="" />
      </div>
    </div>
    <div class="rhs">
      <p class="top_title">About our Auto financing Solution</p>
      <h1>Tailored Financing for Every Milestone</h1>
      <p class="sub_title">
        We understand that the road to your dream car should be smooth and
        stress-free. That's why our auto financing solutions are designed with
        you in mind. Enjoy low monthly payments, flexible terms, and competitive
        interest rates tailored to fit your budget.
      </p>
      <p class="sub_title">
        Whether you're eyeing a brand-new model or a reliable used car, our
        quick approval process ensures you get behind the wheel in no time. We
        believe in transparency, so you'll always know what to expect.
      </p>
      <p class="sub_title">
        Ready to turn the key and start your journey? Apply now and experience
        the joy of driving your dream car sooner than you think.
      </p>
      <button class="global_btn">Check Prequalification</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about_ctn {
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
}

.rhs {
  flex-basis: 37%;
}

.top_title {
  color: #02000aba;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

h1 {
  font-weight: 700;
  margin-bottom: 20px;
}

.sub_title {
  margin-bottom: 20px;
  color: #6b778d;
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

.lhs {
  flex-basis: 60%;
  display: flex;
  justify-content: flex-end;
}

.lhs_img {
  width: 100%;
}

.lhs_img img {
  width: 100%;
  border-radius: 30px;
}

@media only screen and (max-width: 1300px) {
}

@media only screen and (max-width: 1200px) {
  .lhs_img {
    width: 90%;
  }
}
@media only screen and (max-width: 900px) {
  .add_car_btn p {
    white-space: nowrap;
  }
}
@media only screen and (max-width: 500px) {
  .rhs {
    flex-basis: 100%;
    text-align: center;
  }
  .rhs h1 {
    text-align: center;
    width: 100%;
  }
  .lhs {
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

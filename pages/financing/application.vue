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
              <div v-if="activeSection === 'Start Form'" class="start_form">
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
                      Anticipate our prompt response as we carefully review your
                      information and prepare tailored feedback
                    </p>
                  </div>
                  <div class="box">
                    <div class="box_image">
                      <img src="~assets/images/fill_form.png" alt="" />
                    </div>
                    <p class="box_title">Inspect Your Car</p>
                    <p class="box_text">
                      Upon successful feedback, you can inspect your car, pay
                      down payment and drive your car home
                    </p>
                  </div>
                </div>
                <button
                  class="global_btn"
                  @click="activeSection = 'Personal Infomation'"
                >
                  Start Application
                </button>
              </div>
              <div
                v-if="activeSection === 'Personal Infomation'"
                class="personal_info_form"
              >
                <p class="form_title">Personal Information</p>
                <div class="input_flex">
                  <div class="input_flex_item">
                    <p class="label">First Name</p>
                    <input
                      v-model="applicationForm.firstName"
                      class="form_input"
                      type="text"
                    />
                  </div>
                  <div class="input_flex_item">
                    <p class="label">Last Name</p>
                    <input
                      v-model="applicationForm.lastName"
                      class="form_input"
                      type="text"
                    />
                  </div>
                </div>
                <div class="input_flex">
                  <div class="input_flex_item">
                    <p class="label">Date of Birth</p>
                    <input
                      v-model="applicationForm.dob"
                      class="form_input"
                      type="text"
                    />
                  </div>
                  <div class="input_flex_item">
                    <p class="label">Email Address</p>
                    <input
                      v-model="applicationForm.email"
                      class="form_input"
                      type="text"
                    />
                  </div>
                </div>
                <div class="input_flex">
                  <div class="input_flex_item">
                    <p class="label">Phone Number</p>
                    <input
                      v-model="applicationForm.phone"
                      class="form_input"
                      type="text"
                    />
                  </div>
                  <div class="input_flex_item">
                    <p class="label">National Identification Number (NIN)</p>
                    <input
                      v-model="applicationForm.nin"
                      class="form_input"
                      type="text"
                    />
                  </div>
                </div>
                <div class="input_flex">
                  <div class="input_flex_item">
                    <p class="label">Your BVN</p>
                    <input
                      v-model="applicationForm.bvn"
                      class="form_input"
                      type="text"
                    />
                  </div>
                  <div class="input_flex_item">
                    <p class="label">Gender</p>
                    <input
                      v-model="applicationForm.gender"
                      class="form_input"
                      type="text"
                    />
                  </div>
                </div>
                <div class="input_flex">
                  <div class="input_flex_item">
                    <p class="label">Nationality</p>
                    <input
                      v-model="applicationForm.nationality"
                      class="form_input"
                      type="text"
                    />
                  </div>
                  <div class="input_flex_item">
                    <p class="label">Nationality Status</p>
                    <input
                      v-model="applicationForm.nationality_status"
                      class="form_input"
                      type="text"
                    />
                  </div>
                </div>
                <div class="bottom_btn">
                  <button
                    class="global_btn"
                    @click="activeSection = 'Profession'"
                  >
                    Proceed
                  </button>
                </div>
              </div>
              <div
                v-if="activeSection === 'Profession'"
                class="profession_form"
              >
                <p class="form_title">Profession</p>
                <p class="main_label">What best describes you?</p>
                <div class="radio_ctn">
                  <div class="radio_ctn_div">
                    <input
                      v-model="applicationForm.profession"
                      type="radio"
                      value="salary earner"
                      name="profession"
                      id="salary earner"
                    />
                    <label for="salary earner">Salary Earner</label>
                  </div>
                  <div class="radio_ctn_div">
                    <input
                      v-model="applicationForm.profession"
                      type="radio"
                      value="business owner"
                      name="profession"
                      id="business owner"
                    />
                    <label for="business owner">Business Owner</label>
                  </div>
                </div>
                <div
                  v-if="applicationForm.profession === 'salary earner'"
                  class="radio_content"
                >
                  <p class="main_label">Employer's Information</p>
                  <div class="input_flex">
                    <div class="input_flex_item">
                      <p class="label">Employment Type</p>
                      <input class="form_input" type="text" />
                    </div>
                    <div class="input_flex_item">
                      <p class="label">Industry</p>
                      <input class="form_input" type="text" />
                    </div>
                  </div>
                  <div class="input_flex">
                    <div class="input_flex_item">
                      <p class="label">Employment Type</p>
                      <input class="form_input" type="text" />
                    </div>
                    <div class="input_flex_item">
                      <p class="label">Industry</p>
                      <input class="form_input" type="text" />
                    </div>
                  </div>
                  <div class="input_flex">
                    <div class="input_flex_item">
                      <p class="label">Employment Type</p>
                      <input class="form_input" type="text" />
                    </div>
                    <div class="input_flex_item">
                      <p class="label">Industry</p>
                      <input class="form_input" type="text" />
                    </div>
                  </div>
                  <p class="main_label">Income and Expenses</p>
                  <div class="input_flex">
                    <div class="input_flex_item">
                      <p class="label">
                        Total Take-Home Pay (after salary deduction)
                      </p>
                      <input class="form_input" type="text" />
                    </div>
                    <div class="input_flex_item">
                      <p class="label">Total Monthly Expenses</p>
                      <input class="form_input" type="text" />
                    </div>
                  </div>
                  <p class="main_label">Vehicle Purpose</p>
                  <div class="input_flex">
                    <div class="input_flex_item">
                      <p class="label">What will the vehicle be used for?</p>
                      <input class="form_input" type="text" />
                    </div>
                    <div class="input_flex_item"></div>
                  </div>
                </div>
                <div
                  v-if="applicationForm.profession === 'business owner'"
                  class="radio_content"
                >
                  <p class="main_label">Business Details</p>
                  <div class="input_flex">
                    <div class="input_flex_item">
                      <p class="label">Employment Type</p>
                      <input class="form_input" type="text" />
                    </div>
                    <div class="input_flex_item">
                      <p class="label">Industry</p>
                      <input class="form_input" type="text" />
                    </div>
                  </div>
                  <div class="input_flex">
                    <div class="input_flex_item">
                      <p class="label">Employment Type</p>
                      <input class="form_input" type="text" />
                    </div>
                    <div class="input_flex_item">
                      <p class="label">Industry</p>
                      <input class="form_input" type="text" />
                    </div>
                  </div>
                  <div class="input_flex">
                    <div class="input_flex_item">
                      <p class="label">Employment Type</p>
                      <input class="form_input" type="text" />
                    </div>
                    <div class="input_flex_item">
                      <p class="label">Industry</p>
                      <input class="form_input" type="text" />
                    </div>
                  </div>
                  <p class="main_label">Business Finance Details</p>
                  <div class="input_flex">
                    <div class="input_flex_item">
                      <p class="label">
                        Total Take-Home Pay (after salary deduction)
                      </p>
                      <input class="form_input" type="text" />
                    </div>
                    <div class="input_flex_item">
                      <p class="label">Total Monthly Expenses</p>
                      <input class="form_input" type="text" />
                    </div>
                  </div>
                  <p class="main_label">Vehicle Purpose</p>
                  <div class="input_flex">
                    <div class="input_flex_item">
                      <p class="label">What will the vehicle be used for?</p>
                      <input class="form_input" type="text" />
                    </div>
                    <div class="input_flex_item"></div>
                  </div>
                </div>
                <div class="bottom_btn">
                  <button
                    class="global_btn"
                    @click="activeSection = 'Loan Preferences'"
                  >
                    Proceed
                  </button>
                </div>
              </div>
              <div
                v-if="activeSection === 'Loan Preferences'"
                class="profession_form"
              >
                <p class="form_title">Loan Preferences</p>
                <div class="input_flex">
                  <div class="input_flex_item">
                    <p class="label">Desired Loan Term</p>
                    <input
                      v-model="applicationForm.firstName"
                      class="form_input"
                      type="text"
                    />
                  </div>
                  <div class="input_flex_item">
                    <p class="label">Desired Repayment Date</p>
                    <input
                      v-model="applicationForm.lastName"
                      class="form_input"
                      type="text"
                    />
                  </div>
                </div>
                <div class="radio_box">
                  <p class="label">
                    Do you want to continue insurance subscription after the
                    first year of the loan?
                  </p>
                  <div class="radio_ctn">
                    <div class="radio_ctn_div">
                      <input
                        v-model="applicationForm.profession"
                        type="radio"
                        value="yes"
                        id="yes"
                      />
                      <label for="yes">Yes</label>
                    </div>
                    <div class="radio_ctn_div">
                      <input
                        v-model="applicationForm.profession"
                        type="radio"
                        value="no"
                        id="no"
                      />
                      <label for="no">No</label>
                    </div>
                  </div>
                </div>
                <div class="radio_box">
                  <p class="label">
                    Do you want to continue maintenance plan subscription after
                    the first year of the loan?
                  </p>
                  <div class="radio_ctn">
                    <div class="radio_ctn_div">
                      <input
                        v-model="applicationForm.profession"
                        type="radio"
                        value="yes"
                        id="yes"
                      />
                      <label for="yes">Yes</label>
                    </div>
                    <div class="radio_ctn_div">
                      <input
                        v-model="applicationForm.profession"
                        type="radio"
                        value="no"
                        id="no"
                      />
                      <label for="no">No</label>
                    </div>
                  </div>
                </div>
                <div class="radio_box">
                  <p class="label">
                    Do you want to subscribe to roadworthiness for the full term
                    of the loan?
                  </p>
                  <div class="radio_ctn">
                    <div class="radio_ctn_div">
                      <input
                        v-model="applicationForm.profession"
                        type="radio"
                        value="yes"
                        id="yes"
                      />
                      <label for="yes">Yes</label>
                    </div>
                    <div class="radio_ctn_div">
                      <input
                        v-model="applicationForm.profession"
                        type="radio"
                        value="no"
                        id="no"
                      />
                      <label for="no">No</label>
                    </div>
                  </div>
                </div>
                <div class="radio_box">
                  <p class="label">
                    Do you want to subscribe to licence renewal for the full
                    term of the loan?
                  </p>
                  <div class="radio_ctn">
                    <div class="radio_ctn_div">
                      <input
                        v-model="applicationForm.profession"
                        type="radio"
                        value="yes"
                        id="yes"
                      />
                      <label for="yes">Yes</label>
                    </div>
                    <div class="radio_ctn_div">
                      <input
                        v-model="applicationForm.profession"
                        type="radio"
                        value="no"
                        id="no"
                      />
                      <label for="no">No</label>
                    </div>
                  </div>
                </div>
                <div class="radio_box">
                  <p class="label">
                    Do you want to pay for your fees upfront or monthly as part
                    of your installment?
                  </p>
                  <div class="radio_ctn">
                    <div class="radio_ctn_div">
                      <input
                        v-model="applicationForm.profession"
                        type="radio"
                        value="yes"
                        id="yes"
                      />
                      <label for="yes">Yes</label>
                    </div>
                    <div class="radio_ctn_div">
                      <input
                        v-model="applicationForm.profession"
                        type="radio"
                        value="no"
                        id="no"
                      />
                      <label for="no">No</label>
                    </div>
                  </div>
                </div>
                <p class="main_label">
                  Do you want to pay for any of the following items upfront
                  instead of financing it as part of the loan?
                </p>
                <div class="checkbox_ctn">
                  <div class="checkbox_ctn_div">
                    <input
                      type="checkbox"
                      value="Vehicle Registration"
                      id="Vehicle Registration"
                      v-model="fruits"
                    />
                    <label for="Vehicle Registration"
                      >Vehicle Registration</label
                    >
                  </div>
                  <div class="checkbox_ctn_div">
                    <input
                      type="checkbox"
                      value="Insurance (First 12 months)"
                      id="Insurance"
                      v-model="fruits"
                    />
                    <label for="Insurance">Insurance (First 12 months)</label>
                  </div>
                  <div class="checkbox_ctn_div">
                    <input
                      type="checkbox"
                      value="Vehicle Tracking"
                      id="Vehicle Tracking"
                      v-model="fruits"
                    />
                    <label for="Vehicle Tracking">Vehicle Tracking</label>
                  </div>
                  <div class="checkbox_ctn_div">
                    <input
                      type="checkbox"
                      value="Vehicle Tracking"
                      id="Vehicle Tracking"
                      v-model="fruits"
                    />
                    <label for="Vehicle Tracking">Vehicle Tracking</label>
                  </div>
                  <div class="checkbox_ctn_div">
                    <input
                      type="checkbox"
                      value="Vehicle Tracking"
                      id="Vehicle Tracking"
                      v-model="fruits"
                    />
                    <label for="Vehicle Tracking">Vehicle Tracking</label>
                  </div>
                </div>
                <div class="bottom_btn">
                  <button
                    class="global_btn"
                    @click="activeSection = 'Content and Terms'"
                  >
                    Proceed
                  </button>
                </div>
              </div>
              <div
                v-if="activeSection === 'Content and Terms'"
                class="profession_form"
              >
                <p class="form_title">Content and Terms</p>
                <div class="radio_box">
                  <p class="label">
                    I hereby consent that Anycar make enquiries regarding my
                    credit history with any credit bureau. I consent that Anycar
                    reports the conclusion of any credit agreement with me to
                    the relevant credit reporting regulator. I hereby declare
                    that the information provided by me is true and correct.
                  </p>
                  <div class="radio_ctn">
                    <div class="radio_ctn_div">
                      <input
                        v-model="applicationForm.profession"
                        type="radio"
                        value="yes"
                        id="yes"
                      />
                      <label for="yes">Yes</label>
                    </div>
                    <div class="radio_ctn_div">
                      <input
                        v-model="applicationForm.profession"
                        type="radio"
                        value="no"
                        id="no"
                      />
                      <label for="no">No</label>
                    </div>
                  </div>
                </div>
                <div class="radio_box">
                  <p class="label">
                    Finance is subject to an approval based on your credit
                    profile and affordability of the vehicle. The submission of
                    this finance application will not result in the immediate
                    reservation of this vehicle, nor will it guarantee the
                    availability of this vehicle in the future.
                  </p>
                  <div class="radio_ctn">
                    <div class="radio_ctn_div">
                      <input
                        v-model="applicationForm.profession"
                        type="radio"
                        value="yes"
                        id="yes"
                      />
                      <label for="yes">Yes</label>
                    </div>
                    <div class="radio_ctn_div">
                      <input
                        v-model="applicationForm.profession"
                        type="radio"
                        value="no"
                        id="no"
                      />
                      <label for="no">No</label>
                    </div>
                  </div>
                </div>
                <div class="bottom_btn">
                  <button
                    class="global_btn"
                    @click="activeSection = 'Congratulations'"
                  >
                    Proceed
                  </button>
                </div>
              </div>
              <div
                v-if="activeSection === 'Congratulations'"
                class="congratulations_ctn"
              >
                <div class="congratulations reveals" @click.stop>
                  
                    <p class="congratulations_title">Congratulations!</p>
                  <div class="congratulations_content">
                    <div class="congratulations_icon">
                      <img src="~assets/icons/success.gif" alt="" />
                    </div>
                    <p class="congratulations_text">
                      Finance is subject to an approval based on your credit profile and affordability of the vehicle. The submission of this finance application will not result in the immediate reservation of this vehicle, nor will it guarantee the availability of this vehicle in the future.
                    </p>
                    <div class="congratulations_btn">
                      <button class="global_btn_2" @click="$emit('close-congratulations')">
                        Return Home
                      </button>
                      <button class="global_btn">
                        My Dashboard
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// const activeSection = ref("Personal Infomation");
const activeSection = ref("Start Form");
const applicationForm = ref({
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  dob: "",
  nin: "",
  bvn: "",
  gender: "",
  nationality: "",
  nationality_status: "",
  profession: "",
});
</script>

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
  margin-bottom: 40px;
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
  padding: 3rem;
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

.form_title {
  color: #000;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}

.bottom_btn {
  text-align: right;
  margin-top: 40px;
}

.main_label {
  color: #000;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
  margin-top: 40px;
}

.radio_ctn {
  display: flex;
  flex-wrap: wrap;
}

.radio_ctn_div {
  display: flex;
  align-items: center;
  margin-right: 50px;
}

.radio_ctn_div input {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  /* border: 2px solid var(--primary-color); */
}

.radio_box {
  margin-top: 20px;
}

.radio_content {
  margin-top: 40px;
}

.checkbox_ctn {
  display: flex;
  flex-wrap: wrap;
}

.checkbox_ctn_div {
  display: flex;
  align-items: center;
  margin-right: 50px;
  margin-bottom: 20px;
}

.checkbox_ctn_div input {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  /* border: 2px solid var(--primary-color); */
}


.congratulations {
  /* margin-top: 5%; */
  margin: auto;
  position: relative;
  background-color: white;
  width: 80%;
  max-width: 550px;
  height: fit-content;
  align-items: center;
  border-radius: 20px;
  overflow-y: auto;
  padding: 40px 4rem;
}

.congratulations_icon {
  width: 50%;
  margin: auto;
  margin-top: -40px;
}

.congratulations_icon img {
  width: 100%;
  text-align: center;
}

.congratulations_text {
  width: 80%;
  margin: auto;
  text-align: center;
  margin-top: -30px;
}

.congratulations_title {
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}

.close {
  position: absolute;
  cursor: pointer;
  color: #C5C5C5;
  right: 2rem;
  top: 2rem;
}

.congratulations_content {
  margin-top: 10px;
}

.congratulations_btn {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.congratulations_btn .global_btn_2 {
  margin-right: 20px;
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

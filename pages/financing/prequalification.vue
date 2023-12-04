<template>
  <div class="main_ctn">
    <div class="ctn_inner">
      <div class="lhs">
        <div class="lhs_inner">
          <div class="lhs_content">
            <p class="lhs_head">Enjoy Hassle Free Auto Financing</p>
            <p class="lhs_text">
              Your journey to owning the perfect vehicle starts here!
            </p>
          </div>
        </div>
      </div>
      <div class="rhs">
        <BackBtn @backAction="$router.go(-1)" />
        <h2>Prequalification</h2>
        <p>Fill in the details below to check for what you can afford</p>
        <div class="form_ctn">
          <div v-if="form1" class="form_inner form_1">
            <div class="form_top">
              <p class="form_title">Personal Information</p>
              <p class="form_step">Step 1 of 2</p>
            </div>
            <div class="input_flex">
              <div class="input_flex_item">
                <p class="label">First Name</p>
                <input
                  v-model="personalInfo.firstName"
                  class="form_input"
                  type="text"
                />
              </div>
              <div class="input_flex_item">
                <p class="label">Last Name</p>
                <input
                  v-model="personalInfo.lastName"
                  class="form_input"
                  type="text"
                />
              </div>
            </div>
            <div class="input_ctn">
              <p class="label">Phone Number</p>
              <input
                v-model="personalInfo.phone"
                class="form_input"
                type="number"
              />
            </div>
            <div class="input_ctn">
              <p class="label">Email Address</p>
              <input
                v-model="personalInfo.email"
                class="form_input"
                type="email"
              />
            </div>
            <button class="global_btn step_1_btn" @click="form1done">Next</button>
          </div>
          <div v-if="form2" class="form_inner form_2">
            <div class="form_top">
              <p class="form_title">Enter Preferences</p>
              <p class="form_step">Step 2 of 2</p>
            </div>
            <div class="input_ctn">
              <p class="label">Net Monthly Income (After Expenses)</p>
              <input
                v-model="personalInfo.monthlyIncome"
                class="form_input"
                type="text"
              />
            </div>
            <div class="input_ctn">
              <p class="label">Loan Term</p>
              <div class="form-select">
                <select v-model="personalInfo.loanTerm">
                  <option value="" disabled />
                  <option value="6 Months">6 Months</option>
                  <option value="12 Months">12 Months</option>
                  <option value="24 Months">24 Months</option>
                  <option value="36 Months">36 Months</option>
                  <option value="48 Months">48 Months</option>
                </select>
                <span class="material-icons-outlined arrow"> expand_more </span>
              </div>
            </div>
            <div class="input_ctn">
              <p class="label">Employment Type</p>
              <div class="form-select">
                <select v-model="personalInfo.employmentType">
                  <option value="" disabled />
                  <option value="Salary Earner">Salary Earner</option>
                  <option value="Business Owner">Business Owner</option>
                </select>
                <span class="material-icons-outlined arrow"> expand_more </span>
              </div>
            </div>
            <button class="global_btn step_1_btn" @click="form2done">Next</button>
          </div>
          <div v-if="form3" class="form_inner form_3">
            <div class="form_top">
              <p class="form_3_title">
                Congratulations, here is the breakdown if how much you qualify
                for and the vehicles that are within your budget
              </p>
            </div>
            <div class="form_3_flex">
              <div class="form_3_lhs">
                <p class="form_3_text">Maximum Financeable amount</p>
                <p class="form_3_amount">N783,434</p>
              </div>
              <div class="form_3_rhs">
                <p class="form_3_text">
                  Minimum Required Down payment (Equity)
                </p>
                <p class="form_3_amount" style="text-align: right">N100,000</p>
              </div>
            </div>
            <hr class="form_line" />
            <div class="form_3_flex">
              <p class="form_3_text">Maximum Monthly Installment</p>
              <p class="form_3_text bold-text">N83,272</p>
            </div>
            <hr class="form_line" />
            <div class="form_3_flex">
              <p class="form_3_text">Maximum Finance Tenure</p>
              <p class="form_3_text bold-text">12 Months</p>
            </div>
            <div class="btn_flex">
              <button class="global_btn_2">Edit Preference</button>
              <button class="global_btn" @click="navigateTo('/financing/eligible-cars')">View Eligible Cars</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const personalInfo = ref({
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  monthlyIncome: "",
  loanTerm: "",
  employmentType: "",
});

const form1 = ref(true);
const form2 = ref(false);
const form3 = ref(false);

const form1done = () => {
  form1.value = false;
  form3.value = false;
  form2.value = true;
};

const form2done = () => {
  form1.value = false;
  form2.value = false;
  form3.value = true;
}
</script>

<style scoped>
.main_ctn {
  padding: 120px 0;
  background-color: #f2f4f7;
}

.ctn_inner {
  max-width: 1344px;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
}

.lhs {
  flex-basis: 40%;
  margin-right: 5%;
}

.lhs_inner {
  background-image: url("assets/images/prequalification_1.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  height: 45rem;
  position: relative;
  padding: 50px;
}

.lhs_content {
  position: absolute;
  bottom: 70px;
  width: 80%;
}

.lhs_head {
  color: white;
  font-size: 28px;
  font-weight: 700;
  line-height: 40px;
  margin-bottom: 10px;
}

.lhs_text {
  color: white;
  font-size: 16px;
}

.rhs {
  flex-basis: 50%;
}

.rhs h2 {
  margin: 30px 0 10px;
}

.form_ctn {
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 30px 0px #150a410a;
  padding: 40px;
  margin-top: 30px;
}

.form_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.form_title {
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-weight: 700;
}

.form_step {
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
}

.step_1_btn {
  width: 100%;
  margin-top: 20px;
}

.form_3_title {
  color: #000;
  font-size: 16px;
  font-weight: 600;
}

.form_3_flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form_3_text {
  color: rgba(0, 0, 0, 0.6);
  font-size: 16px;
  font-weight: 400;
}

.form_3_amount {
  color: #150a41;
  font-size: 26px;
  font-weight: 700;
  margin-top: 10px;
}

.bold-text {
  color: #000001;
  font-size: 18px;
  font-weight: 800;
}

.btn_flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
}

.btn_flex button {
  flex-basis: 48%;
}

.form_line {
  border: none;
  border-top: 1px solid #00000021;
  margin: 20px 0;
}
</style>

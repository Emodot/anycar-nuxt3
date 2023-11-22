<template>
  <div class="loan_calculator">
    <div class="calculator_ctn">
      <div class="lhs">
        <p class="box_title">Loan Calculator</p>
        <div class="input_ctn">
          <p class="label">Car Value</p>
          <input v-model="carValue" class="form_input" type="text" />
        </div>
        <div class="input_ctn">
          <p class="label">Loan Term(Optional)</p>
          <div class="form-select">
            <select v-model="loanTerm">
              <option value="" disabled />
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <span class="material-icons-outlined arrow"> expand_more </span>
          </div>
        </div>
        <button class="global_btn">
          Calculate this Loan
        </button>
      </div>
      <div class="rhs">
        <div v-if="loanAnalysis" class="calculator_result">
          <p class="result_head">Estimated Monthly Loan</p>
          <p class="result_amount">N866,480</p>
        </div>
        <div v-else class="empty_state_ctn">
          <img src="~assets/images/empty_state.webp" alt="" />
          <p class="empty_state_head">Loan Analysis is Empty!</p>
          <p class="empty_state_text">
            Once you calculate a loan, your result will be analyzed here
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const loanAnalysis = ref(true);
const carValue = ref("");
const loanTerm = ref("");
</script>

<style scoped>
.loan_calculator {
  margin-top: -8rem;
}
.calculator_ctn {
  background-color: #fafcff;
  border-radius: 10px;
  width: 45%;
  margin: auto;
  display: flex;
  align-items: center;
}

.box_title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
}

.lhs {
  padding: 40px;
  flex-basis: 50%;
  background-color: #ffffff;
  border-radius: 10px 0 0 10px;
}

.form_input {
  height: 50px;
}

.form-select select {
  height: 50px;
}

.form-select .arrow {
  top: 14px;
}

.global_btn {
  width: 100%;
  margin-top: 40px;
}

.rhs {
  padding: 40px;
  flex-basis: 50%;
  height: 100%;
  background-color: #fafcff;
}

.empty_state_ctn {
  text-align: center;
}

.empty_state_ctn img {
  width: 60%;
}

.empty_state_head {
  color: #02000aba;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.empty_state_text {
  color: #00000080;
  text-align: center;
  font-size: 14px;
  width: 70%;
  margin: auto;
}
</style>

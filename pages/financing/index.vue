<template>
  <div class="main_ctn">
    <div class="hero_ctn">
      <div class="hero_inner">
        <p class="hero_head">
          Drive Your Dream Car with Our <br /><span class="spaned_text"
            >Auto Financing</span
          >
          Solutions
        </p>
        <div class="hero_btns">
          <button class="global_btn_2">Check Prequalification</button>
          <button class="global_btn">Start Loan Application</button>
        </div>
      </div>
    </div>
    <div class="body_ctn">
      <FinancingLoanCalculator />
      <FinancingAboutAutoFinancing />
    </div>
    <FinancingHowItWorks />
  </div>
</template>

<script setup></script>

<style scoped>
.main_ctn {
  background-color: #f2f4f7;
}

.hero_ctn {
  background-image: url("assets/images/financing_bg.webp");
  background-size: cover;
  height: 100vh;
  padding: 120px 0;
}

.hero_inner {
  margin-top: 4rem;
}

.hero_head {
  font-size: 45px;
  font-weight: 900;
  color: var(--primary-color);
  text-align: center;
}

.hero_head span {
  font-size: 45px;
  font-weight: 900;
  color: var(--active-color);
}

.hero_btns {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.hero_btns button {
  margin: 0 10px;
}

.body_ctn {
  max-width: 1344px;
  width: 80%;
  margin: auto;
  padding-bottom: 7rem;
}

@media only screen and (max-width: 1300px) {
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

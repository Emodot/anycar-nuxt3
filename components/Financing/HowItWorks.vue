<template>
  <div class="container">
    <div class="how_it_works_ctn">
      <div class="lhs">
        <h1>How it Works</h1>
        <p class="sub_title">
          Unlocking simplicity in a few easy steps and embark on a hassle-free
          journey to your dream car.
        </p>
        <div class="list_ctn">
          <div class="list_icon">
            <span class="material-icons-outlined"> check_circle </span>
          </div>
          <div class="list_content">
            <p class="list_title">Identification</p>
            <p class="list_text">The identification phase mandates the submission of your personal information, crucial for the processing of your loan application</p>
          </div>
        </div>
        <div class="list_ctn">
          <div class="list_icon">
            <span class="material-icons-outlined"> check_circle </span>
          </div>
          <div class="list_content">
            <p class="list_title">Prequalification</p>
            <p class="list_text">To initiate the process, kindly fill out a brief form with your business information and BVN (for both salary earners and business owners). This data will be utilized to determine your eligibility amount.</p>
          </div>
        </div>
        <div class="list_ctn">
          <div class="list_icon">
            <span class="material-icons-outlined"> check_circle </span>
          </div>
          <div class="list_content">
            <p class="list_title">Browse Cars</p>
            <p class="list_text">Afterward, explore a customized page displaying the range of cars you qualify for financing, tailored to your pre-qualification status.</p>
          </div>
        </div>
        <button class="global_btn_2">
          <p>Check Prequalification</p>
        </button>
      </div>
      <div class="rhs"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1,
p {
  color: white;
}

.container {
  padding: 7rem 0;
  background-image: url("assets/images/how-it-works.webp");
  background-position: center;
  background-size: cover;
}
.how_it_works_ctn {
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
  font-weight: 700;
}

.sub_title {
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 20px;
  width: 80%;
}

.global_btn_2 {
  margin-top: 40px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
}

.global_btn_2 p {
  color: white;
  font-weight: 800;
}

.list_icon {
  margin-right: 10px;
}

.material-icons-outlined {
  color: #FF9900;
  font-weight: 200;
  font-size: 22px;
}

.list_ctn {
  display: flex;
  margin-bottom: 1rem;
}

.list_title {
  font-weight: 800;
  font-size: 16px;
}

.list_text {
  font-size: 14px;
  margin-top: 7px;
  color: #ffffff99;
}

.rhs {
  flex-basis: 30%;
}

@media only screen and (max-width: 1300px) {
}

@media only screen and (max-width: 1200px) {
  .lhs {
    flex-basis: 50%;
  }
  .how_it_works_ctn {
    background-position: left;
  }
}
@media only screen and (max-width: 900px) {
  .how_it_works_ctn {
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
  .how_it_works_ctn {
    background-position: center;
  }
  .how_it_works_ctn {
    padding: 2.5rem;
  }

  .global_btn_2 {
    margin: 40px auto 0;
  }
}
</style>

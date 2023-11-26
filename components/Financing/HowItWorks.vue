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
  font-weight: 900;
}

.sub_title {
  margin-top: 2rem;
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

.material-icons-outlined {
  color: var(--primary-color);
  font-weight: 200;
  font-size: 20px;
}

.list_ctn {
  display: flex;
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

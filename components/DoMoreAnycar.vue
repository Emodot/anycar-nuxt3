<template>
  <div class="do_more_ctn">
    <div class="lhs">
      <h1>
        Do more with ease on AnyCar
      </h1>
      <p class="sub_title">
        Check our Mega Solutions like Car Financing, Registration, maintenance and Insurance
      </p>
      <button class="global_btn">
        <p>Solutions</p>
        <span class="material-icons-outlined">
          chevron_right
        </span>
      </button>
    </div>
    <div class="rhs" />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1, p {
  color: white;
}
.do_more_ctn {
  padding: 7rem;
  background-image: url('assets/images/aesthetic-vehicle-bg.png');
  background-position: center;
  background-size: cover;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10rem;
}

.lhs {
  flex-basis: 30%;
}

.sub_title {
  margin-top: 2rem;
  line-height: 20px;
}

.global_btn {
  display: flex;
  margin-top: 40px;
  background-color: white;
  color: var(--primary-color);
}

.global_btn p {
  color: var(--primary-color);
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
  .lhs {
    flex-basis: 50%;
  }
  .do_more_ctn {
    background-position: left;
  }
}
@media only screen and (max-width: 900px) {
  .do_more_ctn {
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
  .do_more_ctn {
    background-position: center;
  }
  .do_more_ctn {
    padding: 2.5rem;
  }

  .global_btn {
    margin: 40px auto 0;
  }
}
</style>

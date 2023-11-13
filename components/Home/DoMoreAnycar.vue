<template>
  <div class="do_more_ctn">
    <div class="lhs">
      <h1>
        Experience Seamless Automotive Solutions with Our App
      </h1>
      <p class="sub_title">
        From Car registration to maintenance and Insurance, unlock the full spectrum of automotive convenience in one place.
      </p>
      <button class="global_btn">
        <p>See Our Solutions</p>
      </button>
    </div>
    <div class="rhs">
      <div class="rhs_img">
        <img src="~assets/images/option_image.jpg" alt="">
      </div>
    </div>
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
  padding: 3rem 5rem;
  /* background-image: url('assets/images/aesthetic-vehicle-bg.png'); */
  background-color: #55003B;
  background-position: center;
  background-size: cover;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10rem;
}

.lhs {
  flex-basis: 45%;
}

h1 {
  font-weight: 900;
}

.sub_title {
  margin-top: 2rem;
  line-height: 20px;
  width: 80%;
}

.global_btn {
  margin-top: 40px;
  background-color: white;
  color: var(--primary-color);
}

.global_btn p {
  color: var(--primary-color);
  font-weight: 800;
}

.material-icons-outlined {
  color: var(--primary-color);
  font-weight: 200;
  font-size: 20px;
}

.rhs {
  flex-basis: 50%;
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

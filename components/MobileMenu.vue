<template>
  <div class="mobile-menu come-down">
    <div class="mobile-header">
      <div class="logo">
        <img src="~assets/images/anycar_logo.png" alt="logo">
      </div>
      <div class="close" @click="$emit('closeMobileMenu')">
        <span class="bar" />
        <span class="bar2" />
      </div>
    </div>
    <div class="menu-container">
      <nuxt-link to="/buy-car">
        <p class="menu-text">
          Buy Car
        </p>
      </nuxt-link>
      <nuxt-link to="/sell-car">
        <p class="menu-text">
          Sell Car
        </p>
      </nuxt-link>
      <nuxt-link to="/compare-cars">
        <p class="menu-text">
          Compare
        </p>
      </nuxt-link>
      <nuxt-link to="#">
        <p class="menu-text">
          Verify a Car
        </p>
      </nuxt-link>
      <nuxt-link to="#">
        <p class="menu-text">
          Solutions
        </p>
      </nuxt-link>
    </div>
    <div class="account_btn">
      <button class="global_btn">
        My Account
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
/* MOBILE HEADER  */

.mobile-menu {
  position: fixed;
  z-index: 15;
  background-color: #ffffff;
  width: 100%;
  border-bottom: 5px solid #0081fa33;
}

.mobile-header {
  height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 15px 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.068);
}

.logo img {
  width: 160px;
}

.middle-section {
  padding: 10px 50px;
}

.profile {
  background: rgb(173, 192, 216);
  padding: 8px 10px;
  border-radius: 50%;
  margin-right: 30px;
}

#user {
  width: 18px;
  height: 18px;
}

.close {
  color: #fff;
  cursor: pointer;
}

.bar,
.bar2 {
  display: block;
  width: 25px;
  height: 2px;
  margin: 5px auto;
  background-color: #000000;
  cursor: pointer;
}

.bar,
.bar2 {
  display: block;
  width: 25px;
  height: 2px;;
}

.bar {
  transform: rotate(45deg);
  position: absolute;
}

.bar2 {
  transform: rotate(-45deg);
}

.menu-container {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: 100%;
}

.menu-header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px 20px 50px;
  color: black;
  border-bottom: 1px solid rgba(255, 255, 255, 0.068);
}

.inner .menu-text {
  padding: 20px 60px;
  color: rgba(255, 255, 255, 0.554);
  border-bottom: 1px solid rgba(255, 255, 255, 0.068);
}

.menu-text {
  padding: 30px 50px;
  color: #000000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.169);
}

/* a.nuxt-link-exact-active {
  color: #0082FA;
} */

a.nuxt-link-exact-active .menu-text,
a.nuxt-link-exact-active .user p,
a:hover {
  color: var(--primary-color);
}

.user {
  /* padding: 20px 0; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 54px;
  align-items: center;
}

/* .user p {
  margin: 0 10px;
  font-size: 18px;
  color: black;
} */

.user-sec {
  display: flex;
  align-items: center;
}

.username {
  margin-left: 15px;
  font-weight: 500;
}

.log-out {
  font-weight: 700;
  color: #0082FA;
  margin-right: 20px;
  cursor: pointer;
  font-size: 18px;
}

.account_btn {
  margin: 30px 0 30px 20px;
}

@media only screen and (max-width: 500px) {
  .mobile-header {
    height: 11vh;
    padding: 15px;
  }

  .logo img {
    width: 60px;
  }
  .menu-text {
    padding: 20px 20px;
  }
  .menu-header-box {
    padding: 20px 30px 20px 20px;
  }
  .user p {
    font-size: 15px;
  }
  .user {
    height: 45px;
  }
  .middle-section {
    padding: 10px 20px;
  }
  .inner .menu-text {
    padding: 20px 40px;
  }
}
</style>

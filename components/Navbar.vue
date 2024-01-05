<template>
  <div class="navbar_ctn">
    <div class="navbar_inner">
      <div class="navbar_lhs">
        <div class="logo">
          <img
            src="~assets/images/anycar_logo.png"
            alt=""
            @click="$router.push('/')"
          />
        </div>
      </div>
      <div class="navbar_middle">
        <div class="menu_list">
          <nuxt-link to="/buy-car">
            <p class="menu_item">Buy Car</p>
          </nuxt-link>
          <nuxt-link to="/sell-car">
            <p class="menu_item">Sell Car</p>
          </nuxt-link>
          <nuxt-link to="#">
            <p class="menu_item">Compare</p>
          </nuxt-link>
          <nuxt-link to="/financing">
            <p class="menu_item">Financing</p>
          </nuxt-link>
          <nuxt-link to="#">
            <p class="menu_item">Solutions</p>
          </nuxt-link>
        </div>
      </div>
      <div class="navbar_rhs">
        <div class="account_btn">
          <button class="global_btn">My Account</button>
        </div>
        <div class="mobile_menu">
          <span
            class="material-icons-outlined"
            @click="$emit('showMobileMenu')"
          >
            menu
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isSticky = ref(false);
const productList = ref({});

// onMounted(() => {
//   console.log("the component is created");
//   window.addEventListener("scroll", this.makeHeaderSticky);
// });
// onBeforeUnmount(() => {
//   console.log("the component is destroyed");
//   window.removeEventListener("scroll", this.makeHeaderSticky);
// });

// const makeHeaderSticky = () => {
//   if (window.scrollY > 0) {
//     isSticky.value = true;
//   } else {
//     isSticky.value = false;
//   }
//   console.log(isSticky.value);
// };
</script>

<style scoped>
.navbar_ctn {
  background-color: #F2F4F7;
  /* box-shadow: 0px 5px 20px #dadada; */
  position: fixed;
  width: 100%;
  z-index: 5;
}
.navbar_inner {
  max-width: 1344px;
  width: 80%;
  height: 90px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar_lhs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 20%;
}

.logo {
  /* margin-right: 5rem; */
  width: 50%;
}

.logo img {
  cursor: pointer;
  width: 100%;
}

.navbar_middle {
  flex-basis: 60%;
  display: flex;
  justify-content: center;
}

.navbar_rhs {
  height: 100%;
  flex-basis: 20%;
  display: flex;
  justify-content: flex-end;
}

.menu_list {
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: space-between;
}

.menu_item {
  cursor: pointer;
}

.account_btn {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.cart_text {
  margin-right: 15px;
}

.num_box {
  width: 20px;
  height: 20px;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 50%;
  margin-left: 15px;
}

.num_box p {
  font-size: 12px;
  color: white;
  line-height: 19px;
}

.mobile_menu {
  height: 100%;
  display: none;
  padding-left: 20px;
  margin-left: 20px;
  border-left: 1px solid var(--border-color);
}

@media only screen and (max-width: 1200px) {
  /* .navbar_lhs {
    flex-basis: 30%;
  } */
  .logo {
    width: 60%;
  }
  .menu_list {
    width: 80%;
  }
}
@media only screen and (max-width: 900px) {
  .logo {
    width: 80%;
  }
  .navbar_inner {
    width: 90%;
  }
  .navbar_middle {
    display: none;
  }
  .mobile_menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media only screen and (max-width: 500px) {
  .navbar_inner {
    width: 90%;
  }
  .navbar_lhs {
    flex-basis: 40%;
  }
  .account_btn {
    display: none;
  }
}
</style>

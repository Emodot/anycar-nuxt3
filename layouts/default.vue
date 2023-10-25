<template>
  <div class="main">
    <OurToast />
    <Navbar
      @open-cart="openCart = true"
      @showMobileMenu="showMobileMenu = true"
    />
    <div class="mobile-menu">
      <MobileMenu
        v-show="showMobileMenu"
        @closeMobileMenu="showMobileMenu = false"
      />
    </div>
    <div class="main_content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      openCart: false,
      showMobileMenu: false
    }
  },
  methods: {
    goToCheckout () {
      this.openCart = false
      this.$router.push('/checkout')
    }
  }

}
</script>

<style scoped>
.main {
  background-color: #ffffff;
}
/* .main_content {
  padding: 90px 0;
} */
</style>

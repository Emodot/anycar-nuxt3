<template>
  <div class="footer">
    <div class="footer_ctn">
      <div class="footer_inner">
        <div class="footer_lhs">
          <div class="logo">
            <img src="~assets/images/anycar_logo.png" alt="">
          </div>
          <p class="sub_title">
            Get streamlined, simplified and digitized experience owning a car.
          </p>
        </div>
        <div class="footer_middle">
          <div class="menu_list">
            <p class="menu_item_head">
              Solutions
            </p>
            <p class="menu_item">
              Car Financing
            </p>
            <p class="menu_item">
              Car Registration
            </p>
            <p class="menu_item">
              Car Maintenance
            </p>
            <p class="menu_item">
              Car Insurance
            </p>
            <p class="menu_item">
              Car Verification
            </p>
          </div>
        </div>
        <div class="footer_rhs">
          <div class="menu_list">
            <p class="menu_item_head">
              Links
            </p>
            <p class="menu_item">
              Buy Car
            </p>
            <p class="menu_item">
              Sell Car
            </p>
            <p class="menu_item">
              Compare Cars
            </p>
            <p class="menu_item">
              Policies
            </p>
            <p class="menu_item">
              Contact Us
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
  color: #000;
}
.footer {
  bottom: 0;
  width: 100%;
  z-index: 5;
}
.footer_ctn {
  box-shadow: 0px 5px 20px #dadada;
  border-radius: 30px 30px 0 0;
  background-color: #FFF9F4;
  max-width: 1344px;
  width: 80%;
  margin: auto;
  padding: 6rem 6rem 2rem;
}
.footer_inner {
  /* padding-top: 4rem; */
  /* height: 120px; */
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
}

.footer_lhs {
  flex-basis: 50%;
}

.sub_title {
  width: 60%;
  color: rgba(21, 10, 65, 0.60);
}

.logo {
  margin-bottom: 2rem;
  width: 30%;
}

.logo img {
  width: 100%;
}

.footer_middle {
  flex-basis: 40%;
  display: flex;
  justify-content: center;
}

.footer_rhs {
  flex-basis: 30%;
  display: flex;
  justify-content: flex-end;
}

.menu_list {
  width: 80%;
}

.menu_item {
  cursor: pointer;
  margin-bottom: 20px;
}

.menu_item_head {
  font-size: 18px;
  font-weight: 700;
  line-height: 36px;
}

.social_ctn {
  display: flex;
  align-items: center;
}

.social_ctn svg {
 margin-right: 15px;
}

.footer_line {
  border: none;
  border-top: 1px solid #9999995e;
  margin: 3rem 0;
}

.copyright {
  color: white;
  text-align: center;
  font-size: 12px;
  padding-bottom: 3rem;
}

@media only screen and (max-width: 1200px) {
  .footer_ctn {
    width: 90%;
  }
}
@media only screen and (max-width: 900px) {
  .footer_ctn {
    padding: 4rem;
  }
  .sub_title {
    width: 90%;
  }
  .logo {
    width: 50%;
  }
}
@media only screen and (max-width: 500px) {
  .footer_ctn {
    padding: 2rem;
  }
  .footer_lhs {
    flex-basis: 100%;
    margin-bottom: 20px;
  }
  .logo {
    margin-right: 5rem;
    width: 50%;
  }
  .footer_inner {
    flex-wrap: wrap;
  }
  .footer_middle {
    flex-basis: 50%;
  }
  .footer_rhs {
    flex-basis: 50%;
  }
  .menu_list {
    width: 100%;
  }
}
</style>

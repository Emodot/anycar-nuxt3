<template>
  <div class="main_ctn">
    <div class="inner">
      <div class="top_section">
        <BackBtn @backAction="$router.go(-1)" />
        <h1 class="title">Your Journey Begins Here: Seamless Auto Financing Solutions</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.main_ctn {
  padding: 120px 0;
	background-color: #F2F4F7;
}

.inner {
  max-width: 1344px;
  width: 80%;
  margin: auto;
}

.title {
  margin-top: 30px;
  margin-bottom: 20px;
}

.content {
  margin-top: 5rem;
}

@media only screen and (max-width: 1300px) {
  .inner {
    width: 90%;
  }
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

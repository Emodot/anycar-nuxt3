<template>
  <div class="search_input">
    <input type="text" placeholder="Search by car by make or model">
    <span class="material-icons-outlined">
      search
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.search_input {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFC;
  padding: 5px 20px 5px 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0px #150a4114;
}

.search_input input {
  width: 100%;
}

@media only screen and (max-width: 500px) {
.search_input input {
  width: 85%;
}
  .search_input {
    padding: 5px 15px;
  }
}
</style>

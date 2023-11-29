<template>
  <div class="search_input">
    <input type="text" placeholder="Search by car by make or model" />
    <button v-if="type === 'button'" class="global_btn">
      <p>Search</p>
      <span class="material-icons-outlined search_icon"> search </span>
    </button>
    <span v-else class="material-icons-outlined icon"> search </span>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: () => "button",
  },
});
</script>

<style scoped>
.search_input {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fffffc;
  padding: 5px 5px 5px 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0px #150a4114;
}

.search_input input {
  width: 100%;
}

.global_btn {
  display: flex;
  align-items: center;
  height: 45px;
}

.global_btn p {
  color: white;
}

.icon {
  margin-right: 20px;
}

.search_icon {
  color: white;
  margin-left: 10px;
  font-size: 20px;
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

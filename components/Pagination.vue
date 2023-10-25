<template>
  <div class="pagination_ctn">
    <button class="global_btn_2">
      LOAD MORE
    </button>
    <div class="pagination_num_ctn">
      <span class="material-icons-outlined" :class="`${!paginationData.hasPrevPage ? 'disable_arrow' : ''}`">
        chevron_left
      </span>
      <div class="num_ctn">
        <div v-for="num in paginationData.totalPages > 4 ? 4 : paginationData.totalPages" :key="num" class="num" :class="`${paginationData.page === num ? 'active_num' : ''}`" @click="changePage(num)">
          {{ num }}
        </div>
      </div>
      <p v-if="paginationData.totalPages > 4" class="dots">
        ...
      </p>
      <div v-if="paginationData.totalPages > 4" class="num">
        {{ paginationData.totalPages }}
      </div>
      <span class="material-icons-outlined" :class="`${!paginationData.hasNextPage ? 'disable_arrow' : ''}`">
        chevron_right
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paginationData: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    changePage (num) {
      if (this.paginationData.page !== num) {
        this.$emit('changePage', num)
      }
    }
  }
}
</script>

<style scoped>
.pagination_ctn {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.pagination_num_ctn {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
}

.num_ctn {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
}

.pagination_num_ctn span {
  margin: 0 7px;
  cursor: pointer;
}
.dots {
  margin: 0 7px;
  font-size: 18px;
}

.num {
  width: 25px;
  height: 25px;
  display: flex;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7px;
  color: #000000b3;
  cursor: pointer;
}

.active_num {
  font-weight: 600;
  background-color: #CCE6FF;
  color: var(--primary-color);
}

.disable_arrow {
  color: #0000002f;
  cursor: not-allowed !important;
}
</style>

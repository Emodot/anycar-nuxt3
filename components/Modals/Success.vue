<template>
  <div class="modal-backdrop" @click="$emit('close-modal')">
    <div class="modal reveals" @click.stop>
      <div class="top_section">
        <p class="modal_title">
          Congratulations!
        </p>
        <span class="material-icons-outlined close" @click="$emit('close-modal')">
          close
        </span>
      </div>
      <div class="modal_content">
        <div class="modal_icon">
          <img src="~assets/icons/success.gif" alt="">
        </div>
        <p class="modal_text">
          Your inspection has been scheduled successfully for {{ dateTime.date }} for {{ formatTime(dateTime.time) }}, more details has been sent to your email someone from our support team will contact you
        </p>
        <div class="bottom_btn">
          <!-- <button class="global_btn compare_btn">
            My Dashboard
          </button> -->
          <button class="global_btn" @click="$emit('close-modal')">
            Ok, Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dateTime: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      productList: [],
      total: 0
    }
  },
  // watch: {
  //   dateTime: {
  //     immediate: true,
  //     handler (val) {
  //       console.log(val)
  //       this.formatTime()
  //     }
  //   }
  // },
  methods: {
    formatTime (date) {
      const [hours, minutes] = date.split(':')

      const hoursInt = parseInt(hours, 10)

      const period = hoursInt >= 12 ? 'PM' : 'AM'

      const hours12 = hoursInt % 12 || 12

      // Format the time as AM/PM
      const ampmTime = `${hours12}:${minutes} ${period}`
      return ampmTime
    }
  }
}
</script>

<style scoped>
.modal-backdrop {
  z-index: 7;
  position: fixed;
  overflow: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(24, 18, 46, 0.8);
}

.modal {
  /* margin-top: 5%; */
  position: relative;
  background-color: white;
  width: 40%;
  max-width: 550px;
  height: fit-content;
  align-items: center;
  border-radius: 20px;
  overflow-y: auto;
  padding: 40px 4rem;
}

.modal_icon {
  width: 50%;
  margin: auto;
  margin-top: -40px;
}

.modal_icon img {
  width: 100%;
  text-align: center;
}

.modal_text {
  width: 80%;
  margin: auto;
  text-align: center;
  margin-top: -30px;
}

.top_section {
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 3rem; */
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 20px;
}

.modal_title {
  font-size: 18px;
  font-weight: 700;
}

.close {
  position: absolute;
  cursor: pointer;
  color: #C5C5C5;
  right: 2rem;
  top: 2rem;
}

.modal_content {
  margin-top: 10px;
}

.input_flex {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.input_ctn {
  width: 100%;
  margin-bottom: 20px;
}

.input_flex_item {
  flex-basis: 48%;
}

.global_btn {
  width: 100%;
  margin-top: 2rem;
}

.bottom_btn {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.global_btn {
  margin-left: 20px;
}

.compare_btn {
  border: 1px solid var(--primary-color);
  background-color: #fff;
  color: var(--primary-color);
}

@media only screen and (max-width: 1200px) {
  .modal {
    width: 50%;
  }
}

@media only screen and (max-width: 900px) {
  .modal {
    width: 70%;
  }
}

@media only screen and (max-width: 500px) {

  .modal {
    width: 90%;
  }

  .modal_content {
    padding: 20px 10px;
  }

}

</style>

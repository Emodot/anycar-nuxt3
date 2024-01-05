<template>
  <div class="ctn">
    <div class="reveals">
      <div class="top_section">
        <p class="modal_title">Congratulations!</p>
        <span
          class="material-icons-outlined close"
          @click="$emit('close-modal')"
        >
          close
        </span>
      </div>
      <div class="modal_content">
        <div class="modal_icon">
          <img src="~assets/icons/success.gif" alt="" />
        </div>
        <!-- <p class="modal_text">
          Your inspection has been scheduled successfully for
          {{ formatDate(dateTime.date) }} for {{ formatTime(dateTime.time) }},
          more details has been sent to your email someone from our support team
          will contact you
        </p> -->
        <p class="modal_text">
          You have successfully booked an appointment. Our representative will reach out to you within 24 hours
        </p>
        <p class="modal_text">
          Feel Free to give us a call on this number +234 700 012 3456
        </p>
        <div class="bottom_btn">
          <!-- <button class="global_btn compare_btn">
            My Dashboard
          </button> -->
          <button class="global_btn" @click="$router.push('/')">
            Return to Home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  dateTime: {
    type: Object,
    default: () => {},
  },
});

const formatDate = (date) => {
  const newDate = new Date(date).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return newDate;
};
const formatTime = (date) => {
  const [hours, minutes] = date.split(":");

  const hoursInt = parseInt(hours, 10);

  const period = hoursInt >= 12 ? "PM" : "AM";

  const hours12 = hoursInt % 12 || 12;

  // Format the time as AM/PM
  const ampmTime = `${hours12}:${minutes} ${period}`;
  return ampmTime;
};
</script>

<style scoped>
.modal_icon {
  width: 50%;
  margin: auto;
  margin-top: -40px;
  margin-bottom: -30px;
}

.modal_icon img {
  width: 100%;
  text-align: center;
}
.modal_text {
  width: 80%;
  margin: auto;
  text-align: center;
  margin-bottom: 20px;
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
  color: #c5c5c5;
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

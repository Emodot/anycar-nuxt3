<template>
  <div class="main_ctn" @click="closeList = true">
    <div class="inner">
      <div class="main_section">
        <div class="lhs">
          <h2 class="title">Sell your car, new or old</h2>
          <p class="sub_title">
            Kindly upload the details of your car, once approved, it will be
            visible to potential buyers
          </p>
          <div class="lhs_img">
            <img src="~assets/images/sell_car_img.jpg" alt="" />
          </div>
        </div>
        <div class="rhs">
          <div v-if="!carAdded" class="rhs_inner">
            <SellCarOne
              v-if="activeForm === 'step 1'"
              :close-list="closeList"
              @next="setActiveForm('step 2')"
            />
            <SellCarTwo
              v-if="activeForm === 'step 2'"
              @next="setActiveForm('step 3')"
            />
            <SellCarThree
              v-if="activeForm === 'step 3'"
              @next="submit"
            />
            <div class="bottom_section">
              <div class="bottom_btns">
                <button
                  :class="`global_btn_2 ${formOne ? 'disabled_btn' : ''}`"
                  @click="prevForm()"
                >
                  Prev
                </button>
                <button
                  v-if="!loading"
                  class="global_btn"
                  @click="submitForm()"
                >
                  {{ formThree ? "Submit" : "Next" }}
                </button>
                <button v-else class="global_btn" disabled>
                  <Loader class="come-down" />
                </button>
              </div>
            </div>
          </div>
          <SellCarDetailsAdded v-else :date-time="dateTime" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const dataStore = useDataStore();
const route = useRoute();

const activeForm = ref(route.query?.progress || 'step 1')
const formOne = ref(true);
const formTwo = ref(false);
const formThree = ref(false);
const formOneCompleted = ref(false);
const formTwoCompleted = ref(false);
const formThreeCompleted = ref(false);
const carAdded = ref(false);
const loading = ref(false);
const dateTime = ref({
  date: "",
  time: "",
});
const closeList = ref(false);

const updateRoute = (val) => {
  navigateTo({
    path: '/sell-car',
    query: {
      progress: val,
    },
  });
};

const setActiveForm = (val) => {
  console.log(val);
  activeForm.value = val
  updateRoute(val)
}

const submit = (data) => {
  loading.value = true;
  const form = sellCarData.sellCarForm;
  console.log(form);
  const carImages = data;
  console.log(carImages);
  const formattedYear = new Date(form.year_manufacture).getFullYear();
  const convertedDate = new Date(form.inspectionDate);
  dateTime.date.value = form.inspectionDate;
  dateTime.time.value = form.inspectionTime;
  console.log(dateTime);
  const formdata = new FormData();
  formdata.append("make", form.make);
  formdata.append("model", form.model);
  formdata.append("yearOfManufacture", formattedYear);
  formdata.append("condition", form.condition);
  formdata.append("transmissionType", form.transmission_type);
  formdata.append("interiorColor", form.interior_color);
  formdata.append("exteriorColor", form.exterior_color);
  formdata.append("vin", form.vin);
  formdata.append("engineType", form.engine_type);
  formdata.append("name", form.name);
  formdata.append("phoneNumber", form.phone);
  for (let i = 0; i < carImages.length; i++) {
    formdata.append("images", carImages[i]);
  }
  formdata.append("email", form.email);
  formdata.append("askingPrice", form.asking_price);
  formdata.append("proposedInspectionDate", convertedDate);
  formdata.append("proposedInspectionTime", form.inspectionTime);
  console.log(formdata);
  axios
    .post("api/sell", formdata)
    .then((response) => {
      console.log(response);
      carAdded = true;
      const clearedForm = {
        makeId: 0,
        make: "",
        model: "",
        year_manufacture: 0,
        formattedYear: 0,
        condition: "",
        transmission_type: "",
        interior_color: "",
        exterior_color: "",
        vin: "",
        engine_type: "",
        asking_price: "",
        name: "",
        email: "",
        phone: "",
        inspectionDate: "",
        inspectionTime: "",
      };
      // sellCarData.commit("setSellCarForm", clearedForm);
    })
    .catch((_err) => {
      saveFormThree.value = false;
      const { message } = _err?.response?.data?.error || _err?.message;
      // apiErrorMessage.value = message;
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

<style scoped>
.main_ctn {
  background-color: #F2F4F7;
  padding: 120px 0;
}

.inner {
  max-width: 1344px;
  width: 80%;
  margin: auto;
}
.top_section {
  display: flex;
  justify-content: space-between;
  /* padding: 20px 0 40px; */
}

.title {
  margin-bottom: 5px;
}

.main_section {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.lhs {
  flex-basis: 45%;
}

.lhs_img {
  margin-top: 3rem;
  width: 100%;
}

.lhs_img img {
  width: 100%;
  border-radius: 10px;
}

.rhs {
  flex-basis: 45%;
  background-color: #FFF;
  padding: 4rem;
  border-radius: 10px;
}

.rhs_inner {
  height: fit-content;
  transition: 0.5s;
}

.bottom_section {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress_bar {
  display: flex;
  flex-basis: 60%;
}

.progress_line {
  width: 3rem;
  height: 5px;
  border-radius: 30px;
  margin-right: 15px;
  background-color: rgba(21, 10, 65, 0.2);
  transition: 0.5s;
}

.completed_line {
  background-color: var(--primary-color);
}

.active_line {
  background-color: var(--primary-color);
  width: 5rem;
}

.global_btn_2 {
  margin-right: 10px;
}

.bottom_btns {
  display: flex;
}

.disabled_btn {
  opacity: 0.3;
  cursor: not-allowed;
}

@media only screen and (max-width: 1300px) {
}

@media only screen and (max-width: 1200px) {
  .inner {
    width: 90%;
  }
  .lhs {
    flex-basis: 45%;
  }
  .rhs {
    flex-basis: 50%;
    display: flex;
    justify-content: flex-end;
  }
  .rhs_inner {
    width: 90%;
  }
  .progress_bar {
    flex-basis: 100%;
    margin-bottom: 30px;
  }
  .bottom_section {
    padding-top: 10px;
    flex-direction: column;
  }
}
@media only screen and (max-width: 900px) {
  .lhs {
    flex-basis: 40%;
  }
  .rhs {
    flex-basis: 55%;
  }
}
@media only screen and (max-width: 500px) {
  .lhs {
    display: none;
  }
  .rhs {
    flex-basis: 100%;
  }
  .rhs_inner {
    width: 100%;
  }
}
</style>

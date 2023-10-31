<template>
  <div class="main_ctn" @click="closeList = true">
    <div class="inner">
      <div class="top_section">
        <div>
          <h2 class="title">Sell your car, new or old</h2>
          <p class="sub_title">
            Kindly upload the details of your car, once approved, it will be
            visible to potential buyers
          </p>
        </div>
      </div>
      <div class="main_section">
        <div class="lhs">
          <div class="lhs_img">
            <img src="~assets/images/sell_car_img.jpg" alt="" />
          </div>
        </div>
        <div class="rhs">
          <div v-if="!carAdded" class="rhs_inner">
            <SellCarOne
              v-if="formOne"
              :save-form="saveFormOne"
              :close-list="closeList"
              @next="toFormTwo()"
            />
            <SellCarTwo
              v-if="formTwo"
              :save-form="saveFormTwo"
              @next="toFormThree()"
            />
            <SellCarThree
              v-if="formThree"
              :save-form="saveFormThree"
              @next="submit"
            />
            <div class="bottom_section">
              <div class="progress_bar">
                <div
                  :class="`progress_line ${
                    formOneCompleted
                      ? 'completed_line'
                      : formOne
                      ? 'active_line completed_line'
                      : ''
                  }`"
                />
                <div
                  :class="`progress_line ${
                    formTwoCompleted
                      ? 'completed_line'
                      : formTwo
                      ? 'active_line completed_line'
                      : ''
                  }`"
                />
                <div
                  :class="`progress_line ${
                    formThreeCompleted
                      ? 'completed_line'
                      : formThree
                      ? 'active_line completed_line'
                      : ''
                  }`"
                />
              </div>
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
const config = useRuntimeConfig();
const baseUrl = config.public.BASE_URL;
const sellCarData = useSellCarStore();
// const { sellCarData } = storeToRefs(useSellCarStore());

const saveFormOne = ref(false);
const saveFormTwo = ref(false);
const saveFormThree = ref(false);
const formOne = ref(false);
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

const submitForm = () => {
  if (formOne.value) {
    saveFormOne.value = true;
    saveFormTwo.value = false;
    saveFormThree.value = false;
  } else if (formTwo.value) {
    saveFormTwo.value = true;
    saveFormOne.value = false;
    saveFormThree.value = false;
  } else {
    saveFormThree.value = true;
    saveFormTwo.value = false;
    saveFormOne.value = false;
  }
};
const toFormTwo = () => {
  formOne.value = false;
  formTwo.value = true;
  formOneCompleted.value = true;
};
const toFormThree = () => {
  formOne.value = false;
  formTwo.value = false;
  formThree.value = true;
  formTwoCompleted.value = true;
};
const prevForm = () => {
  saveFormTwo.value = false;
  saveFormOne.value = false;
  saveFormThree.value = false;
  if (formTwo.value) {
    formTwoCompleted.value = false;
    formOneCompleted.value = false;
    formTwo.value = false;
    formThree.value = false;
    formOne.value = true;
    console.log(formOne.value);
  } else if (formThree.value) {
    formThreeCompleted.value = false;
    formTwoCompleted.value = false;
    formThree.value = false;
    formTwo.value = true;
    formOne.value = false;
  } else {
    console.log(formData.value);
  }
};

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
  const path = "api/sell";
  axios
    .post(`${baseUrl}${path}`, formdata)
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
      apiErrorMessage.value = message;
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

<style scoped>
.main_ctn {
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
  margin-top: 3rem;
}

.lhs_img {
  width: 100%;
}

.lhs_img img {
  width: 100%;
  border-radius: 10px;
}

.rhs {
  flex-basis: 30%;
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

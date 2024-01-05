<template>
  <div class="form_container" @click="showItemList = false">
    <div class="form_inner">
      <div class="input_ctn" @click.stop>
        <p class="label">Make</p>
        <div
          class="form_input custom_input_box"
          @click="showItemList = !showItemList"
        >
          <p>{{ formOne.make }}</p>
          <SmallLoader v-if="makeLoading" class="arrow" />
          <span v-else class="material-icons-outlined"> expand_more </span>
        </div>
        <div v-if="showItemList" class="list_ctn" @click.stop>
          <div class="item_list_ctn">
            <div
              v-for="(make, index) in carMakes"
              :key="index"
              class="item_list"
              @click="selectMake(make)"
            >
              <p class="item_name">
                {{ make.name || "--" }}
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="form-select">
          <select v-model="formOne.make">
            <option value="" disabled />
            <option v-for="(make, index) in carMakes" :key="index" :value="make.name" @input="getMakeID">
              {{ make.name }}
            </option>
          </select>
          <span class="material-icons-outlined arrow">
            expand_more
          </span>
        </div> -->
      </div>
      <div class="input_ctn">
        <p class="label">Year of Manufacture</p>
        <!-- <datepicker
          :value="formOne.year_manufacture"
          :format="'yyyy'"
          class="datePicker"
          :minimum-view="'year'"
          :maximum-view="'year'"
          :initial-view="'year'"
          @input="getDate"
        /> -->
      </div>
      <div class="input_ctn">
        <p class="label">Model</p>
        <div class="form-select">
          <select v-model="formOne.model">
            <option value="" disabled />
            <option
              v-for="(models, index) in carModels"
              :key="index"
              :value="models.name"
            >
              {{ models.name }}
            </option>
          </select>
          <SmallLoader v-if="modelLoading" class="arrow" />
          <span v-else class="material-icons-outlined arrow">
            expand_more
          </span>
        </div>
      </div>
      <div class="input_ctn">
        <p class="label">Condition</p>
        <div class="form-select">
          <select v-model="formOne.condition">
            <option value="" disabled />
            <option value="new">New</option>
            <option value="foreignUsed">Foreign Used</option>
            <option value="used">Used</option>
          </select>
          <span class="material-icons-outlined arrow"> expand_more </span>
        </div>
      </div>
      <div class="input_ctn">
        <p class="label">Transmission Type</p>
        <div class="form-select">
          <select v-model="formOne.transmission_type">
            <option value="" disabled />
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
            <option value="semiautomatic">Semi-Automatic</option>
          </select>
          <span class="material-icons-outlined arrow"> expand_more </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";
import axios from "axios";
const config = useRuntimeConfig();
const baseUrl = config.public.BASE_URL;
const emit = defineEmits(["next"]);

const sellCarData = useSellCarStore();
console.log(sellCarData);
// const { sellCarData } = storeToRefs(useSellCarStore());

const props = defineProps({
  saveForm: {
    type: Boolean,
    default: false,
  },
  closeList: {
    type: Boolean,
    default: false,
  },
});

watch(
  () => props.saveForm,
  (first, second) => {
    console.log("form-one-first", first);
    console.log("form-one-sec", second);
    if (val) {
      console.log(formOne.year_manufacture.value);
      $store.dispatch("setSellCarForm", formOne.value);
      emit("next");
    }
  },
  {
    immediate: true,
  }
);

const showItemList = ref(false);
const makeLoading = ref(false);
const modelLoading = ref(false);
const carMakes = ref([]);
const carModels = ref([]);
const formOne = ref({
  makeId: 0,
  make: "",
  model: "",
  year_manufacture: 0,
  formattedYear: 0,
  condition: "",
  transmission_type: "",
});

const selectMake = (data) => {
  console.log(data);
  formOne.make.value = data.name;
  formOne.makeId.value = data.id;
  showItemList.value = false;
  if (formOne.formattedYear.value !== 0) {
    getModels();
  }
};
const getMake = () => {
  makeLoading.value = true;
  axios
    .get("api/make")
    .then((response) => {
      console.log(response);
      carMakes.value = response.docs.data;
    })
    .catch((_err) => {
      const { message } = _err?.response?.data?.error || _err?.message;
      apiErrorMessage.value = message;
    })
    .finally(() => {
      makeLoading.value = false;
    });
};
const getModels = (year) => {
  modelLoading.value = true;
  const path = `api/model?year=${formOne.formattedYear.value}&make_id=${formOne.makeId.value}`;
  axios
    .get(path)
    .then((response) => {
      console.log(response);
      carModels.value = response.data.data;
    })
    .catch((_err) => {
      console.log(_err);
      const { message } = _err?.response?.data?.error || _err?.message;

      apiErrorMessage.value = message;
    })
    .finally(() => {
      modelLoading.value = false;
    });
};
const customFormatter = (date) => {
  return moment(date).format("YYYY");
};
const getDate = (val) => {
  console.log(val);
  formOne.year_manufacture.value = val;
  const dateString = val;
  formOne.formattedYear.value = new Date(dateString).getFullYear();
  console.log(formOne.formattedYear.value);
  getModels();
};

const formData = sellCarData.sellCarForm;
console.log(formData);
formOne.make.value = formData.make;
formOne.makeId.value = formData.makeId;
formOne.model.value = formData.model;
formOne.year_manufacture.value = formData.year_manufacture;
formOne.formattedYear.value = formData.formattedYear;
formOne.condition.value = formData.condition;
formOne.transmission_type.value = formData.transmission_type;
getMake();
getModels();

// export default {
//   watch: {
//     saveForm: {
//       immediate: true,
//       handler(val) {
//         // console.log(val)
//         if (val) {
//           console.log(this.formOne.year_manufacture);
//           this.$store.dispatch("setSellCarForm", this.formOne);
//           this.$emit("next");
//         }
//       },
//     },
//     closeList: {
//       // immediate: true,
//       handler(val) {
//         console.log(val);
//         if (val) {
//           this.showItemList = false;
//         }
//       },
//     },
//   },
// };
</script>

<style scoped>
.custom_input_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.list_ctn {
  position: relative;
}
.item_list_ctn {
  border: 1px solid #00000039;
  max-height: 40rem;
  width: 100%;
  overflow: auto;
  border-radius: 5px;
  background-color: #fff;
  /* margin-top: 30px; */
  position: absolute;
  top: 0;
  z-index: 5;
  /* left: 40%; */
}
.item_list {
  /* height: 50px; */
  border-bottom: 1px solid #00000011;
  /* display: flex;
  align-items: center; */
  cursor: pointer;
  padding: 15px 0 15px 20px;
  background-color: #fff;
}
</style>

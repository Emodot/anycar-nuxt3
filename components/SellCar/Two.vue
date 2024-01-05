<template>
  <div class="form_container">
    <div class="top_section">
      <p class="form_title">Fill in your Car Details</p>
      <p class="form_step">Step 2 of 4</p>
    </div>
    <div class="form_inner">
      <div class="input_ctn">
        <p class="label">Interior Color</p>
        <input
          v-model="formTwo.interior_color"
          class="form_input"
          type="text"
        />
      </div>
      <div class="input_ctn">
        <p class="label">Exterior Color</p>
        <input
          v-model="formTwo.exterior_color"
          class="form_input"
          type="text"
        />
      </div>
      <div class="input_ctn">
        <p class="label">VIN</p>
        <input v-model="formTwo.vin" class="form_input" type="text" @input="formatVin"/>
      </div>
      <div class="input_ctn">
        <p class="label">Engine Type</p>
        <div class="form-select">
          <select v-model="formTwo.engine_type">
            <option value="" disabled />
            <option value="4 - Cylinder">4 - Cylinder</option>
            <option value="6 - Cylinder">6 - Cylinder</option>
            <option value="8 - Cylinder">8 - Cylinder</option>
          </select>
          <span class="material-icons-outlined arrow"> expand_more </span>
        </div>
      </div>
      <div class="input_ctn">
        <p class="label">Asking Price</p>
        <!-- <money v-model="formTwo.asking_price" v-bind="money" /> -->
        <!-- <input v-model="formTwo.asking_price" :ref="options" class="form_input" type="text"> -->
        <MoneyInput v-model="formTwo.asking_price" :options="options" />
      </div>
      <button class="global_btn" @click="saveForm()">Next</button>
    </div>
  </div>
</template>

<script setup>
import { useCurrencyInput } from "vue-currency-input";
const emit = defineEmits(["next"]);
const dataStore = useDataStore();

const formTwo = ref({
  interior_color: "",
  exterior_color: "",
  vin: "",
  engine_type: "",
  asking_price: "",
});

const options = ref({
  currency: "NGN",
  locale: "en",
  currencyDisplay: 'symbol',
  hideCurrencySymbolOnFocus: false,
  hideGroupingSeparatorOnFocus: false,
  precision: 0,
  valueRange: { min: 0 },
});

const formData = dataStore.sellCarForm;
console.log(formData);
formTwo.value.interior_color = formData.interior_color;
formTwo.value.exterior_color = formData.exterior_color;
formTwo.value.vin = formData.vin;
formTwo.value.engine_type = formData.engine_type;
formTwo.value.asking_price = formData.asking_price;

const saveForm = () => {
  dataStore.setSellCarForm(formTwo.value);
  emit("next");
};

const formatVin = (data) => {
  formTwo.value.vin = data.target.value.toUpperCase()
}
</script>

<style scoped>
.global_btn {
  margin-top: 20px;
  width: 100%;
}
.top_section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.form_title {
  font-size: 20px;
  font-weight: 700;
}
.form_step {
  font-size: 14px;
}
</style>

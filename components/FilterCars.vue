<template>
  <div class="filter_ctn">
    <div class="lhs">
      <div class="size_ctn">
        <div class="top_side">
          <p class="filter_title">Filter Result</p>
          <span class="material-icons-outlined tune_icon"> tune </span>
        </div>
        <hr class="size_line" />
        <div v-if="selectedFilters.length" class="filter_inner_ctn">
          <div class="filter_inner">
            <p class="filter_name">Applied Filter</p>
            <p class="clear_filter" @click="clearSelected()">
              Clear all Flter
              <span class="material-icons-outlined cancel_icon"> cancel </span>
            </p>
          </div>
          <div class="select_value_ctn">
            <div
              v-for="(value, index) in selectedFilters"
              :key="index"
              class="select_value"
            >
              <p class="selcted_item_text">
                {{ value }}
                <span
                  class="material-icons-outlined cancel_icon"
                  @click="removeSelected(value)"
                >
                  cancel
                </span>
              </p>
            </div>
          </div>
          <hr class="size_line" />
        </div>
        <div class="filter_inner_ctn">
          <div class="filter_inner" @click="togglePriceTab()">
            <p class="filter_name">Price</p>
            <span class="material-icons-outlined arrow_right_icon">
              expand_more
            </span>
          </div>
          <div v-if="openPriceTab" class="filter_ctn_item">
            <div class="price_filter_tabs">
              <div
                v-for="(tab, index) in priceFilterTabs"
                :key="index"
                class="price_filter_tab_item"
                :class="priceFilterActiveTab === tab ? 'active_price_tab' : ''"
                @click="priceFilterActiveTab = tab"
              >
                <p>{{ tab }}</p>
              </div>
            </div>
            <div v-if="priceFilterActiveTab === 'Outright Purchase'">
              <div class="select_value_ctn">
                <div
                  v-for="(value, index) in priceOutrightValues"
                  :key="index"
                  class="select_value"
                  @click="
                    priceFilter = value;
                    addSelected(value);
                  "
                >
                  <p>{{ value }}</p>
                </div>
              </div>
            </div>
            <div v-if="priceFilterActiveTab === 'Monthly Purchase'">
              <div class="select_value_ctn">
                <div
                  v-for="(value, index) in priceMonthlyValues"
                  :key="index"
                  class="select_value"
                  @click="
                    priceFilter = value;
                    addSelected(value);
                  "
                >
                  <p>{{ value }}</p>
                </div>
              </div>
            </div>
            <!-- <input v-model="priceFilter" type="text" /> -->
          </div>
          <hr class="size_line" />
        </div>
        <div class="filter_inner_ctn">
          <div class="filter_inner" @click="toggleYearTab()">
            <p class="filter_name">Year</p>
            <span class="material-icons-outlined arrow_right_icon">
              expand_more
            </span>
          </div>
          <div v-if="openYearTab" class="filter_ctn_item">
            <div class="select_value_ctn">
              <div
                v-for="(value, index) in yearValues"
                :key="index"
                class="select_value"
                @click="yearFilter = value"
              >
                <p>{{ value }}</p>
              </div>
            </div>
          </div>
          <hr class="size_line" />
        </div>
        <div class="filter_inner_ctn">
          <div class="filter_inner" @click="toggleMileageTab()">
            <p class="filter_name">Mileage</p>
            <span class="material-icons-outlined arrow_right_icon">
              expand_more
            </span>
          </div>
          <div v-if="openMileageTab" class="filter_ctn_item">
            <div class="select_value_ctn">
              <div
                v-for="(value, index) in mileageValues"
                :key="index"
                class="select_value"
                @click="mileageFilter = value"
              >
                <p>{{ value }}</p>
              </div>
            </div>
            <!-- <input v-model="mileageFilter" type="text" />
            <span
              class="material-icons-outlined search_icon"
              @click="filterMileage()"
            >
              east
            </span> -->
          </div>
          <hr class="size_line" />
        </div>
        <div class="filter_inner_ctn">
          <div class="filter_inner" @click="toggleEngineTypeTab()">
            <p class="filter_name">Engine Type</p>
            <span class="material-icons-outlined arrow_right_icon">
              expand_more
            </span>
          </div>
          <div v-if="openEngineTypeTab" class="filter_ctn_item">
            <div class="select_value_ctn">
              <div
                v-for="(value, index) in engineTypeValues"
                :key="index"
                class="select_value"
                @click="enginetypeFilter = value"
              >
                <p>{{ value }}</p>
              </div>
            </div>
          </div>
          <hr class="size_line" />
        </div>
        <div class="filter_inner_ctn">
          <div class="filter_inner" @click="toggleTransmissionTypeTab()">
            <p class="filter_name">Transmission Type</p>
            <span class="material-icons-outlined arrow_right_icon">
              expand_more
            </span>
          </div>
          <div v-if="openTransmissionTypeTab" class="filter_ctn_item">
            <div class="select_value_ctn">
              <div
                v-for="(value, index) in transmissionTypeValues"
                :key="index"
                class="select_value"
                @click="transmissionTypeFilter = value"
              >
                <p>{{ value }}</p>
              </div>
            </div>
          </div>
          <hr class="size_line" />
        </div>
        <div class="filter_inner_ctn">
          <div class="filter_inner" @click="toggleConditionTab()">
            <p class="filter_name">Selling Condition</p>
            <span class="material-icons-outlined arrow_right_icon">
              expand_more
            </span>
          </div>
          <div v-if="openConditionTab" class="filter_ctn_item">
            <div class="select_value_ctn">
              <div
                v-for="(value, index) in conditionValues"
                :key="index"
                class="select_value"
                @click="conditionFilter = value"
              >
                <p>{{ value }}</p>
              </div>
            </div>
          </div>
          <hr class="size_line" />
        </div>
        <div class="filter_inner_ctn">
          <div class="filter_inner" @click="toggleFuelTypeTab()">
            <p class="filter_name">Fuel Type</p>
            <span class="material-icons-outlined arrow_right_icon">
              expand_more
            </span>
          </div>
          <div v-if="openFuelTypeTab" class="filter_ctn_item">
            <div class="select_value_ctn">
              <div
                v-for="(value, index) in fuelTypeValues"
                :key="index"
                class="select_value"
                @click="fuelTypeFilter = value"
              >
                <p>{{ value }}</p>
              </div>
            </div>
          </div>
          <!-- <hr class="size_line" /> -->
        </div>
      </div>
    </div>
    <div class="rhs">
      <div v-if="!props.loading" class="product_list_ctn">
        <CarCard
          v-if="props.data?.docs?.length"
          :card-details="data?.docs"
          :img-height="16"
          @cardAction="cardAction"
        />
        <div v-else class="empty_state_ctn">
          <div>
            <svg
              width="224"
              height="219"
              viewBox="0 0 224 219"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_671_1081)">
                <path
                  d="M142.204 49.2524H81.8463C80.4708 49.2541 79.1522 49.8021 78.1796 50.7762C77.207 51.7504 76.6598 53.0711 76.6582 54.4488V188.809L75.9664 189.021L61.1596 193.562C60.4578 193.776 59.6999 193.703 59.0521 193.358C58.4043 193.013 57.9196 192.425 57.7044 191.723L13.6608 47.6277C13.4464 46.9248 13.5195 46.1655 13.8639 45.5165C14.2083 44.8676 14.7958 44.3821 15.4974 44.1669L38.3147 37.1691L104.463 16.8895L127.28 9.89173C127.627 9.78469 127.992 9.74729 128.354 9.78166C128.716 9.81603 129.067 9.92151 129.388 10.092C129.709 10.2626 129.993 10.4948 130.224 10.7755C130.456 11.0562 130.629 11.3798 130.735 11.7278L141.994 48.5596L142.204 49.2524Z"
                  fill="#F2F2F2"
                />
                <path
                  d="M155.375 48.5597L141.807 4.16891C141.581 3.42928 141.212 2.74145 140.721 2.14473C140.229 1.548 139.625 1.05409 138.944 0.691192C138.262 0.328299 137.515 0.10354 136.746 0.0297699C135.978 -0.0440006 135.202 0.0346621 134.464 0.261255L102.384 10.0962L36.2393 30.3793L4.15957 40.2178C2.66931 40.6761 1.4215 41.7079 0.690028 43.0868C-0.0414458 44.4657 -0.196821 46.0789 0.258013 47.5723L46.6327 199.282C47.0022 200.487 47.7477 201.542 48.7599 202.293C49.7721 203.043 50.9976 203.448 52.2567 203.449C52.8394 203.449 53.4189 203.362 53.9756 203.189L75.9662 196.448L76.658 196.233V195.509L75.9662 195.72L53.7716 202.528C52.4562 202.929 51.0354 202.792 49.8209 202.146C48.6065 201.5 47.6975 200.397 47.2934 199.081L0.922232 47.368C0.722002 46.7156 0.652217 46.0301 0.71687 45.3507C0.781522 44.6713 0.979337 44.0114 1.299 43.4087C1.61866 42.8059 2.05389 42.2723 2.57976 41.8383C3.10562 41.4043 3.7118 41.0785 4.36357 40.8794L36.4433 31.041L102.588 10.7614L134.668 0.922931C135.162 0.77182 135.676 0.694772 136.193 0.69429C137.302 0.696784 138.382 1.05497 139.273 1.71639C140.164 2.3778 140.821 3.30769 141.146 4.36985L154.652 48.5597L154.867 49.2525H155.586L155.375 48.5597Z"
                  fill="#3F3D56"
                />
                <path
                  d="M42.4322 44.2802C41.7655 44.2798 41.1166 44.0653 40.5806 43.6684C40.0445 43.2714 39.6496 42.7129 39.4537 42.0747L34.9988 27.5C34.879 27.1085 34.8375 26.6972 34.8765 26.2896C34.9155 25.8821 35.0343 25.4862 35.2261 25.1246C35.4179 24.763 35.6789 24.4428 35.9943 24.1822C36.3096 23.9217 36.6731 23.7259 37.064 23.6061L97.9166 4.94643C98.706 4.70516 99.5588 4.78745 100.288 5.17523C101.017 5.56302 101.562 6.22462 101.804 7.01483L106.259 21.5897C106.5 22.3803 106.418 23.2344 106.031 23.9644C105.644 24.6944 104.983 25.2408 104.194 25.4837L43.3416 44.1434C43.0469 44.234 42.7404 44.2801 42.4322 44.2802Z"
                  fill="#55003B"
                />
                <path
                  d="M65.769 15.5733C69.5894 15.5733 72.6865 12.4713 72.6865 8.64478C72.6865 4.81829 69.5894 1.71631 65.769 1.71631C61.9486 1.71631 58.8516 4.81829 58.8516 8.64478C58.8516 12.4713 61.9486 15.5733 65.769 15.5733Z"
                  fill="#55003B"
                />
                <path
                  d="M65.769 13.0322C68.1882 13.0322 70.1494 11.0679 70.1494 8.64489C70.1494 6.22184 68.1882 4.25757 65.769 4.25757C63.3498 4.25757 61.3887 6.22184 61.3887 8.64489C61.3887 11.0679 63.3498 13.0322 65.769 13.0322Z"
                  fill="white"
                />
                <path
                  d="M208.436 201.679H91.5307C90.7513 201.678 90.004 201.367 89.4529 200.815C88.9017 200.263 88.5917 199.515 88.5908 198.734V58.4326C88.5917 57.6519 88.9017 56.9035 89.4529 56.3515C90.004 55.7994 90.7513 55.4889 91.5307 55.488H208.436C209.215 55.4889 209.963 55.7995 210.514 56.3515C211.065 56.9035 211.375 57.652 211.376 58.4326V198.734C211.375 199.515 211.065 200.263 210.514 200.815C209.963 201.367 209.215 201.678 208.436 201.679Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M154.652 48.5596H81.8462C80.2874 48.5618 78.7931 49.183 77.6909 50.2869C76.5887 51.3909 75.9685 52.8875 75.9663 54.4488V195.72L76.6581 195.509V54.4488C76.6597 53.0711 77.2069 51.7504 78.1795 50.7762C79.1521 49.8021 80.4707 49.2541 81.8462 49.2524H154.867L154.652 48.5596ZM218.12 48.5596H81.8462C80.2874 48.5618 78.7931 49.183 77.6909 50.2869C76.5887 51.3909 75.9685 52.8875 75.9663 54.4488V213.111C75.9685 214.672 76.5887 216.169 77.6909 217.273C78.7931 218.377 80.2874 218.998 81.8462 219H218.12C219.679 218.998 221.173 218.377 222.275 217.273C223.378 216.169 223.998 214.672 224 213.111V54.4488C223.998 52.8875 223.378 51.3909 222.275 50.2869C221.173 49.183 219.679 48.5618 218.12 48.5596ZM223.308 213.111C223.307 214.488 222.759 215.809 221.787 216.783C220.814 217.757 219.496 218.305 218.12 218.307H81.8462C80.4707 218.305 79.1521 217.757 78.1795 216.783C77.2069 215.809 76.6597 214.488 76.6581 213.111V54.4488C76.6597 53.0711 77.2069 51.7504 78.1795 50.7762C79.1521 49.8021 80.4707 49.2541 81.8462 49.2524H218.12C219.496 49.2541 220.814 49.8021 221.787 50.7762C222.759 51.7504 223.307 53.0711 223.308 54.4488V213.111Z"
                  fill="#3F3D56"
                />
                <path
                  d="M181.803 63.8022H118.163C117.337 63.8013 116.546 63.4725 115.963 62.888C115.379 62.3035 115.051 61.511 115.05 60.6844V45.4418C115.051 44.6152 115.379 43.8227 115.963 43.2382C116.546 42.6537 117.337 42.3249 118.163 42.324H181.803C182.629 42.3249 183.42 42.6537 184.003 43.2382C184.587 43.8227 184.915 44.6152 184.916 45.4418V60.6844C184.915 61.511 184.587 62.3035 184.003 62.888C183.42 63.4725 182.629 63.8013 181.803 63.8022Z"
                  fill="#55003B"
                />
                <path
                  d="M149.983 43.3633C153.804 43.3633 156.901 40.2613 156.901 36.4348C156.901 32.6083 153.804 29.5063 149.983 29.5063C146.163 29.5063 143.066 32.6083 143.066 36.4348C143.066 40.2613 146.163 43.3633 149.983 43.3633Z"
                  fill="#55003B"
                />
                <path
                  d="M149.983 40.6548C152.31 40.6548 154.196 38.7654 154.196 36.4347C154.196 34.104 152.31 32.2146 149.983 32.2146C147.656 32.2146 145.77 34.104 145.77 36.4347C145.77 38.7654 147.656 40.6548 149.983 40.6548Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_671_1081">
                  <rect width="224" height="219" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>No Cars available</p>
          </div>
        </div>
      </div>
      <div v-else class="page_loader_ctn">
        <PageLoader />
      </div>
      <Pagination
        v-if="props.data?.docs?.length"
        :pagination-data="props.data"
        @changePage="change"
      />
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits([
  "changePage",
  "filterMake",
  "filterYear",
  "filterPrice",
  "filterMileage",
  "filterType",
]);
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const selectedFilters = ref([]);

const priceFilterActiveTab = ref("Outright Purchase");
const priceFilterTabs = ref(["Outright Purchase", "Monthly Purchase"]);

const priceMonthlyValues = ref([
  "Under N200,000/Mo",
  "N200,000 - N500,000/Mo",
  "Above N500,000",
]);
const priceOutrightValues = ref([
  "Under 3M",
  "3M - 6M",
  "6M - 10M",
  "10M - 15M",
  "Above 15M",
]);
const yearValues = ref([
  "2019 - 2023",
  "2014 - 2018",
  "2009 - 2013",
  "2004 - 2008",
  "Below 2004",
]);
const mileageValues = ref([
  "0KM - 30,000KM",
  "30,000KM - 60,000KM",
  "Above 150,000KM",
]);
const engineTypeValues = ref([
  "4 - Cylinder",
  "6 - Cylinder",
  "8 - Cylinder",
  "10 - Cylinder",
  "12- Cylinder",
]);
const transmissionTypeValues = ref(["Manual", "Automatic", "Duplex"]);
const conditionValues = ref(["Brand New", "Foreign Used", "Nigerian Used"]);
const fuelTypeValues = ref(["Petrol", "Diesel", "Electric", "Hybrid"]);
const makeFilter = ref("");
const engineTypeFilter = ref("");
const T = ref("");
const fuelTypeFilter = ref("");
const conditionFilter = ref("");
const yearFilter = ref("");
const priceFilter = ref("");
const mileageFilter = ref("");
const openMakeTab = ref(false);
const openYearTab = ref(false);
const openPriceTab = ref(false);
const openMileageTab = ref(false);
const openEngineTypeTab = ref(false);
const openTransmissionTypeTab = ref(false);
const openFuelTypeTab = ref(false);
const openConditionTab = ref(false);


const cardAction = (val) => {
  console.log(val);
  emit('cardAction', val)
}

const addSelected = (data) => {
  selectedFilters.value.push(data);
  console.log(selectedFilters.value);
};
const removeSelected = (data) => {
  const index = selectedFilters.value.indexOf(data);
  selectedFilters.value.splice(index, 1);
};
const clearSelected = () => {
  selectedFilters.value = [];
};

const toggleMakeTab = () => {
  openMakeTab.value = !openMakeTab.value;
};
const toggleYearTab = () => {
  openYearTab.value = !openYearTab.value;
};
const togglePriceTab = () => {
  openPriceTab.value = !openPriceTab.value;
};
const toggleMileageTab = () => {
  openMileageTab.value = !openMileageTab.value;
};
const toggleEngineTypeTab = () => {
  openEngineTypeTab.value = !openEngineTypeTab.value;
};
const toggleTransmissionTypeTab = () => {
  openTransmissionTypeTab.value = !openTransmissionTypeTab.value;
};
const toggleFuelTypeTab = () => {
  openFuelTypeTab.value = !openFuelTypeTab.value;
};
const toggleConditionTab = () => {
  openConditionTab.value = !openConditionTab.value;
};

const change = (val) => {
  emit("changePage", val);
};
const filterMake = () => {
  const data = makeFilter.value;
  console.log(data);
  emit("filterMake", data);
};
const filterYear = () => {
  let data = "";
  if (yearFilter.value !== "") {
    data = parseInt(yearFilter.value);
  }
  console.log(data);
  emit("filterYear", data);
};
const filterPrice = () => {
  let data = "";
  if (priceFilter.value !== "") {
    data = parseInt(priceFilter.value);
  }
  console.log(data);
  emit("filterPrice", data);
};
const filterMileage = () => {
  let data = "";
  if (mileageFilter.value !== "") {
    data = parseInt(mileageFilter.value);
  }
  console.log(data);
  emit("filterMileage", data);
};
const filterEngineType = () => {
  let data = "";
  if (engineTypeFilter.value !== "") {
    data = parseInt(engineTypeFilter.value);
  }
  console.log(data);
  emit("filterEngineType", data);
};
const filterTransmissionType = () => {
  let data = "";
  if (transmissionTypeFilter.value !== "") {
    data = parseInt(transmissionTypeFilter.value);
  }
  console.log(data);
  emit("filterTransmissionType", data);
};
const filterFuelType = () => {
  let data = "";
  if (fuelTypeFilter.value !== "") {
    data = parseInt(fuelTypeFilter.value);
  }
  console.log(data);
  emit("filterFuelType", data);
};
const filterCondition = () => {
  let data = "";
  if (conditionFilter.value !== "") {
    data = parseInt(conditionFilter.value);
  }
  console.log(data);
  emit("filterCondition", data);
};
</script>

<style scoped>
.filter_ctn {
  display: flex;
  justify-content: space-between;
}

.lhs {
  flex-basis: 22%;
}
.size_ctn {
  border-radius: 10px;
  border: 1px solid rgba(21, 10, 65, 0.1);
  background-color: #ffffff;
  /* border-radius: 20px; */
  padding: 6px 20px;
}

.top_side {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

.filter_title {
  color: var(--primary-color);
  font-size: 22px;
  font-weight: 700;
  line-height: 48px;
}

.tune_icon {
  color: var(--primary-color);
  font-size: 20px;
}

.filter_inner_ctn {
  height: fit-content;
  transition: 0.5s;
}

.filter_inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  cursor: pointer;
}

.filter_name {
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 700;
}

.arrow_right_icon {
  color: var(--primary-color);
  font-size: 22px;
  font-weight: 100;
}

.size_value {
  font-size: 12px;
  font-weight: 600;
}

.size_line {
  border: none;
  border-top: 1px solid #150a4133;
}

.select_value_ctn {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.select_value {
  background-color: white;
  padding: 0 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: 1px solid #150a411a;
  cursor: pointer;
}

.select_value p {
  font-weight: 500;
}

.clear_filter {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.selcted_item_text {
  display: flex;
  /* align-items: center; */
}

.cancel_icon {
  font-size: 16px;
  margin-left: 9px;
}

.price_filter_tabs {
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.price_filter_tab_item {
  flex-basis: 45%;
  cursor: pointer;
  padding-bottom: 10px;
}

.price_filter_tab_item p {
  font-size: 12px;
  font-weight: 700;
  color: #4d4a5780;
  text-align: center;
}

.active_price_tab {
  border-bottom: 2px solid var(--primary-color);
}

.active_price_tab p {
  color: var(--primary-color);
}

.rhs {
  flex-basis: 76%;
}

input {
  background-color: transparent;
  height: 40px;
}

.filter_ctn_item {
  margin-bottom: 15px;
}

.search_icon {
  color: #150a41bd;
  font-size: 16px;
  cursor: pointer;
}

.empty_state_ctn {
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.empty_state_ctn p {
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-color);
  margin-top: 30px;
  text-align: center;
}

@media only screen and (max-width: 1300px) {
}

@media only screen and (max-width: 1200px) {
  .filter_title {
    white-space: nowrap;
  }
  .lhs {
    flex-basis: 25%;
  }

  .rhs {
    flex-basis: 70%;
  }
  /* .product_list_ctn > .card_list > .card_ctn {
    width: 48% !important;
  } */
}
@media only screen and (max-width: 900px) {
  .lhs {
    flex-basis: 30%;
  }

  .rhs {
    flex-basis: 65%;
  }
}
@media only screen and (max-width: 500px) {
  .hero_ctn {
    height: 70vh;
  }
  .lhs {
    flex-basis: 30%;
    display: none;
  }

  .rhs {
    flex-basis: 100%;
  }
}
</style>

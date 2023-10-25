<template>
  <div class="form_container">
    <div class="form_inner">
      <div class="input_ctn">
        <p class="label">
          Interior Color
        </p>
        <input v-model="formTwo.interior_color" class="form_input" type="text">
      </div>
      <div class="input_ctn">
        <p class="label">
          Exterior Color
        </p>
        <input v-model="formTwo.exterior_color" class="form_input" type="text">
      </div>
      <div class="input_ctn">
        <p class="label">
          VIN
        </p>
        <input v-model="formTwo.vin" class="form_input" type="text">
      </div>
      <div class="input_ctn">
        <p class="label">
          Engine Type
        </p>
        <div class="form-select">
          <select v-model="formTwo.engine_type">
            <option value="" disabled />
            <option value="4 - Cylinder">
              4 - Cylinder
            </option>
            <option value="6 - Cylinder">
              6 - Cylinder
            </option>
            <option value="8 - Cylinder">
              8 - Cylinder
            </option>
          </select>
          <span class="material-icons-outlined arrow">
            expand_more
          </span>
        </div>
      </div>
      <div class="input_ctn">
        <p class="label">
          Asking Price
        </p>
        <money v-model="formTwo.asking_price" v-bind="money" />
        <!-- <input v-model="formTwo.asking_price" class="form_input" type="number"> -->
      </div>
    </div>
  </div>
</template>

<script>
import { Money } from 'v-money'
export default {
  components: { Money },
  props: {
    saveForm: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      money: {
        decimal: '.',
        thousands: ',',
        prefix: '₦ ',
        suffix: '',
        precision: 2,
        masked: false
      },
      formTwo: {
        interior_color: '',
        exterior_color: '',
        vin: '',
        engine_type: '',
        asking_price: ''
      }
    }
  },
  watch: {
    saveForm: {
      immediate: true,
      handler (val) {
        // console.log(this.formTwo.asking_price)
        if (val) {
          this.$store.dispatch('setSellCarForm', this.formTwo)
          this.$emit('next')
        }
      }
    }
  },
  created () {
    const formData = this.$store.state.sellCarForm
    this.formTwo.interior_color = formData.interior_color
    this.formTwo.exterior_color = formData.exterior_color
    this.formTwo.vin = formData.vin
    this.formTwo.engine_type = formData.engine_type
    this.formTwo.asking_price = formData.asking_price
  }
}
</script>

<style scoped></style>

<template>
  <div class="form_container">
    <div class="form_inner">
      <div class="input_ctn">
        <p class="label">
          Your Name
        </p>
        <input v-model="formThree.name" class="form_input" type="text">
      </div>
      <div class="input_ctn">
        <p class="label">
          Phone Number
        </p>
        <input v-model="formThree.phone" class="form_input" type="number">
      </div>
      <div class="input_ctn">
        <p class="label">
          Email Address
        </p>
        <input v-model="formThree.email" class="form_input" type="email">
      </div>

      <div class="input_flex">
        <div class="input_flex_item">
          <p class="label">
            Inspection Date
          </p>
          <input v-model="formThree.inspectionDate" class="form_input" type="date">
        </div>
        <div class="input_flex_item">
          <p class="label">
            Inspection Time
          </p>
          <input v-model="formThree.inspectionTime" class="form_input" type="time">
        </div>
      </div>
      <div class="input_ctn">
        <p class="label">
          Kindly Upload Image(s) of the car
        </p>
        <div class="car_images_ctn">
          <div class="upload_image_placeholder" @click="chooseFile">
            <input
              id="formFileLg"
              ref="fileInput"
              class="select-image"
              type="file"
              name="image"
              accept="image/jpeg, image/png, image/webp"
              @input="selectImgFile"
            >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_356_2395)">
                <path d="M3 22H8V24H3C1.346 24 0 22.654 0 21V16H2V21C2 21.552 2.448 22 3 22ZM22 21C22 21.552 21.552 22 21 22H16V24H21C22.654 24 24 22.654 24 21V16H22V21ZM21 0H16V2H21C21.552 2 22 2.448 22 3V8H24V3C24 1.346 22.654 0 21 0ZM2 3C2 2.448 2.448 2 3 2H8V0H3C1.346 0 0 1.346 0 3V8H2V3ZM8.5 7H8.964L10.294 5H13.706L15.036 7H15.5C16.879 7 18 8.121 18 9.5V17H6V9.5C6 8.121 7.121 7 8.5 7ZM14 12C14 10.895 13.105 10 12 10C10.895 10 10 10.895 10 12C10 13.105 10.895 14 12 14C13.105 14 14 13.105 14 12Z" fill="#053361" />
              </g>
              <defs>
                <clipPath id="clip0_356_2395">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div v-for="(img, index) in displayedImages" :key="index" class="car_images" :style="{ backgroundImage: `url(${img})` }">
            <svg
              class="remove_img"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="removeImg(index)"
            >
              <rect width="40" height="40" rx="20" fill="#DB0000" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3892 10.4069C10.9055 9.89074 11.7426 9.89085 12.2588 10.4072L19.9504 18.1828L27.7428 10.3876C28.2588 9.87112 29.0959 9.87075 29.6124 10.3868C30.1289 10.9028 30.1293 11.7398 29.6132 12.2563L21.8197 20.0525L29.594 27.7444C30.1102 28.2607 30.1101 29.0978 29.5937 29.614C29.0774 30.1302 28.2404 30.1301 27.7242 29.6137L19.951 21.9229L12.2574 29.6129C11.7413 30.1294 10.9043 30.1298 10.3878 29.6137C9.87134 29.0977 9.87096 28.2607 10.387 27.7442L18.0817 20.0532L10.389 12.2765C9.8728 11.7602 9.8729 10.9231 10.3892 10.4069Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    saveForm: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      formThree: {
        name: '',
        email: '',
        phone: '',
        inspectionDate: '',
        inspectionTime: ''
        // images: []
      },
      selectedImages: [],
      displayedImages: []
    }
  },
  watch: {
    saveForm: {
      immediate: true,
      handler (val) {
        // console.log(val)
        if (val) {
          this.$store.dispatch('setSellCarForm', this.formThree)
          this.$emit('next', this.selectedImages)
        }
      }
    }
  },
  created () {
    const formData = this.$store.state.sellCarForm
    console.log(formData)
    this.formThree.name = formData.name
    this.formThree.phone = formData.phone
    this.formThree.email = formData.email
    this.formThree.inspectionDate = formData.inspectionDate
    this.formThree.inspectionTime = formData.inspectionTime
    // this.formThree.images = formData.images
    // this.displayedImages = formData.displayedImages
  },
  methods: {
    chooseFile () {
      this.$refs.fileInput.click()
    },
    selectImgFile (event) {
      const fileId = event.target.files[0]
      // console.log(fileId)
      this.selectedImages.push(fileId)
      const fileInput = this.$refs.fileInput
      const imgFile = fileInput.files
      if (imgFile && imgFile[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.displayedImages.push(e.target.result)
        }
        reader.readAsDataURL(imgFile[0])
      }
    },
    removeImg (val) {
      // console.log(val)
      const index = val
      this.displayedImages.splice(index, 1)
      this.selectedImages.splice(index, 1)
      // console.log(this.displayedImages)
      // console.log(this.selectedImages)
    }
  }
}
</script>

<style scoped>
.car_images_ctn {
  display: flex;
  flex-wrap: wrap;
}
.upload_image_placeholder {
  position: relative;
  background-color: #E8EDFF;
  width: 9rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  margin-right: 15px;
}
.car_images {
  position: relative;
  width: 9rem;
  height: 8rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
  margin-right: 15px;
  margin-bottom: 15px;
}

.select-image {
  display: none;
  position: absolute;
  height: 8rem;
  width: 9rem;
  top: 0;
  /* z-index: 2; */
  cursor: pointer;
  opacity: 0;
}

.remove_img {
  position: absolute;
  top: -7px;
  right: -7px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>

<template>
  <div class="toast-element">
    <div :class="['toast-container', { success: state === 'success', error: state === 'error', info: state === 'info' }]">
      <svg v-if="state === 'success'" class="css-h0rce1 ub-w_16px ub-h_16px ub-box-szg_border-box" data-icon="tick-circle" viewBox="0 0 16 16">
        <path d="M8 16c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4-11c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z" fill-rule="evenodd" />
      </svg>
      <svg v-else-if="state === 'error'" class="css-tn1wco ub-w_16px ub-h_16px ub-box-szg_border-box" data-icon="error" viewBox="0 0 16 16">
        <path d="M7.99-.01c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13h-2v-2h2v2zm0-3h-2v-7h2v7z" fill-rule="evenodd" />
      </svg>
      <svg v-else-if="state === 'info'" class="css-1ffn9ia ub-w_16px ub-h_16px ub-box-szg_border-box" data-icon="info-sign" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM7 3h2v2H7V3zm3 10H6v-1h1V7H6V6h3v6h1v1z" fill-rule="evenodd" />
      </svg>
      <p>
        {{ message }}
      </p>
      <button @click="removeToast">
        <svg class="css-c4d79v ub-w_12px ub-h_12px ub-box-szg_border-box" data-icon="cross" viewBox="0 0 16 16">
          <path d="M9.41 8l3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 00-1.71-.71L8 6.59l-3.29-3.3a1.003 1.003 0 00-1.42 1.42L6.59 8 3.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71L8 9.41l3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71L9.41 8z" fill-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toastIsVisible: false,
      message: '',
      state: ''
    }
  },
  mounted () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'toast/showToast') {
        this.message = state.toast.content
        this.state = state.toast.state
        this.toastIsVisible = true
        document.querySelector('.toast-element').classList.add('enter')

        setTimeout(() => {
          if (this.toastIsVisible) {
            this.removeToast()
          }
        }, 3000)
      }
    })
  },
  methods: {
    removeToast () {
      document.querySelector('.toast-element').classList.replace('enter', 'leave')
      setTimeout(() => {
        this.toastIsVisible = false
      }, 240)
    }
  }
}
</script>

<style scoped>
.toast-element {
  position: fixed;
  top: -90px;
  left: 0;
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  opacity: 0;
  transition: all 240ms cubic-bezier(0, 0.0, 0.2, 1) 0s;
}
.enter {
  top: 8px;
  opacity: 1;
}
.leave {
  top: 8px;
  transform: scale(0.9);
}
.toast-container {
  width: fit-content;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-wrap: nowrap;
  column-gap: 16px;
  align-items: center;
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  box-shadow: rgb(67 90 111 / 30%) 0px 0px 1px, rgb(67 90 111 / 47%) 0px 8px 10px -4px;
}
.success {
  border: 1px solid #52BD95;
  background-color: #F5FBF8;
}
.error {
  border: 1px solid #D14343;
  background-color: #FDF4F4;
}
.info {
  border: 1px solid #3366FF;
  background-color: #F3F6FF;
}
.success svg {
  fill: #52BD95
}
.error svg {
  fill: #D14343;
}
.info svg {
  fill: #3366FF;
}
.toast-container > svg {
  width: 16px;
  height: 16px;
}
p {
  width: max-content;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.05px;
}
.success p {
  color: #32725A
}
.error p {
  color: #A73636;
}
.info p {
  color: #2952CC;
}
button {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
}
button:hover {
  background-color: #F4F5F9;
}
button:focus {
  box-shadow: 0 0 0 2px #d6e0ff;
}
button svg {
  width: 12px;
  height: 12px;
}
</style>

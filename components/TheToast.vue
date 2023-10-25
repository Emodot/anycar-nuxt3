<template>
  <div v-show="toastIsVisible">
    <div class="toast-element reveals come-up">
      <div
        :class="[
          'toast-container',
          { success: state === 'success', error: state === 'error' },
        ]"
      >
        <div class="icon">
          <svg
            v-if="state === 'success'"
            width="8"
            height="7"
            viewBox="0 0 8 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.96304 0.962891L2.88896 5.37647L1.03711 3.3703"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-else-if="state === 'error'"
            width="3"
            height="10"
            viewBox="0 0 3 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.6665V4.99984"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 8.3335H1.00833"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p>
          {{ message }}
        </p>
        <button
          class="material-icons-round close-btn default-input"
          @click="toastIsVisible = false"
        >
          close
        </button>
      </div>
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
        }, 4000)
      }
    })
  },
  methods: {
    removeToast () {
      // document
      //   .querySelector('.toast-element')
      //   .classList.replace('enter', 'leave')
      setTimeout(() => {
        this.toastIsVisible = false
      }, 300)
    }
  }
}
</script>

<style scoped>
.toast-element {
  position: fixed;
  top: -90px;
  right: 0;
  width: fit-content;
  height: max-content;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  transition: all 240ms cubic-bezier(0, 0, 0.2, 1) 0s;
  max-width: 100%;
}

.enter {
  top: 20px;
  opacity: 1;
}
.leave {
  top: 20px;
  transform: scale(0.9);
}
.toast-container {
  width: fit-content;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 1.8rem 2.2rem 1.2rem 1.475rem;
  display: flex;
  gap: 0.5rem;
  margin-right: 50px;
  position: relative;
  max-width: 100%;
}
.success {
  border-color: var(--success);
  background-color: var(--success);
}
.error {
  border-color: var(--failure);
  background-color: var(--failure);
}
.icon {
  border-radius: 50%;
  display: flex;
  border: 2px solid #fff;
}
.success .icon {
  padding: 6px;
  background-color: #037f10;
}
.error .icon {
  padding: 5px 8px 5px 9px;
  background-color: #ff2525;
}
p {
  width: max-content;
  font-size: 1.0625rem;
  font-weight: 400;
}
.success p {
  color: #fff;
  font-weight: 500;
}
.error p {
  color: #fff;
  font-weight: 500;
}

.error p::first-letter,
.success p::first-letter {
  text-transform: capitalize;
}

.close-btn {
  position: absolute;
  right: 3px;
  top: 3px;
  color: #fff;
  transition: 0.3s;
}

.close-btn:hover {
  transform: scale(1.2);
  font-weight: 500;
}

@media screen and (max-width: 500px) {
  .toast-element {
    top: 0;
    width: 100%;
  }
  .toast-container {
    margin-right: 0px;
    width: 100%;
    border-radius: 0;
  }
}
</style>

import Vue from 'vue'

import Toasted from 'vue-toasted'

// Toasted = require("vue-toasted").default;

// Vue.use(Toasted)

const Options = {
  type: 'error',
  duration: 3000,
  keepOnHover: true,
  action: {
    text: 'Cancel',
    onClick: (e, toastObject) => {
      toastObject.goAway(0)
    }
  }
}

Vue.use(Toasted, Options)
// if (process.browser) {
//   Vue.use(Toasted, options)
// }

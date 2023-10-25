export const state = () => ({
  sellCarForm: {
    makeId: 0,
    make: '',
    model: '',
    year_manufacture: 0,
    formattedYear: 0,
    condition: '',
    transmission_type: '',
    interior_color: '',
    exterior_color: '',
    vin: '',
    engine_type: '',
    asking_price: '',
    name: '',
    email: '',
    phone: '',
    inspectionDate: '',
    inspectionTime: ''
  },
  formProgress: {},
  carOneDetails: {},
  carTwoDetails: {}
})

export const mutations = {
  setSellCarForm (state, val) {
    state.sellCarForm = {
      ...state.sellCarForm, // Keep the existing data
      ...val // Update only the specified properties
    }
  },
  addCarImages (state, val) {
    state.sellCarForm = {
      ...state.sellCarForm, // Keep the existing data
      ...state.sellCarForm.images.push(val) // Update only the specified properties
    }
  },
  addDisplayImages (state, val) {
    state.sellCarForm = {
      ...state.sellCarForm, // Keep the existing data
      ...state.sellCarForm.displayedImages.push(val) // Update only the specified properties
    }
  },
  removeImage (state, val) {
    state.sellCarForm = {
      ...state.sellCarForm, // Keep the existing data
      ...state.sellCarForm.images.splice(val, 1), // Update only the specified properties
      ...state.sellCarForm.displayedImages.splice(val, 1) // Update only the specified properties
    }
  },
  setFormProgress (state, val) {
    state.formProgress = val
  },
  setCarOneDetails (state, val) {
    state.carOneDetails = val
  },
  setCarTwoDetails (state, val) {
    state.carTwoDetails = val
  }
}

export const actions = {
  setSellCarForm ({ commit }, newData) {
    commit('setSellCarForm', newData)
  },
  addImages ({ commit }, newData) {
    commit('addCarImages', newData)
  },
  addDisplayImages ({ commit }, newData) {
    commit('addDisplayImages', newData)
  },
  removeImage ({ commit }, newData) {
    commit('removeImage', newData)
  }
}

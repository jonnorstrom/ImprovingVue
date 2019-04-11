import Vuex from 'vuex'
import Vue from 'vue';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: "Hello World"
  },

  mutations: {
    updateMessage(state, message) {
      state.message = message
    }
  }
})
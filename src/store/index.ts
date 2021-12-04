import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showDrawer: false
  },
  mutations: {
    handleDrawer(state) {
      state.showDrawer = !state.showDrawer
    }
  },
  actions: {
  },
  modules: {
  }
})

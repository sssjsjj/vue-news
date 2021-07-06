import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'


Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {},
    item: {},
    list: [],
  },
  getters: {    
    fetchedList(state) {
      return state.list
    },
    fetchedUser(state) {
      return state.user
    },
    fetchedItem(state) {
      return state.item
    },
  },
  mutations,
  actions,
})
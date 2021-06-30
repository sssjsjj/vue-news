import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'


Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    newsList: [],
    jobs: [],
    askList: [],
    user: {},
  },
  getters: {
    fetchedJobs(state) {
      return state.jobs
    },
    fetchedNews(state) {
      return state.newsList
    },
    fetchedAsk(state) {
      return state.askList
    },
    fetchedUser(state) {
      return state.user
    }
  },
  mutations,
  actions,
})
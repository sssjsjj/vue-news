import Vue from 'vue'
import Vuex from 'vuex'
import { fetchList } from '../api/index.js'


Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    askList: []
  },
  getters: {
    fetchedJobs(state) {
      return state.jobs
    }
  },
  mutations: {
    SET_LIST(state, payload) {
      state[payload.type] = payload.data
    }
  },
  actions: {
    FETCH_LIST({ commit }, type) {
      fetchList(type)
        .then(response => commit(`SET_LIST`, {data: response.data, type}))
        .catch(error => console.log(error))
    },
  }
  // getters: {

  // },
  // mutations: {

  // },
  // actions: {

  // },
})
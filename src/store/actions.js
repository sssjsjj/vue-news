import { fetchList, fetchUser } from '../api/index.js'

export default {
  FETCH_LIST({ commit }, type) {
    fetchList(type)
      .then(response => commit(`SET_LIST`, {data: response.data, type}))
      .catch(error => console.log(error))
  },
  FETCH_USER({ commit }, userName) {
    fetchUser(userName)
      .then(response => commit(`SET_LIST`, {data: response.data, type: 'user'}))
      .catch(error => console.log(error))
  }
}
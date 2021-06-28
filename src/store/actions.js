import { fetchList } from '../api/index.js'

export default {
  FETCH_LIST({ commit }, type) {
    fetchList(type)
      .then(response => commit(`SET_LIST`, {data: response.data, type}))
      .catch(error => console.log(error))
  },
}
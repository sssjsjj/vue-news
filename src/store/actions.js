import { fetchList, fetchUser, fetchItem } from '../api/index.js'

export default {
  FETCH_LIST({ commit }, pageName) {
    // return 해야 의도한대로 비동기 처리가 됨.
    return fetchList(pageName)
      .then(({ data }) => {
        commit(`SET_DATA`, {data, type: 'list'})
        return data
      })
      .catch(error => console.log('FETCH_LIST', error))
  },
  FETCH_USER({ commit }, userName) {
    fetchUser(userName)
      .then(({ data }) => commit(`SET_DATA`, {data, type: 'user'}))
      .catch(error => console.log('FETCH_USER', error))
  },
  FETCH_ITEM({ commit }, id) {
    fetchItem(id)
      .then(({ data }) => commit(`SET_DATA`, {data, type: 'item'}))
      .catch(error => console.log(error))
  }
}
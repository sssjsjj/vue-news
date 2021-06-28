export default {
  SET_LIST(state, payload) {
    state[payload.type] = payload.data
  }
}
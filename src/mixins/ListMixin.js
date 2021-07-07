import bus from '../utils/bus.js'

export default {
  // 재사용할 컴포넌트 옵션 & 로직
  created() {
    bus.$emit('start:spinner')
    this.$store.dispatch('FETCH_LIST', this.$route.name)
      .then(() => {
        setTimeout(() => {
          bus.$emit('end:spinner')
        }, 500);
      })
      .catch(error => console.log(error))
  }
}
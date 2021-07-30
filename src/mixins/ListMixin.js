import bus from '../utils/bus.js'

export default {
  // 재사용할 컴포넌트 옵션 & 로직
  mounted() {
    // 데이터를 호출하고 나서(.then()) 스피너를 종료하면 미세하게 딜레이됨.
    //mount에 하면 데이터 호출이 끝나자마자 스피너가 종료됨.
    bus.$emit('end:spinner')
  }
}
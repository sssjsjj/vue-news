import ListView from './ListView.vue';
import bus from '../utils/bus.js'

export default function CreateListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name, //하위 적용할 컴포넌트 명
    created() {
      bus.$emit('start:spinner')
      this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          setTimeout(() => {
            bus.$emit('end:spinner')
          }, 500);
        })
        .catch(error => console.log(error))
    },  
    render(createElement) {
      return createElement(ListView)
    }
  }
}
import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
// import CreateListView from '../views/CreateListView.js'
import bus from '../utils/bus.js'
import { store } from '../store/index.js'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      // component: CreateListView('NewsView'), //HOC 예제
      beforeEnter: (to, from, next) => { //라우터 네비게이션 가드
        /* 
          데이터 호출 시점 (데이터 모두 호출하고 화면 뿌릴건지, 우선 먼저 뿌릴애들 뿌리고 데이터 호출해서 나머지 뿌릴건지)
          1.라우터 네비게이션 가드
          2.created
        */
        bus.$emit('start:spinner')
        // this.$store, this.$route는 인스턴스(컴포넌트) 내에서 사용할 수 있기 때문에, store를 따로 불러와서 사용
        store.dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch(error => console.log(error))
      } ,
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: CreateListView('AskView'), 
      beforeEnter: (to, from, next) => { 
        bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch(error => console.log(error))
      } ,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: CreateListView('JobsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner')
        store.dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch(error => console.log(error))
      } ,
    },
    {
      path: '/user/:user',
      component: UserView,
    },
    {
      path: '/ask/:item',
      component: ItemView,
    },
  ]
})

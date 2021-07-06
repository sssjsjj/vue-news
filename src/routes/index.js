import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import CreateListView from '../views/CreateListView.js'

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
      component: CreateListView('newsView'),
      name: 'news'
    },
    {
      path: '/ask',
      component: CreateListView('askView'),
      name: 'ask'
    },
    {
      path: '/jobs',
      component: CreateListView('jobsView'),
      name: 'jobs'
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

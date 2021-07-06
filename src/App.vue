<template>
  <div id="app">
    <app-header />
    <!-- router에 해당하는 컴포넌트가 노출. -->
    <transition name="page">
      <router-view></router-view>
    </transition>
  <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import Spinner from './components/Spinner.vue'
import bus from './utils/bus.js'

export default {
  components: {
    AppHeader,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true
    },
    endSpinner() {
      this.loadingStatus = false
    },
  }
}
</script>

<style>
:root {
  --main-color: tomato
}
body, div, section, article, header, footer, ul, ol, dl, li, dt, dd, p, table, tr, td, button, a, h1, h2, h3, h4, h5, h6 {
  vertical-align: top;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #333;    
  font-size: 14px;
}
li, dt, dd {
  list-style: none;
}
button {
  border: none;
  background-color: transparent;
  appearance: none;
  cursor: pointer;
  transition: 0.2s;
}
a {
  text-decoration: none;
}
a:hover, button:hover {
  color: var(--main-color);
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: .5s;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  transform: translateY(5%);
  opacity: 0;
}
</style>

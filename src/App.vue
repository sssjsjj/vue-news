<template>
  <div id="app">
    <app-header />
    <!-- router에 해당하는 컴포넌트가 노출. -->
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'

export default {
  components: {
    AppHeader
  },
}
</script>

<style>
:root {
  --main-color: tomato
}
body, div, section, article, header, footer, ul, ol, dl, li, dt, dd, p, table, tr, td, button, a {
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
</style>

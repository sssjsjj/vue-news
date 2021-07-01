<template>
  <header>
    <router-link to="/" class="logo">logo</router-link>
    <div class="wrap-menu">
      <div class="gnb">
        <router-link to="/news">news</router-link>
        <router-link to="/ask">ask</router-link>
        <router-link to="/jobs">jobs</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
  display: flex;
  padding: 0 20px;
  background-color: #fff;
  line-height: 50px;
}
.logo {
  margin-right: 50px;
}
.wrap-menu {

}
.gnb {

}
.gnb a {
  padding: 0 20px;
}
.gnb a.router-link-active {
  color: var(--main-color);
}
</style>
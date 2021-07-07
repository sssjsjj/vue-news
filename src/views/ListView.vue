<template>
<!-- High Order Componenet -->
<!-- 컴포넌트 깊이가 깊어지면서 컴포넌트 통신이 불편해질 수 있다는 단점이 있음. -->
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
  components: {
    ListItem,
  }
}
</script>

<style>

</style>
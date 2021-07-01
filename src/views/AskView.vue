<template>
  <board-list 
    :data="$store.state.askList"
    :sub-link="true"
    :linkKey="'id'"
  />
</template>

<script>
import BoardList from '../components/BoardList.vue'

export default {
  components: {
    BoardList
  },
  created() {
    this.$store.dispatch('FETCH_LIST', 'askList')
  }
}
</script>

<style>

</style>
<template>
  <list-item 
    :list-name="'askList'"
    :sub-link="true"
    :linkKey="'id'"
  />
</template>

<script>
import ListItem from '../components/ListItem.vue'
import ListMixin from '../mixins/ListMixin.js'// mixin예제

export default {
  components: {
    ListItem
  },
  // mixin예제
  mixins: [ListMixin] 
}
</script>

<style>
</style>
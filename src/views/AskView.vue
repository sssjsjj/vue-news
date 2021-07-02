<template>
  <list-item 
    :list-name="'askList'"
    :sub-link="true"
    :linkKey="'id'"
  />
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
  components: {
    ListItem
  },
}
</script>

<style>
</style>
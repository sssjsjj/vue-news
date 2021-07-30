<template>
  <list-item 
    :list-name="'jobs'"
    :link-key="'url'"
    :link-target="'_blank'"
  />
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js'// mixin예제

export default {
  components: {
    ListItem
  },
  // mixin예제
  mixins: [ListMixin] 
}
</script>

<style scoped>

</style>
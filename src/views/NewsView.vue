<template>
  <list-item
    :list-name="'newsList'"
    :link-key="'url'"
    :link-target="'_blank'"
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

<style lang="scss" scoped>
</style>
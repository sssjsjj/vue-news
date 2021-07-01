<template>
  <board-list
    :data="fetchedNews"
    :link-key="'url'"
    :link-target="'_blank'"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import BoardList from '../components/BoardList.vue'

export default {
  components: {
    BoardList
  },
  props: {

  },
  computed: {
    ...mapGetters(['fetchedNews'])
  },
  created() {
    this.$store.dispatch('FETCH_LIST', 'newsList')
  },
}
</script>

<style lang="scss" scoped>
</style>
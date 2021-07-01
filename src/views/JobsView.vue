<template>
  <board-list 
    :data="fetchedJobs"
    :link-key="'url'"
    :link-target="'_blank'"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import BoardList from '../components/BoardList.vue';

export default {
  components: {
    BoardList
  },
  computed: {
    ...mapGetters(['fetchedJobs'])
  },
  created() {
    this.$store.dispatch('FETCH_LIST', 'jobs')
  },
}
</script>

<style scoped>

</style>
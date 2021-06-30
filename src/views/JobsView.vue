<template>
  <div>
    <ul>
      <li
        v-for="job in fetchedJobs"
        :key="`news${job.id}`"
      >
        {{ job.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
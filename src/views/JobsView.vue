<template>
  <div>
    <ul>
      <li
        v-for="job in jobs"
        :key="`news${job.id}`"
      >
        {{ job.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchList } from "../api/index.js"
export default {
  data() {
    return {
      jobs: [],
    }
  },
  created() {
    fetchList('jobs')
      .then(response => this.jobs = response.data)
      .catch(error => console.log(error))
  },
}
</script>

<style>

</style>
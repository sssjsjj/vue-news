<template>
  <div>
    <ul>
      <li
        v-for="news in newsList"
        :key="`news${news.id}`"
      >
        {{ news.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchList } from "../api/index.js";

export default {
  data() {
    return {
      newsList: []
    }
  },
  created() {
    fetchList('news')
    .then(response => this.newsList = response.data)
    .catch(error => console.log(error))
  },
  mounted() {
    console.log(this.newsList)
  }
}
</script>

<style>

</style>
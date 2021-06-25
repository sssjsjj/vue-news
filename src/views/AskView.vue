<template>
  <div>
    <ul>
      <li
        v-for="ask in askList"
        :key="`ask${ask.id}`"
      >
        {{ ask.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchList } from "../api/index.js";
export default {
  data() {
    return {
      askList: [],
    }
  },
  created() {
    fetchList('ask')
      .then(response => this.askList = response.data)
      .catch(error => console.log(error))
  }
}
</script>

<style>

</style>
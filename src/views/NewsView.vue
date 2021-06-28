<template>
  <div>
    <ul>
      <li
        v-for="news in $store.state.news"
        :key="`news${news.id}`"
      >
        {{ news.title }}
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  created() {
    this.$store.dispatch('FETCH_LIST', 'news')
  },
  mounted() {
    // console.log(this.newsList)
  }
}
</script>

<style>

</style>
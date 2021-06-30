<template>
  <div>
    <ul>
      <li
        v-for="ask in $store.state.askList"
        :key="`ask${ask.id}`"
      >
        <router-link :to="`/ask/${ask.id}`">
          {{ ask.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_LIST', 'askList')
  }
}
</script>

<style>

</style>
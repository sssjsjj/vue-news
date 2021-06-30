<template>
  <div>
    <p>id : {{ user.id }}</p>
    <p>karma : {{ user.karma }}</p>
    <p>created : {{ user.created }}</p>
    <p></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      user: 'fetchedUser'
    })
  },
  created() {
    this.$store.dispatch('FETCH_USER', this.$route.params.user)
  },
}
</script>

<style>

</style>
<template>
  <div class="profile-user">
    <p>
      <i class="far fa-user"></i>
      {{ user.id }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    userId: Object
  },
  computed: {
    ...mapGetters({
      user: 'fetchedUser'
    })
  },
  async created() {
    const userId = await this.userId
    this.$store.dispatch('FETCH_USER', userId)
  },
}
</script>

<style>

</style>
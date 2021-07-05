<template>
  <user-profile>
    <span slot="userName">{{ user.id }}</span>
    <p slot="created">Joined {{ user.created }}</p>
    <p slot="karma">{{ user.karma }} karma</p>
  </user-profile>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters({
      user: 'fetchedUser'
    })
  },
  created() {
    const userId = this.$route.params.user
    this.$store.dispatch('FETCH_USER', userId)
  },
}
</script>

<style>

</style>
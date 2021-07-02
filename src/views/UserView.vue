<template>
  <user-profile :user-id="$route.params.user" />
  <!-- <div>
    <p>id : {{ user.id }}</p>
    <p>karma : {{ user.karma }}</p>
    <p>created : {{ user.created }}</p>
  </div> -->
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
}
</script>

<style>

</style>
<template>
  <div class="profile-user">
    <p class="name-user">
      <i class="far fa-user"></i>
      <slot name="userName">
      </slot>
    </p>
    <slot name="karma"></slot>
    <slot name="created"></slot>
  </div>
</template>

<script>
 /* 
 user name을 props로 받아서 api fetch 해보려고 했으나, itemView에서 받는 props가 undefined로 떠서 강의 내용대로 소스 수정.
 itemView 데이터 호출 완료 전에 props가 전달되는 것이 원인으로 추측됨.
 이후 해결방법 찾으면 소스 수정해보기!
 */


// import { mapGetters } from 'vuex';
export default {
  // props: {
  //   userId: String
  // },
  // computed: {
  //   ...mapGetters({
  //     user: 'fetchedUser'
  //   })
  // },
  // async created() {
  //   const userId = await this.userId
  //   this.$store.dispatch('FETCH_USER', userId)
  // },
}
</script>

<style>

</style>
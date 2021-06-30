<template>
  <div>
    <h2>{{ item.title }}</h2>
    <p>{{ item.time_ago }}</p>
    <p>{{ item.user }}</p>
    <p>{{ item.points }}</p>
    <p>{{ item.content }}</p>
    <p>{{ item.comments_count }}</p>
    <ul>
      <li
        v-for="comment in item.comments"
        :key="`comment${comment.id}`"
      >
        {{ comment.comments_count }}
        {{ comment.content }}
        {{ comment.level }}
        {{ comment.time_ago }}
        {{ comment.user }}
        <ul v-if="comment.comments">
          <li
            v-for="subComment in comment.comments"
            :key="`subComment${subComment.id}`"
          >
            {{ subComment.comments_count }}
            {{ subComment.content }}
            {{ subComment.level }}
            {{ subComment.time_ago }}
            {{ subComment.user }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      item: 'fetchedItem'
    }),
  },
  created() {
    this.$store.dispatch('FETCH_ITEM', this.$route.params.item)
  }
}
</script>

<style>

</style>
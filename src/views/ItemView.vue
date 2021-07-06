<template>
  <div class="contents">
    <article>
      <div class="article-top">
        <h2>{{ item.title }}</h2>
        <p>({{ item.comments_count }})</p>
      </div>
      <div class="article-contents" v-html="item.content"></div>
      <div class="article-bottom">
        <user-profile>
          <a slot="userName" :href="`/user/${item.user}`">{{ item.user }}</a>
          <p slot="created">Posted {{ item.time_ago }}</p>
        </user-profile>
      </div>
    </article>
    <section>
      <p>{{ item.comments_count }}</p>
      <div
        v-for="comment in item.comments"
        :key="`comment${comment.id}`"
         class="comment"
      >
        <p>{{ comment.comments_count }}</p>
        <user-profile>
          <a slot="userName" :href="`/user/${comment.user}`">{{ comment.user }}</a>
          <p slot="created">Posted {{ comment.time_ago }}</p>
        </user-profile>
        <div class="comment" v-html="comment.content"></div>
        <!-- {{ comment.level }} -->
        
        <div v-if="comment.comments" class="comment sub">
          <div
            v-for="subComment in comment.comments"
            :key="`subComment${subComment.id}`"
          >
            <p>{{ subComment.comments_count }}</p>
            <user-profile>
              <a slot="userName" :href="`/user/${subComment.user}`">{{ subComment.user }}</a>
              <p slot="created">Posted {{ subComment.time_ago }}</p>
            </user-profile>
            <div v-html="subComment.content"></div>
            <!-- {{ subComment.level }} -->
          </div>
        </div>
      </div>
      
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters({
      item: 'fetchedItem'
    }),
  },
  created() {
    this.$store.dispatch('FETCH_ITEM', this.$route.params.item)
  },
}
</script>

<style scoped>
.contents {
  padding: 40px 40px 100px
}
article h2 {
  font-size: 20px;
}
.article-top {
  margin-bottom: 30px;
}
.article-bottom {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}

.article-bottom .article-info {
  text-align: right;
}
</style>
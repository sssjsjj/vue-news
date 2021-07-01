<template>
  <div class="contents">
    <article>
      <div class="article-top">
        <h2>{{ item.title }}</h2>
        <p>({{ item.comments_count }})</p>
      </div>
      <div class="article-contents" v-html="item.content"></div>
      <div class="article-bottom">
        <div class="article-info">
          <p>
            <router-link :to="`/user/${item.user}`">
              <i class="far fa-user"></i>
              {{ item.user }}
            </router-link>
          </p>
          <p>{{ item.time_ago }}</p>
          <!-- <p>{{ item.points }}</p> -->
        </div>
      </div>
    </article>
    <section>
      <p>{{ item.comments_count }}</p>
      <div
        v-for="comment in item.comments"
        :key="`comment${comment.id}`"
         class="comment"
      >
        {{ comment.comments_count }}
        <p>
          <span><i class="far fa-user"></i>{{ comment.user }}</span>
          {{ comment.time_ago }}
        </p>
        <div class="comment" v-html="comment.content"></div>
        <!-- {{ comment.level }} -->
        
        <div v-if="comment.comments" class="comment sub">
          <div
            v-for="subComment in comment.comments"
            :key="`subComment${subComment.id}`"
          >
            {{ subComment.comments_count }}
            
            <p>
              <span><i class="far fa-user"></i>{{ subComment.user }}</span>
              {{ subComment.time_ago }}
            </p>
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
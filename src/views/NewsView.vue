<template>
  <div>
    <ul class="list-article">
      <li
        v-for="news in fetchedNews"
        :key="`news${news.id}`"
      >
        <span class="wrap-title">
          <a
            :href="news.url"
            class="link-article"
            target="_blank"
            title="New Window"
          >
            {{ news.title }}
            <span class="text-sub comments-count">({{ news['comments_count'] }})</span>
          </a>
        </span>
        <span class="wrap-info">
          <router-link :to="`/user/${news.user}`" class="user">
            <i class="far fa-user"></i> {{ news.user }}
          </router-link>
          <span class="text-sub time-ago">{{ news['time_ago'] }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['fetchedNews'])
  },
  created() {
    this.$store.dispatch('FETCH_LIST', 'newsList')
  },
}
</script>

<style lang="scss" scoped>
.list-article {
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 40px;
    border-bottom: 1px solid #eeeaea;
    .link-article {
      vertical-align: bottom;
      font-size: 1.2em;
    }    
    .wrap-info {
      display: flex;
      flex-direction: column;
      text-align: right;
    }
    .comments-count {
      font-size: 0.8em;
      color: var(--main-color);
    }
    .time-ago {
      margin-top: 5px;
      font-size: 0.85em;
      color: #999;
      word-spacing: -0.1em;
    }
    .user {
      color: #666;
      &:hover {
        text-decoration: underline;
      }
      i {
        font-size: 0.8em;
      }
    }
  }
}
</style>
<template>
  <div class="list-item">
    <div
      v-for="item in listItems"
      :key="`${item.id}`"
      class="item-board"
    >
      <p v-if="item.points" class="points">
        {{ item.points }}
      </p>
      <p class="wrap-title">
        <a
          :href="isOutLink ? item.url : $route.name+'/'+item.id"
          class="link-board"
          :target="linkTarget"
          :title="isNewWindow && 'New Window'"
        >
          {{ item.title }}
          <span class="text-sub comments-count">({{ item.comments_count }})</span>
        </a>
      </p>
      <div class="wrap-info">
        <router-link
          v-if="item.user"
          :to="`/user/${item.user}`"
          class="name-tag"
        >
          <i class="far fa-user"></i>
          {{ item.user }}
        </router-link>
        <a
          v-else-if="item.domain"
          :href="`https://${item.domain}`"
          target="_blank"
          title="New Window"
          class="name-tag"
        >
          <i class="far fa-window-maximize"></i>
          {{ item.domain }}
        </a>
        <p class="text-sub time-ago">{{ item.time_ago }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  computed: {
    listItems() {
      return this.$store.state.list
    },
    isNewWindow() {
      return this.linkTarget === '_blank'
    },
    isOutLink() {
      const outLinkPages = ['news', 'jobs']
      return outLinkPages.includes(this.$route.name) ? true : false
    },
    linkTarget() {
      return this.isOutLink ? '_blank' : '_self'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  .item-board {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 40px;
    border-bottom: 1px solid #eeeaea;
    .link-board {
      vertical-align: bottom;
      font-size: 1.2em;
    }    
    .points {
      min-width: 40px;
      margin-right: 20px;
      font-size: 1.2em;
      font-weight: bold;
      color: var(--main-color);
      text-align: center;
    }
    .wrap-title {
      flex: 1;
    }
    .wrap-info {
      margin-left: 20px;
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
    .name-tag {
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
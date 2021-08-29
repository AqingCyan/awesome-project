<template>
  <div :class="postListClasses">
    <PostListItem v-for="post in posts" :item="post" :key="post.id" />
    <template v-if="loading">
      <PostListItemSkeleton v-for="number in 20" :key="number" />
    </template>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { getStorage } from '@/app/app.service';
import PostListItem from './post-list-item';
import PostListItemSkeleton from './post-list-item-skeleton';

export default defineComponent({
  data() {
    return {
      prevScrollTop: 0,
      sort: '',
    };
  },

  async created() {
    this.sort =
      this.$route.name === 'postIndexPopular' ? 'most_comments' : 'latest';

    await this.getPosts({ sort: this.sort });

    // 内容列表布局
    const layout = getStorage('post-list-layout');

    if (layout) {
      this.setLayout(layout);
    } else {
      this.setLayout('flow');
    }

    if (window) {
      window.addEventListener('scroll', this.onScrollWindow);
      window.scrollTo({ top: 0 });
    }
  },

  unmounted() {
    if (window) {
      window.removeEventListener('scroll', this.onScrollWindow);
    }
  },

  computed: {
    ...mapGetters({
      loading: 'post/index/loading',
      posts: 'post/index/posts',
      layout: 'post/index/layout',
      hasMore: 'post/index/hasMore',
    }),

    postListClasses() {
      return ['post-list', this.layout];
    },
  },

  methods: {
    ...mapMutations({
      setLayout: 'post/index/setLayout',
    }),

    ...mapActions({
      getPosts: 'post/index/getPosts',
    }),

    onScrollWindow() {
      if (document) {
        const {
          scrollTop,
          scrollHeight,
          clientHeight,
        } = document.documentElement;

        const height = clientHeight + scrollTop + 200; // 加200是为了到底前提前加载
        const touchDown = scrollHeight - height < 0; // 认为滚动到底部了
        const scrollDown = scrollTop > this.prevScrollTop; // 判断是否是垂直向下滚动的，而不是向上

        if (touchDown && scrollDown && !this.loading && this.hasMore) {
          this.getPosts({ sort: this.sort });
        }

        this.prevScrollTop = scrollTop;
      }
    },
  },

  components: {
    PostListItem,
    PostListItemSkeleton,
  },
});
</script>

<style scoped>
@import 'styles/post-list.css';
</style>

<template>
  <PostShowSkeleton :class="postShowClasses" v-if="!showPost" />
  <div :class="postShowClasses" v-if="showPost">
    <PostShowMedia :post="post" @click="onClickPostShowMedia" />
    <div class="section meta actions">
      <PostShowFileMeta :post="post" />
      <PostShowActions :post="post" />
    </div>
    <PostShowHeader :post="post" />
    <PostShowContent :post="post" />
    <PostShowTags v-if="post.tags" :tags="post.tags" />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { defineComponent } from 'vue';
import { getStorage } from '@/app/app.service';
import PostShowMedia from '@/post/show/components/post-show-media';
import PostShowHeader from '@/post/show/components/post-show-header';
import PostShowContent from '@/post/show/components/post-show-content';
import PostShowActions from '@/post/show/components/post-show-actions';
import PostShowFileMeta from '@/post/show/components/post-show-file-meta';
import PostShowTags from '@/post/show/components/post-show-tags';
import PostShowSkeleton from '@/post/show/components/post-show-skeleton';

export default defineComponent({
  title() {
    if (this.showPost) {
      return this.post.title;
    }
  },

  props: {
    postId: String,
  },

  created() {
    this.getPostById(this.postId);

    // 布局
    const layout = getStorage('post-show-layout');

    if (layout) {
      this.setLayout(layout);
    }

    if (window) {
      window.addEventListener('keyup', this.onKeyUpWindow);
    }
  },

  unmounted() {
    if (window) {
      window.removeEventListener('keyup', this.onKeyUpWindow);
    }
  },

  computed: {
    ...mapGetters({
      loading: 'post/show/loading',
      post: 'post/show/post',
      layout: 'post/show/layout',
      sideSheetComponent: 'layout/sideSheetComponent',
      posts: 'post/index/posts',
    }),

    showPost() {
      return !this.loading && this.post;
    },

    postShowClasses() {
      return ['post-show', this.layout, { aside: this.sideSheetComponent }];
    },
  },

  methods: {
    ...mapMutations({
      setLayout: 'post/show/setLayout',
    }),

    ...mapActions({
      getPostById: 'post/show/getPostById',
    }),

    onClickPostShowMedia() {
      this.setLayout(`${this.layout ? '' : 'flow'}`);
    },

    onKeyUpWindow(event) {
      switch (event.key) {
        case 'b':
          if (this.posts.length) {
            this.$router.back();
          }
          break;
        default:
          break;
      }
    },
  },

  components: {
    PostShowSkeleton,
    PostShowTags,
    PostShowActions,
    PostShowContent,
    PostShowMedia,
    PostShowHeader,
    PostShowFileMeta,
  },
});
</script>

<style scoped>
@import 'styles/post-show.css';
</style>

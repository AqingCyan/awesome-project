<template>
  <div :class="postListClasses">
    <PostListItem v-for="post in posts" :item="post" :key="post.id" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { getStorage } from '@/app/app.service';
import PostListItem from './post-list-item';

export default defineComponent({
  async created() {
    await this.getPosts();

    // 内容列表布局
    const layout = getStorage('post-list-layout');

    if (layout) {
      this.setLayout(layout);
    } else {
      this.setLayout('flow');
    }
  },

  computed: {
    ...mapGetters({
      loading: 'post/index/loading',
      posts: 'post/index/posts',
      layout: 'post/index/layout',
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
  },

  components: {
    PostListItem,
  },
});
</script>

<style scoped>
@import 'styles/post-list.css';
</style>

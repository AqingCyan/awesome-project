<template>
  <div :class="postShowClasses" v-if="showPost">
    <PostShowMedia :post="post" @click="onClickPostShowMedia" />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { defineComponent } from 'vue';
import { getStorage } from '@/app/app.service';
import PostShowMedia from './components/post-show-media';

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
  },

  computed: {
    ...mapGetters({
      loading: 'post/show/loading',
      post: 'post/show/post',
      layout: 'post/show/layout',
    }),

    showPost() {
      return !this.loading && this.post;
    },

    postShowClasses() {
      console.log(this.layout);
      return ['post-show', this.layout];
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
  },

  components: {
    PostShowMedia,
  },
});
</script>

<style scoped>
@import 'styles/post-show.css';
</style>

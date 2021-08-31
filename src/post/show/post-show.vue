<template>
  <div :class="postShowClasses" v-if="showPost">
    <PostShowMedia :post="post" @click="onClickPostShowMedia" />
    <div class="section meta actions">
      <div>File Meta</div>
      <PostShowActions :post="post" />
    </div>
    <PostShowHeader :post="post" />
    <PostShowContent :post="post" />
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
    PostShowActions,
    PostShowContent,
    PostShowMedia,
    PostShowHeader,
  },
});
</script>

<style scoped>
@import 'styles/post-show.css';
</style>

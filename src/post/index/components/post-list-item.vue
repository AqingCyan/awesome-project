<template>
  <div :class="postListItemClasses">
    <PostListItemMedia :item="item" />
    <PostListItemContent :item="item" v-if="showPostListItemContent" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import PostListItemMedia from './post-list-item-media';
import PostListItemContent from './post-list-item-content';

export default defineComponent({
  props: {
    item: {
      type: Object,
    },
  },

  computed: {
    ...mapGetters({
      layout: 'post/index/layout',
    }),

    postListItemClasses() {
      return ['post-list-item', this.item.file.orientation, this.layout];
    },

    showPostListItemContent() {
      return !this.layout.includes('-minimal');
    },
  },

  components: { PostListItemMedia, PostListItemContent },
});
</script>

<style scoped>
@import 'styles/post-list-item.css';
</style>

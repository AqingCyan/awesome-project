<template>
  <div class="post-show-tags">
    <PostTag v-for="tag in tags" :key="tag.id" :tag="tag" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import PostTag from '@/post/components/post-tag';

export default defineComponent({
  name: 'PostShowTags',

  /**
   * 属性
   */
  props: {
    tags: {
      type: Array,
    },
  },

  /**
   * 数据
   */
  data() {
    return {};
  },

  /**
   * 计算属性
   */
  computed: {},

  /**
   * 组件
   */
  components: { PostTag },
});
</script>

<style scoped>
@import 'styles/post-show-tags.css';
</style>

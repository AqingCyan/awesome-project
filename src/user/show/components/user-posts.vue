<template>
  <div class="user-posts">
    <PostList :sort="sort" :filter="filter" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import PostList from '@/post/index/components/post-list';

export default defineComponent({
  name: 'UserPosts',

  /**
   * 属性
   */
  props: {
    sort: {
      type: String,
    },

    filter: {
      type: Object,
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
  components: { PostList },
});
</script>

<style scoped></style>

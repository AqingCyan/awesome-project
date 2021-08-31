<template>
  <div class="post-show-actions">
    <div class="action">
      <div class="icon">
        <AppIcon name="favorite" />
      </div>
      <div class="text">
        {{ post.totalLikes }}
      </div>
    </div>
    <div class="action">
      <div class="icon">
        <AppIcon name="comment" />
      </div>
      <div class="text">
        {{ post.totalComments }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppIcon from '@/app/components/app-icon';

export default defineComponent({
  name: 'PostShowActions',

  /**
   * 属性
   */
  props: {
    post: {
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
  components: { AppIcon },
});
</script>

<style scoped>
@import 'styles/post-show-actions.css';
</style>

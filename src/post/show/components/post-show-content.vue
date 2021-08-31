<template>
  <div class="post-show-content">
    {{ post.content }}
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostShowContent',

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
  components: {},
});
</script>

<style scoped>
@import 'styles/post-show.content.css';
</style>

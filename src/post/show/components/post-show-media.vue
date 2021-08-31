<template>
  <div class="post-show-media">
    <img class="image" :src="post.file.size.large" alt="内容图片" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostShowMedia',

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
@import 'styles/post-show-media.css';
</style>

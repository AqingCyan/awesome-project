<template>
  <div class="post-list-item-media">
    <router-link class="link" :to="itemLinkTo">
      <img :src="item.file.size.medium" alt="内容图片" class="image" />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostListItemMedia',

  /**
   * 属性
   */
  props: {
    item: {
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
  computed: {
    itemLinkTo() {
      return { name: 'postShow', params: { postId: this.item.id } };
    },
  },

  /**
   * 组件
   */
  components: {},
});
</script>

<style scoped>
@import 'styles/post-list-item-media.css';
</style>

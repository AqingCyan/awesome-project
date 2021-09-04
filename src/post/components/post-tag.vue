<template>
  <div class="post-tag">
    <div class="text">
      <router-link class="link" :to="tagNameLinkTo">
        {{ tag.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostTag',

  /**
   * 属性
   */
  props: {
    tag: {
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
    tagNameLinkTo() {
      return { name: 'postIndexPopular', query: { tag: this.tag.name } };
    },
  },

  /**
   * 组件
   */
  components: {},
});
</script>

<style scoped>
@import 'styles/post-tag.css';
</style>

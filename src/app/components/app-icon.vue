<template>
  <i :class="appIconClasses" :style="appIconStyles">{{ name }}</i>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'appIcon',

  /**
   * 属性
   */
  props: {
    name: {
      type: String,
      default: 'favorite',
    },

    color: {
      type: String,
      default: '#000000',
    },

    size: {
      type: [String, Number],
      default: 24,
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
    appIconClasses() {
      return ['app-icon'];
    },

    appIconStyles() {
      return { color: this.color, fontSize: this.size + 'px' };
    },
  },
});
</script>

<style scoped>
@import './styles/app-icon.css';
</style>

<template>
  <i :class="appIconClasses" :style="appIconStyles">{{ name }}</i>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

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
    ...mapGetters({
      theme: 'layout/theme',
    }),

    appIconClasses() {
      return ['app-icon'];
    },

    appIconStyles() {
      let color;

      if (this.color) {
        color = this.color;
      } else {
        color = this.theme === 'dark' ? '#585858' : '#000000';
      }

      return {
        color,
        fontSize: this.size + 'px',
        width: this.size + 'px',
      };
    },
  },
});
</script>

<style scoped>
@import './styles/app-icon.css';
</style>

<template>
  <i :class="appLogoClasses" :style="appLogoStyles"></i>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'AppLogo',

  /**
   * 属性
   */
  props: {
    name: {
      type: String,
      default: 'w32',
    },

    size: {
      type: [String, Number],
      default: 32,
    },

    color: {
      type: String,
    },
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      theme: 'layout/theme',
    }),

    appLogoClasses() {
      return ['app-logo', this.name];
    },

    appLogoStyles() {
      let color;

      if (this.color) {
        color = this.color;
      } else {
        color = this.theme === 'dark' ? '#585858' : '#000000';
      }

      return { fontSize: this.size + 'px', color };
    },
  },
});
</script>

<style scoped>
@import './styles/app-log.css';
</style>

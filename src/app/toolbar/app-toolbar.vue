<template>
  <div>
    <div class="app-toolbar">
      <AppToolbarItemSearch />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppToolbarItemSearch from './components/app-toolbar-item-search';

export default defineComponent({
  name: 'AppToolbar',

  /**
   * 属性
   */
  props: {},

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
  components: {
    AppToolbarItemSearch,
  },
});
</script>

<style scoped>
@import './styles/app-toolbar.css';
</style>

<template>
  <div class="app-sidebar">
    <AppSideBarItemBrand />
    <AppSideBarItemPopular />
    <AppSideBarItemAdd />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppSideBarItemBrand from './components/app-sidebar-item-brand';
import AppSideBarItemPopular from './components/app-sidebar-item-popular';
import AppSideBarItemAdd from './components/app-sidebar-item-add';

export default defineComponent({
  name: 'AppSidebar',

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
    AppSideBarItemBrand,
    AppSideBarItemPopular,
    AppSideBarItemAdd,
  },
});
</script>

<style scoped>
@import './styles/app-sidebar.css';
</style>

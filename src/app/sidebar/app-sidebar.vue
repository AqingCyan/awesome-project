<template>
  <div class="app-sidebar">
    <AppSidebarItemBrand />
    <AppSidebarItemUser />
    <AppSidebarItemPopular />
    <AppSidebarItemAdd />
    <AppSidebarItemTheme />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppSidebarItemBrand from './components/app-sidebar-item-brand';
import AppSidebarItemPopular from './components/app-sidebar-item-popular';
import AppSidebarItemAdd from './components/app-sidebar-item-add';
import AppSidebarItemTheme from './components/app-sidebar-item-theme';
import AppSidebarItemUser from './components/app-sidebar-item-user';

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
    AppSidebarItemBrand,
    AppSidebarItemPopular,
    AppSidebarItemAdd,
    AppSidebarItemTheme,
    AppSidebarItemUser,
  },
});
</script>

<style scoped>
@import './styles/app-sidebar.css';
</style>

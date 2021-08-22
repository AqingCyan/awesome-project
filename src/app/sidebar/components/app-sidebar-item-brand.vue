<template>
  <div class="app-sidebar-item brand">
    <router-link to="/" class="link">
      <AppLogo />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppLogo from '@/app/components/app-logo';

export default defineComponent({
  name: 'AppSidebarItemBrand',

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
    AppLogo,
  },
});
</script>

<style scoped></style>

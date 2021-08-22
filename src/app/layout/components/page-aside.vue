<template>
  <div class="page-aside">
    <AppSidebar />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppSidebar from '@/app/sidebar/app-sidebar';

export default defineComponent({
  name: 'PageAside',

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
    AppSidebar,
  },
});
</script>

<style scoped></style>

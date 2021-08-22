<template>
  <div class="app-sidebar-item add">
    <AppIcon name="add_a_photo" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppIcon from '@/app/components/app-icon';

export default defineComponent({
  name: 'AppSidebarItemAdd',

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
    AppIcon,
  },
});
</script>

<style scoped></style>

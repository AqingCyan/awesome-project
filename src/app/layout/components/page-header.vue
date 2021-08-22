<template>
  <div class="page-header">
    <div class="container">
      <AppToolbar />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppToolbar from '@/app/toolbar/app-toolbar';

export default defineComponent({
  name: 'PageHeader',

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
    AppToolbar,
  },
});
</script>

<style scoped></style>

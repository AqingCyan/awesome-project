<template>
  <div class="app-sidebar-item popular">
    <router-link class="link" :to="{ name: 'postIndexPopular' }">
      <AppIcon name="local_fire_department" />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppIcon from '@/app/components/app-icon';

export default defineComponent({
  name: 'AppSidebarItemPopular',

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

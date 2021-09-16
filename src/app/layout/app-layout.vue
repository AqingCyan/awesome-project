<template>
  <div :class="['page', theme]">
    <PageHeader />
    <PageAside />
    <div class="page-main">
      <slot></slot>
      <PageSideSheet />
    </div>
    <AppNotification />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import { getStorage } from '../app.service';
import PageHeader from './components/page-header';
import PageAside from './components/page-aside';
import AppNotification from '@/app/notification/app-notification';
import PageSideSheet from '@/app/layout/components/page-side-sheet';

export default defineComponent({
  name: 'AppLayout',

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
  computed: {
    ...mapGetters({
      theme: 'layout/theme',
    }),
  },

  created() {
    const theme = getStorage('theme');

    if (theme) {
      this.setTheme(theme);
    }
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapMutations({
      setTheme: 'layout/setTheme',
    }),
  },

  /**
   * 使用组件
   */
  components: {
    PageSideSheet,
    PageHeader,
    PageAside,
    AppNotification,
  },
});
</script>

<style scoped></style>

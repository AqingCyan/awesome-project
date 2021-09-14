<template>
  <div>
    <div class="app-toolbar">
      <transition name="app-toolbar-item-layout">
        <div class="app-toolbar-item layout" v-if="showPostListLayoutSwitcher">
          <PostListLayoutSwitcher />
        </div>
      </transition>
      <div class="app-toolbar-item navigator">
        <PostShowNavigator />
      </div>
      <AppToolbarItemSearch />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import AppToolbarItemSearch from './components/app-toolbar-item-search';
import PostListLayoutSwitcher from '@/post/index/components/post-list-layout-switcher';
import PostShowNavigator from '@/post/show/components/post-show-navigator';

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
  computed: {
    ...mapGetters({
      showPostListLayoutSwitcher: 'toolbar/showPostListLayoutSwitcher',
    }),
  },

  /**
   * 组件
   */
  components: {
    PostShowNavigator,
    AppToolbarItemSearch,
    PostListLayoutSwitcher,
  },
});
</script>

<style scoped>
@import './styles/app-toolbar.css';
</style>

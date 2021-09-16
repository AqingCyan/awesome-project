<template>
  <div class="page-side-sheet" v-if="sideSheetComponent">
    <CloseButton @click="onClickCloseButton" />
    <component :is="sideSheetComponent"></component>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import CommentSideSheet from '@/comment/components/comment-side-sheet';
import CloseButton from '@/app/components/close-button';

export default defineComponent({
  name: 'PageSideSheet',

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
      sideSheetComponent: 'layout/sideSheetComponent',
    }),
  },

  /**
   * 已创建
   */
  created() {
    if (window) {
      window.addEventListener('keyup', this.onKeyupWindow);
    }
  },

  /**
   * 卸载组件
   */
  unmounted() {
    if (window) {
      window.removeEventListener('keyup', this.onKeyupWindow);
    }
  },

  /**
   * 方法
   */
  methods: {
    ...mapMutations({ resetSideSheet: 'layout/resetSideSheet' }),

    onClickCloseButton() {
      this.resetSideSheet();
    },

    onKeyupWindow(event) {
      if (event.key === 'Escape') {
        this.onClickCloseButton();
      }
    },
  },

  /**
   * 组件
   */
  components: {
    CloseButton,
    CommentSideSheet,
  },
});
</script>

<style scoped>
@import 'styles/page-side-sheet.css';
</style>

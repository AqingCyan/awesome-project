<template>
  <div class="page-side-sheet" v-if="sideSheetComponent">
    <component :is="sideSheetComponent"></component>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import CommentSideSheet from '@/comment/components/comment-side-sheet';

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
   * 组件
   */
  components: {
    CommentSideSheet,
  },
});
</script>

<style scoped>
@import 'styles/page-side-sheet.css';
</style>

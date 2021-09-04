<template>
  <div class="post-list-filters">
    <div
      class="post-list-filter"
      v-for="(filter, index) in filters"
      :key="index"
    >
      <div class="title">{{ filter.title }}</div>
      <div class="value">{{ filter.value }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PostListFilters',

  /**
   * 属性
   */
  props: {
    filters: {
      type: Array,
    },
  },

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
  components: {},
});
</script>

<style scoped>
@import 'styles/post-list-filters.css';
</style>

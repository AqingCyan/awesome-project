<template>
  <div :class="['close-button', align]">
    <button class="button basic" @click="$emit('click')">
      <AppIcon name="close" />
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppIcon from '@/app/components/app-icon';

export default defineComponent({
  name: 'CloseButton',

  /**
   * 属性
   */
  props: {
    align: {
      type: String,
    },
  },

  /**
   * 事件
   */
  emits: ['click'],

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

<style scoped>
@import 'styles/close-button.css';
</style>

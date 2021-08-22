<template>
  <div class="field">
    <button :class="['button', size]" @click="$emit('click')">
      {{ text }}
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonField',

  /**
   * 属性
   */
  props: {
    text: {
      type: String,
    },

    size: {
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
  components: {},
});
</script>

<style scoped></style>

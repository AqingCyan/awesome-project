<template>
  <div class="app-sidebar-item user">
    <UserAvatar :user="{ id: 5, avatar: 1 }" link="login" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import UserAvatar from '@/user/components/user-avatar';

export default defineComponent({
  name: 'app-sidebar-item-user',

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
    UserAvatar,
  },
});
</script>

<style scoped></style>

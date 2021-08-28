<template>
  <div class="user-account">
    <UserAccountSetAvatar />
    <UserAccountChangeName />
    <UserAccountChangePassword />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import UserAccountSetAvatar from './components/user-account-set-avatar';
import UserAccountChangeName from './components/user-account-change-name';
import UserAccountChangePassword from './components/user-account-change-password';

export default defineComponent({
  name: 'UserAccount',

  /**
   * 标题
   */
  title() {
    return '用户账户';
  },

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
    UserAccountSetAvatar,
    UserAccountChangeName,
    UserAccountChangePassword,
  },
});
</script>

<style scoped>
@import 'styles/user-account.css';
</style>

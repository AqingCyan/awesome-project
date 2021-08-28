<template>
  <div :class="userNameClasses">
    <div class="user-name-text">
      <router-link :to="userNameLinkTo" class="link">
        {{ user?.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserName',

  /**
   * 属性
   */
  props: {
    user: {
      type: Object,
    },

    size: {
      type: String,
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
  computed: {
    userNameClasses() {
      return ['user-name', this.size];
    },

    userNameLinkTo() {
      if (this.user?.id) {
        return {
          name: 'userPosts',
          params: { userId: this.user.id },
        };
      }
      return 'login';
    },
  },

  /**
   * 组件
   */
  components: {},
});
</script>

<style scoped>
@import 'styles/user-name.css';
</style>

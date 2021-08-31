<template>
  <div class="post-show-header">
    <div class="content">
      <h1 class="text">{{ post.title }}</h1>
      <div class="meta">
        <UserName :user="post.user" />
      </div>
    </div>
    <div class="thumbnail">
      <UserAvatar :user="post.user" size="medium" link="user" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import UserAvatar from '@/user/components/user-avatar';
import UserName from '@/user/components/user-name';

export default defineComponent({
  name: 'PostShowHeader',

  /**
   * 属性
   */
  props: {
    post: {
      type: Object,
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
  components: {
    UserAvatar,
    UserName,
  },
});
</script>

<style scoped>
@import 'styles/post-show-header.css';
</style>

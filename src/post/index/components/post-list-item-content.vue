<template>
  <div class="post-list-item-content">
    <div class="thumbnail">
      <UserAvatar :user="item.user" />
    </div>

    <div class="header">
      <div class="text">
        <router-link class="link" :to="itemLinkTo">{{
          item.title
        }}</router-link>
      </div>
      <div class="meta">
        <UserName :user="item.user" />
      </div>
    </div>

    <div class="actions">
      <div class="action">
        <div class="icon">
          <AppIcon name="favorite" />
        </div>
        <div class="text">
          {{ item.totalLikes }}
        </div>
      </div>
      <div class="action">
        <div class="icon">
          <AppIcon name="comment" />
        </div>
        <div class="text">
          {{ item.totalComments }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import UserAvatar from '@/user/components/user-avatar';
import UserName from '@/user/components/user-name';
import AppIcon from '@/app/components/app-icon';

export default defineComponent({
  name: 'PostListItemContent',

  /**
   * 属性
   */
  props: {
    item: {
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
  computed: {
    itemLinkTo() {
      return { name: 'postShow', params: { postId: this.item.id } };
    },
  },

  /**
   * 组件
   */
  components: {
    UserAvatar,
    UserName,
    AppIcon,
  },
});
</script>

<style scoped>
@import 'styles/post-list-item-content.css';
</style>

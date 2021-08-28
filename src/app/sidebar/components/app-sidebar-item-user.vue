<template>
  <div class="app-sidebar-item user">
    <UserAvatar
      :user="currentUser"
      :link="userAvatarLink"
      @click="onClickUserAvatar"
    />
    <transition name="user-menu">
      <UserMenu
        v-if="showUserMenu && currentUser"
        @close="showUserMenu = false"
      />
    </transition>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import UserAvatar from '@/user/components/user-avatar';
import UserMenu from '@/user/components/user-menu';

export default defineComponent({
  name: 'AppSidebarItemUser',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      showUserMenu: false,
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser',
    }),

    userAvatarLink() {
      return this.currentUser ? null : 'login';
    },
  },

  /**
   * 组件方法
   */
  methods: {
    onClickUserAvatar() {
      // hack: 没有 currentUser 的时候已经退出登录，因此不应该做 showUserMenu 的切换
      this.showUserMenu = this.currentUser ? !this.showUserMenu : false;
    },
  },

  /**
   * 组件
   */
  components: {
    UserAvatar,
    UserMenu,
  },
});
</script>

<style scoped></style>

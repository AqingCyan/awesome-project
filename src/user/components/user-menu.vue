<template>
  <div class="user-menu">
    <CloseButton @click="$emit('close')" />
    <div class="user-menu-header">
      <UserName :user="currentUser" />
    </div>
    <div
      class="user-menu-items"
      v-for="(menuItems, menuItemIndex) in menu"
      :key="menuItemIndex"
    >
      <div
        class="user-menu-item"
        v-for="(item, index) in menuItems"
        :key="index"
        @click="$emit('close')"
      >
        <router-link class="link" :to="item.linkTo">
          {{ item.text }}
        </router-link>
      </div>
    </div>
    <div class="user-menu-footer">
      <button class="button block lowkey" @click="onClickLogoutButton">
        退出登录
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import CloseButton from '@/app/components/close-button';
import UserName from './user-name';

export default defineComponent({
  name: 'UserMenu',

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
   * 事件
   */
  emits: ['close'],

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser',
    }),

    menu() {
      return [
        [
          {
            linkTo: {
              name: 'userPosts',
              params: { userId: this.currentUser.id },
            },
            text: '作品',
          },
          {
            linkTo: {
              name: 'userComments',
              params: { userId: this.currentUser.id },
            },
            text: '评论',
          },
        ],
        [
          {
            linkTo: {
              name: 'userAccount',
              params: { userId: this.currentUser.id },
            },
            text: '账户',
          },
        ],
      ];
    },
  },

  /**
   * 创建后
   */
  created() {
    if (window) {
      window.addEventListener('keyup', this.onKeyUpWindow);
    }
  },

  /**
   * 取消挂载
   */
  unmounted() {
    if (window) {
      window.removeEventListener('keyup', this.onKeyUpWindow);
    }
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapActions({
      logout: 'auth/logout',
    }),

    onKeyUpWindow(event) {
      if (event.key === 'Escape') {
        this.$emit('close');
      }
    },

    onClickLogoutButton() {
      this.$emit('close');
      this.logout();
    },
  },

  /**
   * 组件
   */
  components: {
    CloseButton,
    UserName,
  },
});
</script>

<style scoped>
@import 'styles/user-menu.css';
</style>

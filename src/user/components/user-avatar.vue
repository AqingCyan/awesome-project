<template>
  <div :class="userAvatarClasses">
    <router-link class="link" :to="userAvatarLinkTo" v-if="link">
      <img
        class="image"
        :src="userAvatarSource"
        alt="头像"
        @load="onloadImage"
      />
    </router-link>
    <img
      v-else
      class="image"
      :src="userAvatarSource"
      alt="头像"
      @load="onloadImage"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import { API_BASE_URL } from '@/app/app.config';

export default defineComponent({
  name: 'UserAvatar',

  /**
   * 属性
   */
  props: {
    user: {
      type: Object,
    },

    size: {
      type: String,
      default: 'small',
    },

    link: {
      type: String,
    },
  },

  /**
   * 数据
   */
  data() {
    return {
      loading: true,
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
      avatarPreviewImage: 'user/account/avatarPreviewImage',
      currentUser: 'user/currentUser',
    }),

    userAvatarClasses() {
      return [
        'user-avatar',
        this.size,
        { fade: !this.isLoggedIn && !this.user },
        { loading: this.loading },
      ];
    },

    userAvatarSource() {
      let avatarSource;

      if (this.user && this.user.avatar) {
        avatarSource = `${API_BASE_URL}/users/${this.user.id}/avatar?size=${this.size}`;
      } else {
        avatarSource = '/icons/account-black-32px.svg';
      }

      if (
        this.currentUser &&
        this.currentUser.id === this.user.id &&
        this.avatarPreviewImage
      ) {
        avatarSource = this.avatarPreviewImage;
      }

      return avatarSource;
    },

    userAvatarLinkTo() {
      let linkTo;

      if (this.link === 'login' && !this.isLoggedIn) {
        linkTo = { name: 'login' };
      } else if (this.user || this.link === 'user') {
        linkTo = {
          name: 'userPosts',
          params: { userId: this.user.id },
        };
      } else {
        linkTo = '/';
      }

      return linkTo;
    },
  },

  methods: {
    onloadImage() {
      this.loading = false;
    },
  },

  /**
   * 组件
   */
  components: {},
});
</script>

<style scoped>
@import './styles/user-avatar.css';
</style>

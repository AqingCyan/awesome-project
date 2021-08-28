<template>
  <div class="user-show" v-if="user">
    <div class="user-show-header">
      <UserAvatar :user="user" size="large" />
      <UserName :user="user" size="large" />
    </div>
    <UserShowMenu :user="user" />
    <div class="user-show-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import UserAvatar from '@/user/components/user-avatar';
import UserName from '@/user/components/user-name';
import UserShowMenu from '@/user/show/components/user-show-menu';

export default defineComponent({
  name: 'UserShow',

  /**
   * 属性
   */
  props: {
    userId: {
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
    ...mapGetters({
      user: 'user/show/user',
    }),
  },

  /**
   * 监视
   */
  watch: {
    userId() {
      this.getUserById(this.userId);
    },
  },

  created() {
    this.getUserById(this.userId);
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapActions({
      getUserById: 'user/show/getUserById',
    }),
  },

  /**
   * 组件
   */
  components: {
    UserAvatar,
    UserName,
    UserShowMenu,
  },
});
</script>

<style scoped>
@import './styles/user-show.css';
</style>

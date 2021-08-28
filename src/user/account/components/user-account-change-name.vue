<template>
  <div class="user-account-change-name">
    <div class="form">
      <h2 class="header">修改名字</h2>
      <TextField v-model="newName" placeholder="输入新的用户名" />
      <TextField
        v-if="newName"
        v-model="password"
        placeholder="验证用户登录密码"
        type="password"
      />
      <ButtonField text="提交" size="large" @click="onClickSubmitButton" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import TextField from '@/app/components/text-field';
import ButtonField from '@/app/components/button-field';

export default defineComponent({
  name: 'UserAccountChangeName',

  /**
   * 属性
   */
  props: {},

  /**
   * 数据
   */
  data() {
    return {
      newName: '',
      password: '',
    };
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      currentUser: 'user/currentUser',
    }),
  },

  /**
   * 组件方法
   */
  methods: {
    ...mapActions({
      pushMessage: 'notification/pushMessage',
      updateUserAccount: 'user/account/updateUserAccount',
    }),

    async onClickSubmitButton() {
      if (!this.newName) {
        return this.pushMessage({
          content: '请输入新的用户名 👋',
          icon: 'error',
        });
      }

      try {
        await this.updateUserAccount({
          userId: this.currentUser.id,
          body: {
            validate: {
              password: this.password,
            },
            update: {
              name: this.newName,
            },
          },
        });

        this.pushMessage({ content: '成功修改了用户名 🌈' });

        this.newName = '';
        this.password = '';
      } catch (error) {
        this.pushMessage({ content: `${error.data.message} 😅` });
      }
    },
  },

  /**
   * 组件
   */
  components: {
    TextField,
    ButtonField,
  },
});
</script>

<style scoped>
.user-account-change-name {
  padding-bottom: 32px;
}
</style>

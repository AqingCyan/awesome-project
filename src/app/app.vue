<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import AppLayout from '@/app/layout/app-layout';
import { mapMutations, mapActions } from 'vuex';
import { getStorage } from '@/app/app.service';
import { socket } from '@/app/app.service';

export default {
  data() {
    return {
      layout: 'AppLayout',
    };
  },

  created() {
    // 用户令牌
    const token = getStorage('nid');

    if (token) {
      this.setToken(token);
      this.configApiHttpClientAuthHeader(token);
    }

    socket.on('connect', () => {
      console.log('connect', socket.id);
    });
  },

  methods: {
    ...mapMutations({
      setToken: 'auth/setToken',
    }),

    ...mapActions({
      configApiHttpClientAuthHeader: 'auth/configApiHttpClientAuthHeader',
    }),
  },

  components: { AppLayout },
};
</script>

<style scoped>
@import './styles/normalize.css';
@import './styles/app.css';
@import './styles/page.css';
@import './styles/base.css';
@import './styles/theme.css';
@import './styles/form.css';
@import './styles/button.css';
</style>

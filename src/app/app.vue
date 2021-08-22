<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import AppLayout from '@/app/layout/app-layout';
import { socket } from '@/app/app.service';

export default {
  data() {
    return {
      layout: 'AppLayout',
    };
  },

  created() {
    socket.on('connect', () => {
      console.log('connect', socket.id);
    });
  },

  components: { AppLayout },
};
</script>

<style scoped>
@import './styles/normalize.css';
@import './styles/app.css';
@import './styles/page.css';
</style>

<template>
  <h3>
    <router-link to="/">{{ name }}</router-link>
  </h3>
  <router-view />
</template>

<script>
import { socket } from '@/app/app.service';

export default {
  data() {
    return {
      name: 'Awesome!',
    };
  },

  created() {
    console.log(this.$store.state);

    socket.on('connect', () => {
      console.log('connect', socket.id);
    });
  },
};
</script>

<style scoped>
@import './styles/app.css';
</style>

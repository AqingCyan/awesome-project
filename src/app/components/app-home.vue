<template>
  <div>Hello World ：） {{ isLoggedIn }}</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppHome',

  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
};
</script>

<style scoped></style>

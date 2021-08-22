<template>
  <div>Hello World ：） {{ isLoggedIn }}</div>
  <br />
  <button class="button" @click="onClickPushMessageButton">Push Message</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppHome',

  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },

  methods: {
    ...mapActions({
      pushMessage: 'notification/pushMessage',
    }),

    onClickPushMessageButton() {
      this.pushMessage({
        content: '空山新雨后，天气晚来秋',
        icon: 'cloud',
      });
    },
  },
};
</script>

<style scoped></style>

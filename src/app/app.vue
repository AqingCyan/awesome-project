<template>
  <h3>
    <router-link to="/">{{ name }}</router-link>
  </h3>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      name: 'Hello World',
    };
  },

  created() {
    console.log(this.$store.state);
  },
};
</script>

<style scoped>
@import './styles/app.css';
</style>

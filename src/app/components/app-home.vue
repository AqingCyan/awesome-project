<template>
  <component :is="home"></component>
</template>

<script>
import PostIndex from '@/post/index/post-index';

export default {
  name: 'AppHome',

  data() {
    return {
      home: 'PostIndex',
    };
  },

  computed: {},

  methods: {},

  components: {
    PostIndex,
  },
};
</script>

<style scoped></style>

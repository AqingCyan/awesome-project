<template>
  <div>post index</div>
</template>

<script>
import { apiHttpClient } from '@/app/app.service';

export default {
  name: 'post-index.vue',

  async created() {
    const response = await apiHttpClient.get('/posts');

    console.log(response);
  },
};
</script>

<style scoped></style>

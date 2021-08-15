<template>
  <PostListItem v-for="post in posts" :item="post" :key="post.id" />
</template>

<script>
import { defineComponent } from 'vue';
import { apiHttpClient } from '@/app/app.service';
import PostListItem from './post-list-item';

export default defineComponent({
  data() {
    return {
      posts: [],
    };
  },

  async created() {
    const response = await apiHttpClient.get('/posts');
    this.posts = response.data;
  },

  components: {
    PostListItem,
  },
});
</script>

<style scoped></style>

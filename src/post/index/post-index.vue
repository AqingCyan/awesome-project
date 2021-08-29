<template>
  <PostList />
</template>

<script>
import { defineComponent } from 'vue';
import PostList from './components/post-list';

export default defineComponent({
  title() {
    let title;
    if (this.$route.name === 'postIndexPopular') {
      title = '热门';
    } else {
      title = '内容列表';
    }
    return title;
  },
  components: { PostList },
});
</script>

<style scoped></style>

<template>
  <PostListFilters v-if="filterItems.length" :filters="filterItems" />
  <PostList :sort="sort" :filter="filter" />
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import PostList from './components/post-list';
import PostListFilters from '@/post/index/components/post-list-filters';

export default defineComponent({
  props: {
    sort: {
      type: String,
    },

    filter: {
      type: Object,
    },
  },

  title() {
    let title;
    if (this.$route.name === 'postIndexPopular') {
      title = '热门';
    } else {
      title = '内容列表';
    }
    return title;
  },

  computed: {
    ...mapGetters({
      filterItems: 'post/index/filterItems',
    }),
  },

  components: { PostListFilters, PostList },
});
</script>

<style scoped></style>

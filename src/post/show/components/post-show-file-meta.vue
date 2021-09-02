<template>
  <div class="post-show-file-meta">
    <PostShowFileMetaKit :kit="kit" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import PostShowFileMetaKit from '@/post/show/components/post-show-file-meta-kit';

export default defineComponent({
  name: 'PostShowFileMeta',

  /**
   * 属性
   */
  props: {
    post: {
      type: Object,
    },
  },

  /**
   * 数据
   */
  data() {
    return {};
  },

  /**
   * 创建后
   */
  created() {
    this.getFileById(this.post.file.id);
  },

  /**
   * 计算属性
   */
  computed: {
    ...mapGetters({
      loading: 'file/show/loading',
      kit: 'file/show/kit',
      specs: 'file/show/specs',
    }),
  },

  /**
   * 方法
   */
  methods: {
    ...mapActions({
      getFileById: 'file/show/getFileById',
    }),
  },

  /**
   * 组件
   */
  components: { PostShowFileMetaKit },
});
</script>

<style scoped>
@import 'styles/post-show-file-meta.css';
</style>

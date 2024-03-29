import { RouteRecordRaw } from 'vue-router';
import PostIndex from '@/post/index/post-index.vue';
import PostShow from '@/post/show/post-show.vue';

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    name: 'postIndex',
    path: '/posts',
    component: PostIndex,
    props: route => {
      return {
        sort: 'latest',
        filter: route.query,
      };
    },
  },
  {
    name: 'postShow',
    path: '/posts/:postId',
    component: PostShow,
    props: true,
  },
  {
    name: 'postIndexPopular',
    path: '/popular',
    component: PostIndex,
    props: route => {
      return {
        sort: 'most_comments',
        filter: route.query,
      };
    },
  },
];

/**
 * 默认导出
 */
export default routes;

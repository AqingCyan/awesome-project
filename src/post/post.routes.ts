import { RouteRecordRaw } from 'vue-router';
import PostIndex from '@/post/index/post-index.vue';

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    name: 'postIndex',
    path: '/posts',
    component: PostIndex,
  },
];

/**
 * 默认导出
 */
export default routes;

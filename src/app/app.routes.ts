import { RouteRecordRaw } from 'vue-router';
import AppHome from '@/app/components/app-home.vue';

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: AppHome,
    props: route => {
      return {
        sort: 'latest',
        filter: route.query,
      };
    },
  },
];

/**
 * 默认导出
 */
export default routes;

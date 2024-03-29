import { RouteRecordRaw } from 'vue-router';
import AuthLogin from './login/auth-login.vue';

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    name: 'login',
    path: '/login',
    component: AuthLogin,
    props: true,
  },
];

export default routes;

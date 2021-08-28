import { createRouter, createWebHashHistory } from 'vue-router';
import appRoutes from '@/app/app.routes';
import postRoutes from '@/post/post.routes';
import authRoutes from '@/auth/auth.routes';
import userRoutes from '@/user/user.routes';

/**
 * 创建路由器
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...appRoutes, ...postRoutes, ...authRoutes, ...userRoutes],
});

/**
 * 默认导出
 */
export default router;

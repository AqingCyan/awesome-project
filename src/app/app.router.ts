import { createRouter, createWebHashHistory } from 'vue-router';
import { appToolbarItemGuard } from '@/app/app.router.guard';
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
 * 工具栏项目守卫
 */
router.beforeEach(appToolbarItemGuard);

/**
 * 默认导出
 */
export default router;

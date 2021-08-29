import { createStore } from 'vuex';
import { localStorageStorePlugin } from '@/app/app.store.plugin';
import { postStoreModule, PostStoreState } from '@/post/post.stroe';
import { layoutStoreModule, LayoutStoreState } from './layout/layout.store';
import { authStoreModule, AuthStoreState } from '@/auth/auth.store';
import {
  appNotificationStoreModule,
  AppNotificationStoreState,
} from '@/app/notification/app-notification.store';
import { userStoreModule, UserStoreState } from '@/user/user.store';
import {
  appToolbarStoreModule,
  AppToolbarStoreState,
} from '@/app/toolbar/app-toolbar.store';

export interface RootState {
  appName: string;
  post: PostStoreState;
  layout: LayoutStoreState;
  auth: AuthStoreState;
  notification: AppNotificationStoreState;
  user: UserStoreState;
  toolbar: AppToolbarStoreState;
}

/**
 * 创建store
 */
const store = createStore({
  state: {
    appName: 'awesome-app',
  } as RootState,

  modules: {
    post: postStoreModule,
    layout: layoutStoreModule,
    auth: authStoreModule,
    notification: appNotificationStoreModule,
    user: userStoreModule,
    toolbar: appToolbarStoreModule,
  },

  plugins: [localStorageStorePlugin],
});

/**
 * 默认导出
 */
export default store;

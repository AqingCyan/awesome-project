import { createStore } from 'vuex';
import { postStoreModule, PostStoreState } from '@/post/post.stroe';
import { layoutStoreModule, LayoutStoreState } from './layout/layout.store';

export interface RootState {
  appName: string;
  post: PostStoreState;
  layout: LayoutStoreState;
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
  },
});

/**
 * 默认导出
 */
export default store;

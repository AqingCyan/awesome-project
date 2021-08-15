import { createStore } from 'vuex';
import { postStoreModule, PostStoreState } from '@/post/post.stroe';

export interface RootState {
  appName: string;
  post: PostStoreState;
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
  },
});

/**
 * 默认导出
 */
export default store;

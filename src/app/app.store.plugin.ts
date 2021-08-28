import { Plugin } from 'vuex';
import { setStorage } from '@/app/app.service';
import { RootState } from '@/app/app.store';

/**
 * 本地存储插件
 */
export const localStorageStorePlugin: Plugin<RootState> = store => {
  store.subscribe(mutation => {
    switch (mutation.type) {
      case 'layout/setTheme':
        setStorage('theme', mutation.payload);
        break;
      case 'auth/login/setLoginResponseData':
        // 如果 mutation.payload 为空的时候，说明是退出登录，就清空对应的缓存
        if (!mutation.payload) {
          setStorage('nid', '');
          setStorage('uid', '');
        } else {
          setStorage('nid', mutation.payload.token);
          setStorage('uid', mutation.payload.id);
        }
        break;
    }
  });
};

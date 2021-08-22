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
    }
  });
};

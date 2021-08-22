import { Module } from 'vuex';
import { RootState } from '@/app/app.store';

export interface LayoutStoreState {
  theme: string;
}

export const layoutStoreModule: Module<LayoutStoreState, RootState> = {
  namespaced: true,

  state: {
    theme: 'light',
  } as LayoutStoreState,

  getters: {
    theme(state) {
      return state.theme;
    },
  },

  mutations: {
    setTheme(state, data) {
      state.theme = data;
    },
  },

  actions: {},
};

import { Module } from 'vuex';
import { RootState } from '@/app/app.store';

export interface AppToolbarStoreState {
  showPostListLayoutSwitcher: boolean;
}

export const appToolbarStoreModule: Module<AppToolbarStoreState, RootState> = {
  namespaced: true,

  state: {
    showPostListLayoutSwitcher: false,
  } as AppToolbarStoreState,

  getters: {
    showPostListLayoutSwitcher(state) {
      return state.showPostListLayoutSwitcher;
    },
  },

  mutations: {
    setShowPostListLayoutSwitcher(state, data) {
      state.showPostListLayoutSwitcher = data;
    },
  },

  actions: {},

  modules: {},
};

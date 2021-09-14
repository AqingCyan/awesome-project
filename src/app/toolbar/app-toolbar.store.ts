import { Module } from 'vuex';
import { RootState } from '@/app/app.store';

export interface AppToolbarStoreState {
  showPostListLayoutSwitcher: boolean;
  showPostShowNavigator: boolean;
}

export const appToolbarStoreModule: Module<AppToolbarStoreState, RootState> = {
  namespaced: true,

  state: {
    showPostListLayoutSwitcher: false,
    showPostShowNavigator: false,
  } as AppToolbarStoreState,

  getters: {
    showPostListLayoutSwitcher(state) {
      return state.showPostListLayoutSwitcher;
    },

    showPostShowNavigator(state, _, rootState) {
      return state.showPostShowNavigator && rootState.post.index.posts.length;
    },
  },

  mutations: {
    setShowPostListLayoutSwitcher(state, data) {
      state.showPostListLayoutSwitcher = data;
    },

    setShowPostShowNavigator(state, data) {
      state.showPostShowNavigator = data;
    },
  },

  actions: {},

  modules: {},
};

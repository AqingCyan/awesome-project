import { Module } from 'vuex';
import { RootState } from '@/app/app.store';

export interface LayoutStoreState {
  theme: string;
  sideSheetComponent: string;
}

export const layoutStoreModule: Module<LayoutStoreState, RootState> = {
  namespaced: true,

  state: {
    theme: 'light',
    sideSheetComponent: '',
  } as LayoutStoreState,

  getters: {
    theme(state) {
      return state.theme;
    },

    sideSheetComponent(state) {
      return state.sideSheetComponent;
    },
  },

  mutations: {
    setTheme(state, data) {
      state.theme = data;
    },

    setSideSheetComponent(state, data) {
      state.sideSheetComponent = data;
    },

    resetSideSheet(state) {
      state.sideSheetComponent = '';
    },
  },

  actions: {},
};

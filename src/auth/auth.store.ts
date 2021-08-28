import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import {
  authLoginStoreModule,
  AuthLoginStoreState,
} from '@/auth/login/auth-login.store';
import { apiHttpClient } from '@/app/app.service';

export interface AuthStoreState {
  login: AuthLoginStoreState;
  token: string | null;
}

export const authStoreModule: Module<AuthStoreState, RootState> = {
  namespaced: true,

  state: {
    token: null,
  } as AuthStoreState,

  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },

  mutations: {
    setToken(state, data) {
      state.token = data;
    },
  },

  actions: {
    configApiHttpClientAuthHeader(_, data) {
      apiHttpClient.defaults.headers.common['Authorization'] = `Bearer ${data}`;
    },

    logout({ commit }) {
      commit('setToken', null);
      commit('user/setCurrentUser', null, { root: true });
      commit('auth/login/setLoginResponseData', null, { root: true });
    },
  },

  modules: {
    login: authLoginStoreModule,
  },
};

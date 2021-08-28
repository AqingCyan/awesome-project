import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import { apiHttpClient } from '@/app/app.service';

export interface User {
  id: number;
  name: string;
  avatar: number | null;
}

export interface UserShowStoreState {
  loading: boolean;
  user: User | null;
}

export const userShowStoreModule: Module<UserShowStoreState, RootState> = {
  namespaced: true,

  state: {
    loading: false,
    user: null,
  } as UserShowStoreState,

  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setResponseData(state, data) {
      state.user = data;
    },
  },

  actions: {
    async getUserById({ commit }, userId) {
      commit('setLoading', true);

      try {
        const response = await apiHttpClient.get(`/users/${userId}`);
        commit('setResponseData', response.data);
        commit('setLoading', false);

        return response;
      } catch (error) {
        commit('setLoading', false);

        throw error.response;
      }
    },
  },
};

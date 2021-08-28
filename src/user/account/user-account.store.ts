import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import { apiHttpClient } from '@/app/app.service';

export interface UserAccountStoreState {
  loading: boolean;
  avatarPreviewImage: string;
}

export const userAccountStoreModule: Module<
  UserAccountStoreState,
  RootState
> = {
  namespaced: true,

  state: {
    loading: false,
    avatarPreviewImage: '',
  } as UserAccountStoreState,

  getters: {
    loading(state) {
      return state.loading;
    },

    avatarPreviewImage(state) {
      return state.avatarPreviewImage;
    },
  },

  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setAvatarPreviewImage(state, data) {
      state.avatarPreviewImage = data;
    },
  },

  actions: {
    async createAvatar({ commit }, file) {
      commit('setLoading', true);

      const formData = new FormData();
      formData.append('avatar', file);

      try {
        const response = await apiHttpClient.post('/avatar', formData);
        commit('setLoading', false);

        return response;
      } catch (error) {
        commit('setLoading', false);
        throw error.response;
      }
    },

    async updateUserAccount({ commit, dispatch }, data) {
      commit('setLoading', true);

      try {
        const response = await apiHttpClient.patch('/users', data.body);
        commit('setLoading', false);

        dispatch('user/getCurrentUser', data.userId, { root: true });

        return response;
      } catch (error) {
        commit('setLoading', false);
        throw error.response;
      }
    },
  },

  modules: {},
};

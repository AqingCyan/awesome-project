import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import {
  User,
  userShowStoreModule,
  UserShowStoreState,
} from '@/user/show/user-show.store';

export interface UserStoreState {
  currentUser: User | null;
  show: UserShowStoreState;
}

export const userStoreModule: Module<UserStoreState, RootState> = {
  namespaced: true,

  state: {
    currentUser: null,
  } as UserStoreState,

  getters: {
    currentUser(state) {
      return state.currentUser;
    },
  },

  mutations: {
    setCurrentUser(state, data) {
      state.currentUser = data;
    },
  },

  actions: {
    async getCurrentUser({ commit, dispatch }, userId) {
      try {
        const response = await dispatch('user/show/getUserById', userId, {
          root: true,
        });

        commit('setCurrentUser', response.data);

        return response;
      } catch (error) {
        throw error.response;
      }
    },
  },

  modules: {
    show: userShowStoreModule,
  },
};

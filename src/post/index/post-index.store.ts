import { PostItem } from '@/post/post.stroe';
import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import { apiHttpClient } from '@/app/app.service';

export interface PostIndexStoreState {
  loading: boolean;
  posts: Array<PostItem>;
}

export const postIndexStoreModule: Module<PostIndexStoreState, RootState> = {
  namespaced: true,

  state: {
    loading: false,
    posts: [],
  } as PostIndexStoreState,

  getters: {
    loading(state) {
      return state.loading;
    },

    posts(state) {
      return state.posts;
    },
  },

  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setPosts(state, data) {
      state.posts = data;
    },
  },

  actions: {
    async getPosts({ commit }) {
      commit('setLoading', true);

      try {
        const response = await apiHttpClient.get('posts');
        commit('setPosts', response.data);
        commit('setLoading', false);
      } catch (error) {
        commit('setLoading', false);
        throw error.response;
      }
    },
  },
};

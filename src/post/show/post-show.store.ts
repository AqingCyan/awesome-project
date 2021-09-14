import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import { apiHttpClient } from '@/app/app.service';
import { User } from '@/user/show/user-show.store';
import { postFileProcess } from '@/post/post.service';
import appRouter from '@/app/app.router';

export interface Post {
  id: number;
  title: string;
  content: string;
  user: User;
  totalComments: number;
  totalLikes: number;
  file: {
    id: number;
    width: number;
    height: number;
    orientation: string;
    size: {
      thumbnail: string;
      medium: string;
      large: string;
    };
  };
  tags: Array<{ id: number; name: string }>;
}

export interface PostShowStoreState {
  loading: boolean;
  post: Post;
  layout: string;
}

export const postShowStoreModule: Module<PostShowStoreState, RootState> = {
  namespaced: true,

  state: {
    loading: false,
    post: {},
    layout: '',
  } as PostShowStoreState,

  getters: {
    loading(state) {
      return state.loading;
    },

    post(state) {
      return Object.keys(state.post).length
        ? postFileProcess(state.post)
        : null;
    },

    layout(state) {
      return state.layout;
    },

    currentPostIndex(state, _, rootState) {
      return rootState.post.index.posts.findIndex(
        item => item.id === state.post.id,
      );
    },

    prevPost(_, getters, rootState) {
      return rootState.post.index.posts[getters.currentPostIndex - 1];
    },

    nextPost(_, getters, rootState) {
      return rootState.post.index.posts[getters.currentPostIndex + 1];
    },
  },

  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setPost(state, data) {
      state.post = data;
    },

    setLayout(state, data) {
      state.layout = data;
    },
  },

  actions: {
    async getPostById({ commit }, postId) {
      commit('setLoading', true);

      try {
        const response = await apiHttpClient.get(`/posts/${postId}`);
        commit('setPost', response.data);
        commit('setLoading', false);

        return response;
      } catch (error) {
        commit('setLoading', false);
        throw error.response;
      }
    },

    async goGetPrevPost({ getters, dispatch }) {
      try {
        const response = await dispatch('getPostById', getters.prevPost.id);

        if (getters.prevPost) {
          await appRouter.replace({
            name: 'postShow',
            params: { postId: getters.prevPost.id },
          });
        }

        return response;
      } catch (error) {
        throw error.response;
      }
    },

    async goGetNextPost({ getters, dispatch }) {
      try {
        const response = await dispatch('getPostById', getters.nextPost.id);

        if (getters.nextPost) {
          await appRouter.replace({
            name: 'postShow',
            params: { postId: getters.nextPost.id },
          });
        }

        return response;
      } catch (error) {
        throw error.response;
      }
    },
  },
};

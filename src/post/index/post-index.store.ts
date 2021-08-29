import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import { apiHttpClient } from '@/app/app.service';
import { User } from '@/user/show/user-show.store';
import { API_BASE_URL } from '@/app/app.config';

export interface PostListItem {
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

export interface PostIndexStoreState {
  loading: boolean;
  posts: Array<PostListItem>;
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
      return state.posts.map(post => {
        let { file } = post;

        if (file) {
          const { id: fileId, width, height } = file;
          const fileBaseUrl = `${API_BASE_URL}/files/${fileId}/serve`;

          // 判断图片方向
          const orientation = width > height ? 'horizontal' : 'portrait';

          file = {
            ...file,
            orientation,
            size: {
              thumbnail: `${fileBaseUrl}?size=thumbnail`,
              medium: `${fileBaseUrl}?size=medium`,
              large: `${fileBaseUrl}?size=large`,
            },
          };

          post = { ...post, file };
        }
        return post;
      });
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

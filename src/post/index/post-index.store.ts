import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import { apiHttpClient, queryStringProcess } from '@/app/app.service';
import { User } from '@/user/show/user-show.store';
import { API_BASE_URL, APP_POST_PER_PAGE } from '@/app/app.config';
import { StringifiableRecord } from 'query-string';

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
  layout: string;
  nextPage: number;
  totalPages: number;
  queryString: string;
}

export interface GetPostsOptions {
  sort?: string;
}

export const postIndexStoreModule: Module<PostIndexStoreState, RootState> = {
  namespaced: true,

  state: {
    loading: false,
    posts: [],
    layout: '',
    nextPage: 1,
    totalPages: 1,
    queryString: '',
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

    layout(state) {
      return state.layout;
    },

    hasMore(state) {
      return state.totalPages - state.nextPage >= 0;
    },
  },

  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setPosts(state, data) {
      state.posts = data;
    },

    setLayout(state, data) {
      state.layout = data;
    },

    setTotalPages(state, data) {
      state.totalPages = data;
    },

    setNextPage(state, data) {
      if (data) {
        state.nextPage = data;
      } else {
        state.nextPage++;
      }
    },

    setQueryString(state, data) {
      state.queryString = data;
    },
  },

  actions: {
    /**
     * 获取posts
     * @param commit
     * @param state
     * @param dispatch
     * @param options
     */
    async getPosts({ commit, state, dispatch }, options: GetPostsOptions = {}) {
      const getPostsQueryString = await dispatch('getPostsPreProcess', options);

      try {
        const response = await apiHttpClient.get(
          `/posts?page=${state.nextPage}&${getPostsQueryString}`,
        );

        dispatch('getPostsPostProcess', response);

        commit('setLoading', false);
      } catch (error) {
        commit('setLoading', false);
        throw error.response;
      }
    },

    /**
     * 获取posts之前的处理，如果发现参数变化了，说明访问的内容列表变了（首页or热门），那就把页码设置为1，重新请求
     * @param commit
     * @param state
     * @param options
     */
    getPostsPreProcess({ commit, state }, options: GetPostsOptions) {
      commit('setLoading', true);

      const getPostsQueryObject: StringifiableRecord = {
        sort: options.sort,
      };

      const getPostsQueryString = queryStringProcess(getPostsQueryObject);

      if (state.queryString !== getPostsQueryString) {
        commit('setNextPage', 1);
      }

      commit('setQueryString', getPostsQueryString);

      return getPostsQueryString;
    },

    /**
     * 处理getPosts的操作，获取总数设置页码，合并每一页的posts
     * @param commit
     * @param state
     * @param response
     */
    getPostsPostProcess({ commit, state }, response) {
      if (state.nextPage === 1) {
        commit('setPosts', response.data);
      } else {
        commit('setPosts', [...state.posts, ...response.data]);
      }
      commit('setLoading', false);

      const total =
        response.headers['X-Total-Count'] || response.headers['x-total-count'];

      const totalPages = Math.ceil(total / APP_POST_PER_PAGE);

      commit('setTotalPages', totalPages);
      commit('setNextPage');
    },
  },
};

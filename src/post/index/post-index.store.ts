import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import { apiHttpClient, queryStringProcess } from '@/app/app.service';
import { User } from '@/user/show/user-show.store';
import { APP_POST_PER_PAGE } from '@/app/app.config';
import { StringifiableRecord } from 'query-string';
import { filterProcess, postFileProcess } from '@/post/post.service';

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
  filter: { [name: string]: string } | null;
}

export interface GetPostsOptions {
  sort?: string;
  filter?: { [name: string]: string };
}

export interface FilterItem {
  title?: string;
  value?: string;
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
    filter: null,
  } as PostIndexStoreState,

  getters: {
    loading(state) {
      return state.loading;
    },

    posts(state) {
      return state.posts.map(postFileProcess);
    },

    layout(state) {
      return state.layout;
    },

    hasMore(state) {
      return state.totalPages - state.nextPage >= 0;
    },

    filterItems(state) {
      const items: Array<FilterItem> = [];

      if (state.filter) {
        Object.keys(state.filter).forEach(filterName => {
          const item: FilterItem = {};

          switch (filterName) {
            case 'tag':
              item.title = '标签';
              break;
          }

          if (item.title && state.filter) {
            item.value = state.filter[filterName];
            items.push(item);
          }
        });
      }
      return items;
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

    setFilter(state, data) {
      state.filter = filterProcess(data);
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
      commit('setFilter', options.filter);

      const getPostsQueryObject: StringifiableRecord = {
        sort: options.sort,
        ...state.filter,
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

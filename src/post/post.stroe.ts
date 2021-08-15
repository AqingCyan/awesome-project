import { Module } from 'vuex';
import {
  postCreateStoreModule,
  PostCreateStoreState,
} from '@/post/create/post-create.store';
import { RootState } from '@/app/app.store';

export interface PostStoreState {
  create: PostCreateStoreState;
}

export const postStoreModule: Module<PostStoreState, RootState> = {
  namespaced: true,

  modules: {
    create: postCreateStoreModule,
  },
};

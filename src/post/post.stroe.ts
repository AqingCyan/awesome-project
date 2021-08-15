import { Module } from 'vuex';
import {
  postCreateStoreModule,
  PostCreateStoreState,
} from '@/post/create/post-create.store';
import { RootState } from '@/app/app.store';
import { postIndexStoreModule } from '@/post/index/post-index.store';

export interface PostItem {
  id: number;
  title: string;
  content: string;
}

export interface PostStoreState {
  create: PostCreateStoreState;
}

export const postStoreModule: Module<PostStoreState, RootState> = {
  namespaced: true,

  modules: {
    create: postCreateStoreModule,
    index: postIndexStoreModule,
  },
};

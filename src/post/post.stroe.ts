import { Module } from 'vuex';
import { RootState } from '@/app/app.store';
import {
  postCreateStoreModule,
  PostCreateStoreState,
} from '@/post/create/post-create.store';
import { postIndexStoreModule } from '@/post/index/post-index.store';
import { postShowStoreModule } from '@/post/show/post-show.store';

export interface PostStoreState {
  create: PostCreateStoreState;
}

export const postStoreModule: Module<PostStoreState, RootState> = {
  namespaced: true,

  modules: {
    create: postCreateStoreModule,
    index: postIndexStoreModule,
    show: postShowStoreModule,
  },
};

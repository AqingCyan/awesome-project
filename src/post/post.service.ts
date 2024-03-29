import { Post } from '@/post/show/post-show.store';
import { API_BASE_URL } from '@/app/app.config';

/**
 * 处理内容文件
 */
export const postFileProcess = (post: Post) => {
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
};

/**
 * 处理内容列表过滤器
 */
export const filterProcess = (filterObject: { [name: string]: string }) => {
  const allowedFilterNames = ['tag', 'user', 'action'];

  Object.keys(filterObject).forEach(filterName => {
    const allowed = allowedFilterNames.some(
      allowedFilterName => allowedFilterName === filterName,
    );

    if (!allowed) {
      delete filterObject[filterName];
    }
  });

  return filterObject;
};

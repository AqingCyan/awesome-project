/**
 * 应用名称
 */
export const APP_NAME = process.env.VUE_APP_APP_NAME;

/**
 * 服务接口基本地址
 */
export const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

/**
 * 每页内容数量
 */
export const APP_POST_PER_PAGE = parseInt(
  process.env.VUE_APP_POSTS_PER_PAGE,
  10,
);

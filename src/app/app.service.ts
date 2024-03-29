import axios from 'axios';
import { io } from 'socket.io-client';
import { API_BASE_URL } from '@/app/app.config';
import querystring, { StringifiableRecord } from 'query-string';

/**
 * HTTP 客户端
 */
export const apiHttpClient = axios.create({
  baseURL: API_BASE_URL,
});

/**
 * socket
 */
export const socket = io(API_BASE_URL);

/**
 * 设置存储本地数据
 */
export const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * 获取本地数据
 */
export const getStorage = (key: string) => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : null;
};

/**
 * 处理地址查询符
 */
export const queryStringProcess = (queryStringObject: StringifiableRecord) => {
  Object.keys(queryStringObject).forEach(key => {
    if (queryStringObject[key] === undefined || queryStringObject[key] === '') {
      delete queryStringObject[key];
    }
  });

  return querystring.stringify(queryStringObject);
};

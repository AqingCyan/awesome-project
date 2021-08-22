import axios from 'axios';
import { io } from 'socket.io-client';
import { API_BASE_URL } from '@/app/app.config';

export const apiHttpClient = axios.create({
  baseURL: API_BASE_URL,
});

/**
 * socket
 */
export const socket = io(API_BASE_URL);

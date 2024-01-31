import { UTILS } from '@/utils';
import axios, { AxiosRequestConfig } from 'axios';

export const api = axios.create({
  baseURL: UTILS.processEnv.BASE_ENDPOINT,
  timeout: 20000 // 20 seconds
});

export const fetcher = (options: AxiosRequestConfig) =>
  api({ ...options }).then((res) => res.data);

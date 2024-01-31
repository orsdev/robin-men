import { UTILS } from '@/utils';
import axios, { AxiosRequestConfig } from 'axios';

export const api = axios.create({
  baseURL: UTILS.processEnv.BASE_ENDPOINT,
  timeout: 40000 // 40 seconds
});

export const fetcher = (options: AxiosRequestConfig) =>
  api({ ...options }).then((res) => res.data);

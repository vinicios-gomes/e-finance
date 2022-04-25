import { apiConfig } from '@app/config/api';
import axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: apiConfig.baseUrl,
  timeout: apiConfig.timeout,
});

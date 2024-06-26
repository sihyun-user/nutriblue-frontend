'use client';

import axios from 'axios';
import notifyError from '@/utils/notifyError';

const baseURL = `${process.env.NEXT_PUBLIC_BASE_API}/api/v1`;

const api = axios.create({
  baseURL
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    const modifiedConfig = { ...config };

    if (token) {
      modifiedConfig.headers.Authorization = `Bearer ${token}`;
    }

    return modifiedConfig;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest.set_retry
    ) {
      originalRequest.set_retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');

        if (!refreshToken) {
          return notifyError(error, '登入時效過時,請重新登入');
        }

        const { data } = await axios.post(`${baseURL}/auth/refresh-token`, {
          refreshToken
        });

        const { token } = data.data;

        localStorage.setItem('token', token);

        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axios(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;

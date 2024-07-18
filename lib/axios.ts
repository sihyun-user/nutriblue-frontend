import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = `${process.env.NEXT_PUBLIC_BASE_API}/api/v1`;

const api = axios.create({
  baseURL
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
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

    if (error.response.status === 401 && !originalRequest.set_retry) {
      originalRequest.set_retry = true;

      try {
        const refreshToken = Cookies.get('refreshToken');

        const { data } = await axios.post(`${baseURL}/auth/refreshToken`, {
          refreshToken
        });

        const { token } = data.data;

        Cookies.set('token', token);

        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axios(originalRequest);
      } catch {
        // 處理刷新令牌錯誤或重定向到登入頁面
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default api;

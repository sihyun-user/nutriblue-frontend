import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_API}/api/v1`
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

    if (error.response.status === 401 && !originalRequest.set_retry) {
      try {
        originalRequest.set_retry = true;
        const refreshToken = localStorage.getItem('refreshToken');
        const res = await axios.post('/api/refresh-token', { refreshToken });
        const { token } = res.data.data;

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

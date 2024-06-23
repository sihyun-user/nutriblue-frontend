import axios from 'axios';

const token = '';

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_API}/api/v1/`,
  headers: {
    Authorization: token ? `Bearer ${token}` : ''
  }
});

export default instance;

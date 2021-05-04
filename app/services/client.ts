import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/react-dev',
  responseType: 'json',
  withCredentials: true,
});

const apiClient1 = axios.create({
  baseURL: '/',
  responseType: 'json',
  withCredentials: true,
});

export { apiClient,apiClient1 };

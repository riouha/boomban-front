import axios from 'axios';

export const BaseURL = process.env.NODE_ENV === 'production' ? 'https://boomban.ir/api' : 'http://localhost:4000';
export const axiosInstance = axios.create({
  baseURL: BaseURL,
  headers: {},
});

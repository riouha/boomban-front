import axios from 'axios';

console.log(process.env.NODE_ENV);

export const BaseURL = process.env.NODE_ENV === 'production' ? 'http://87.248.156.231:3400' : 'http://localhost:3400';
export const axiosInstance = axios.create({
  baseURL: BaseURL,
  headers: {},
});

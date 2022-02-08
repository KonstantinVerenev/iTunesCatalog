import axios from 'axios';
import { setupInterceptors } from './interceptors';

export const instance = axios.create({
  baseURL: 'https://itunes.apple.com',
});

setupInterceptors(instance);

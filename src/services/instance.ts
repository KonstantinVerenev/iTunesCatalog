import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://itunes.apple.com',
});

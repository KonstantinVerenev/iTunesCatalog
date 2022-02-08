import { AxiosInstance } from 'axios';
import { store } from '../store';

export const setupInterceptors = (instance: AxiosInstance): void => {
  instance.interceptors.request.use(
    (config) => {
      const country = store.getState().main.currentCountry;

      return { ...config, params: { ...config.params, country } };
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};

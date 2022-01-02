import { AlbumsResponseData } from '../types';

export const SET_ALBUMS_SUCCESS = 'SET_ALBUMS_SUCCESS';

type getAlbumsSuccess = {
  type: typeof SET_ALBUMS_SUCCESS;
  payload: AlbumsResponseData[];
};

export type AlbumsStateAction = getAlbumsSuccess;

export const getAlbumsSuccess = (payload: AlbumsResponseData[]): getAlbumsSuccess => ({
  type: SET_ALBUMS_SUCCESS,
  payload,
});

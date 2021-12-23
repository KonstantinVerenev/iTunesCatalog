import { albumsDataType } from '../types';

export const SET_ALBUMS_SUCCESS = 'SET_ALBUMS_SUCCESS';

type getAlbumsSuccessAction = {
  type: typeof SET_ALBUMS_SUCCESS;
  payload: albumsDataType[];
};

export type AlbumsStateAction = getAlbumsSuccessAction;

export const getAlbumsSuccess = (payload: albumsDataType[]): getAlbumsSuccessAction => {
  return { type: SET_ALBUMS_SUCCESS, payload };
};

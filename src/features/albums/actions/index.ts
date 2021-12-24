import { albumsResponseDataType } from '../types';

export const SET_ALBUMS_SUCCESS = 'SET_ALBUMS_SUCCESS';

type getAlbumsSuccessAction = {
  type: typeof SET_ALBUMS_SUCCESS;
  payload: albumsResponseDataType[];
};

export type AlbumsStateAction = getAlbumsSuccessAction;

export const getAlbumsSuccess = (payload: albumsResponseDataType[]): getAlbumsSuccessAction => {
  return { type: SET_ALBUMS_SUCCESS, payload };
};

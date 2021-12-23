import { albumsDataType } from '../types';

export const FETCH_ALBUMS_DATA = 'FETCH_ALBUMS_DATA';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_DATA_ERROR = 'FETCH_ALBUMS_DATA_ERROR';

type fetchDataAction = {
  type: typeof FETCH_ALBUMS_DATA;
};

type fetchAlbumsSuccessAction = {
  type: typeof FETCH_ALBUMS_SUCCESS;
  payload: albumsDataType[];
};

type fetchDataErrorAction = {
  type: typeof FETCH_ALBUMS_DATA_ERROR;
  payload: string;
};

export type AlbumsStateAction = fetchDataAction | fetchDataErrorAction | fetchAlbumsSuccessAction;

export const fetchData = (): fetchDataAction => {
  return { type: FETCH_ALBUMS_DATA };
};

export const fetchAlbumsSuccess = (payload: albumsDataType[]): fetchAlbumsSuccessAction => {
  return { type: FETCH_ALBUMS_SUCCESS, payload };
};

export const fetchDataError = (payload: string): fetchDataErrorAction => {
  return { type: FETCH_ALBUMS_DATA_ERROR, payload };
};

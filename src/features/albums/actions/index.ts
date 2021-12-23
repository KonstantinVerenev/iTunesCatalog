import { ThunkAction } from 'redux-thunk';
import { albumAPI } from '../../../services/api';

import { AlbumsState } from '../reducers';
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

const fetchData = (): fetchDataAction => {
  return { type: FETCH_ALBUMS_DATA };
};

const fetchAlbumsSuccess = (payload: albumsDataType[]): fetchAlbumsSuccessAction => {
  return { type: FETCH_ALBUMS_SUCCESS, payload };
};

const fetchDataError = (payload: string): fetchDataErrorAction => {
  return { type: FETCH_ALBUMS_DATA_ERROR, payload };
};

export const thunkGetAlbums = (
  name: string
): ThunkAction<void, AlbumsState, unknown, AlbumsStateAction> => {
  return async (dispatch) => {
    try {
      dispatch(fetchData());

      const response = await albumAPI.getAlbumsByName(name);
      const resData = await response.json();

      dispatch(fetchAlbumsSuccess(resData.results));
    } catch (error) {
      console.log(error);
      dispatch(fetchDataError('Произошла ошибка при загрузке с сервера'));
    }
  };
};

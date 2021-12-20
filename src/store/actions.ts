import { ThunkAction } from 'redux-thunk';
import { albumsDataType, artistDataType, MainState } from './types';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

const basicURL = 'https://itunes.apple.com/';

type fetchDataAction = {
  type: typeof FETCH_DATA;
};

type fetchArtistSuccessAction = {
  type: typeof FETCH_ARTISTS_SUCCESS;
  payload: artistDataType[];
};

type fetchAlbumsSuccessAction = {
  type: typeof FETCH_ALBUMS_SUCCESS;
  payload: albumsDataType[];
};

type fetchDataErrorAction = {
  type: typeof FETCH_DATA_ERROR;
  payload: string;
};

export type ArtistStateAction =
  | fetchDataAction
  | fetchArtistSuccessAction
  | fetchDataErrorAction
  | fetchAlbumsSuccessAction;

const fetchData = (): fetchDataAction => {
  return { type: FETCH_DATA };
};

const fetchArtistSuccess = (payload: artistDataType[]): fetchArtistSuccessAction => {
  return { type: FETCH_ARTISTS_SUCCESS, payload };
};

const fetchAlbumsSuccess = (payload: albumsDataType[]): fetchAlbumsSuccessAction => {
  return { type: FETCH_ALBUMS_SUCCESS, payload };
};

const fetchDataError = (payload: string): fetchDataErrorAction => {
  return { type: FETCH_DATA_ERROR, payload };
};

export const thunkGetArtists = (
  name: string
): ThunkAction<void, MainState, unknown, ArtistStateAction> => {
  return async (dispatch) => {
    try {
      dispatch(fetchData());

      const response = await fetch(`${basicURL}search?term=${name}&entity=musicArtist`);
      const resData = await response.json();

      dispatch(fetchArtistSuccess(resData.results));
    } catch (error) {
      console.log(error);
      dispatch(fetchDataError('Произошла ошибка при загрузке с сервера'));
    }
  };
};

export const thunkGetAlbums = (
  name: string
): ThunkAction<void, MainState, unknown, ArtistStateAction> => {
  return async (dispatch) => {
    try {
      dispatch(fetchData());

      const response = await fetch(
        `${basicURL}search?term=${name}&attribute=albumTerm&entity=album`
      );
      const resData = await response.json();

      dispatch(fetchAlbumsSuccess(resData.results));
    } catch (error) {
      console.log(error);
      dispatch(fetchDataError('Произошла ошибка при загрузке с сервера'));
    }
  };
};

export const thunkGetAlbumsById = (
  id: number
): ThunkAction<void, MainState, unknown, ArtistStateAction> => {
  return async (dispatch) => {
    try {
      dispatch(fetchData());

      const response = await fetch(`${basicURL}lookup?id=${id}&entity=album`);
      const resData = await response.json();

      dispatch(fetchAlbumsSuccess(resData.results));
    } catch (error) {
      console.log(error);
      dispatch(fetchDataError('Произошла ошибка при загрузке с сервера'));
    }
  };
};

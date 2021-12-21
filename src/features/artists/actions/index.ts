import { ThunkAction } from 'redux-thunk';
import { artistAlbumsDataType } from '../../albums/types';

import { ArtistsState } from '../reducers';
import { artistDataType } from '../types';

export const FETCH_ARTISTS_DATA = 'FETCH_ARTISTS_DATA';
export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';
export const FETCH_ARTISTS_DATA_ERROR = 'FETCH_DATA_ERROR';
export const FETCH_ARTIST_ALBUMS_SUCCESS = 'FETCH_ARTIST_ALBUMS_SUCCESS';

const basicURL = 'https://itunes.apple.com/';

type fetchDataAction = {
  type: typeof FETCH_ARTISTS_DATA;
};

type fetchArtistSuccessAction = {
  type: typeof FETCH_ARTISTS_SUCCESS;
  payload: artistDataType[];
};

type fetchArtistAlbumsSuccessAction = {
  type: typeof FETCH_ARTIST_ALBUMS_SUCCESS;
  payload: artistAlbumsDataType[];
};

type fetchDataErrorAction = {
  type: typeof FETCH_ARTISTS_DATA_ERROR;
  payload: string;
};

export type ArtistStateAction =
  | fetchDataAction
  | fetchArtistSuccessAction
  | fetchDataErrorAction
  | fetchArtistAlbumsSuccessAction;

const fetchData = (): fetchDataAction => {
  return { type: FETCH_ARTISTS_DATA };
};

const fetchArtistSuccess = (payload: artistDataType[]): fetchArtistSuccessAction => {
  return { type: FETCH_ARTISTS_SUCCESS, payload };
};

const fetchArtistAlbumsSuccess = (
  payload: artistAlbumsDataType[]
): fetchArtistAlbumsSuccessAction => {
  return { type: FETCH_ARTIST_ALBUMS_SUCCESS, payload };
};

const fetchDataError = (payload: string): fetchDataErrorAction => {
  return { type: FETCH_ARTISTS_DATA_ERROR, payload };
};

export const thunkGetArtists = (
  name: string
): ThunkAction<void, ArtistsState, unknown, ArtistStateAction> => {
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

export const thunkGetAlbumsById = (
  id: number
): ThunkAction<void, ArtistsState, unknown, ArtistStateAction> => {
  return async (dispatch) => {
    try {
      dispatch(fetchData());

      const response = await fetch(`${basicURL}lookup?id=${id}&entity=album`);
      const resData = await response.json();

      dispatch(fetchArtistAlbumsSuccess(resData.results));
    } catch (error) {
      console.log(error);
      dispatch(fetchDataError('Произошла ошибка при загрузке с сервера'));
    }
  };
};

import { ThunkAction } from 'redux-thunk';
import { artistAPI } from '../../../services/api';

import { ArtistsState } from '../reducers';
import { artistResponceDataType } from '../types';

export const FETCH_ARTISTS_DATA = 'FETCH_ARTISTS_DATA';
export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';
export const FETCH_ARTISTS_DATA_ERROR = 'FETCH_DATA_ERROR';
export const FETCH_ARTIST_ALBUMS_SUCCESS = 'FETCH_ARTIST_ALBUMS_SUCCESS';

type fetchDataAction = {
  type: typeof FETCH_ARTISTS_DATA;
};

type fetchArtistSuccessAction = {
  type: typeof FETCH_ARTISTS_SUCCESS;
  payload: artistResponceDataType[];
};

//type fetchArtistAlbumsSuccessAction = {
//  type: typeof FETCH_ARTIST_ALBUMS_SUCCESS;
//  payload: artistAlbumsDataType[];
//};

type fetchDataErrorAction = {
  type: typeof FETCH_ARTISTS_DATA_ERROR;
  payload: string;
};

export type ArtistStateAction = fetchDataAction | fetchArtistSuccessAction | fetchDataErrorAction;
//| fetchArtistAlbumsSuccessAction;

export const fetchData = (): fetchDataAction => {
  return { type: FETCH_ARTISTS_DATA };
};

export const fetchArtistSuccess = (payload: artistResponceDataType[]): fetchArtistSuccessAction => {
  return { type: FETCH_ARTISTS_SUCCESS, payload };
};

//export const fetchArtistAlbumsSuccess = (
//  payload: artistAlbumsDataType[]
//): fetchArtistAlbumsSuccessAction => {
//  return { type: FETCH_ARTIST_ALBUMS_SUCCESS, payload };
//};

export const fetchDataError = (payload: string): fetchDataErrorAction => {
  return { type: FETCH_ARTISTS_DATA_ERROR, payload };
};

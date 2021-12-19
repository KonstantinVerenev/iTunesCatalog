import { ThunkAction } from 'redux-thunk';
import { artistData, MainState } from './types';

export const FETCH_ARTISTS = 'FETCH_ARTISTS';
export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';
export const FETCH_ARTISTS_ERROR = 'FETCH_ARTISTS_ERROR';

type fetchArtistAction = {
  type: typeof FETCH_ARTISTS;
};

type fetchArtistSuccessAction = {
  type: typeof FETCH_ARTISTS_SUCCESS;
  payload: artistData[];
};

type fetchArtistErrorAction = {
  type: typeof FETCH_ARTISTS_ERROR;
  payload: string;
};

export type ArtistStateAction =
  | fetchArtistAction
  | fetchArtistSuccessAction
  | fetchArtistErrorAction;

const fetchArtist = (): fetchArtistAction => {
  return { type: FETCH_ARTISTS };
};

const fetchArtistSuccess = (payload: artistData[]): fetchArtistSuccessAction => {
  return { type: FETCH_ARTISTS_SUCCESS, payload };
};

const fetchArtistError = (payload: string): fetchArtistErrorAction => {
  return { type: FETCH_ARTISTS_ERROR, payload };
};

export const thunkGetArtists = (
  name: string
): ThunkAction<void, MainState, unknown, ArtistStateAction> => {
  return async (dispatch) => {
    try {
      dispatch(fetchArtist());

      const response = await fetch(
        `https://itunes.apple.com/search?term=${name}&entity=musicArtist`
      );
      const resData = await response.json();

      dispatch(fetchArtistSuccess(resData.results));
    } catch (error) {
      console.log(error);
      dispatch(fetchArtistError('Произошла ошибка при загрузке с сервера'));
    }
  };
};

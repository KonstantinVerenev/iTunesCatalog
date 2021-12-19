import { ThunkAction } from 'redux-thunk';
import { artistData, MainState } from './types';

export type StateAction = {
  type: string;
  payload: artistData[];
};

export const GET_ARTISTS = 'GET_ARTISTS';

export const thunkGetArtists = (
  name: string
): ThunkAction<void, MainState, unknown, StateAction> => {
  // сюда добавить блок трай - кетч, и обработку ошибки отдельным экшеном

  return async (dispatch) => {
    const response = await fetch(`https://itunes.apple.com/search?term=${name}&entity=musicArtist`);

    const resData = await response.json();

    dispatch({ type: GET_ARTISTS, payload: resData.results });
  };
};

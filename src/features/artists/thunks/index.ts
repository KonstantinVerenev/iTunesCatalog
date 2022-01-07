import { ThunkAction } from 'redux-thunk';
import { artistAPI } from '../../../services/api';
import { getData, getDataError, getDataSuccess, mainStateAction } from '../../../store/actions';
import {
  ArtistStateAction,
  getAlbumsByIdSuccess,
  getArtistSuccess,
  getTracksByIdSuccess,
} from '../actions';
import { ArtistsState } from '../reducers';

type thunkGetArtistsAction = mainStateAction | ArtistStateAction;

export const thunkGetArtists = (
  name: string
): ThunkAction<void, ArtistsState, unknown, thunkGetArtistsAction> => {
  return async (dispatch) => {
    try {
      dispatch(getData());

      const response = await artistAPI.getArtistsByName(name);
      const data = await response.data;

      dispatch(getDataSuccess());
      dispatch(getArtistSuccess(data.results));
    } catch (error) {
      console.log(error);
      dispatch(getDataError('Произошла ошибка при загрузке данных с сервера'));
    }
  };
};

export const thunkGetAlbumsById = (
  id: number
): ThunkAction<void, ArtistsState, unknown, thunkGetArtistsAction> => {
  return async (dispatch) => {
    try {
      dispatch(getData());

      const response = await artistAPI.getArtistAlbumById(id);
      const data = await response.data;

      dispatch(getDataSuccess());
      dispatch(getAlbumsByIdSuccess(data.results.slice(1), id));
    } catch (error) {
      console.log(error);
      dispatch(getDataError('Произошла ошибка при загрузке данных с сервера'));
    }
  };
};

export const thunkGetTracksById = (
  artistId: number,
  collectionId: number
): ThunkAction<void, ArtistsState, unknown, thunkGetArtistsAction> => {
  return async (dispatch) => {
    try {
      dispatch(getData());

      const response = await artistAPI.getTracksById(collectionId);
      const data = await response.data;

      dispatch(getDataSuccess());
      dispatch(getTracksByIdSuccess(data.results.slice(1), artistId, collectionId));
    } catch (error) {
      console.log(error);
      dispatch(getDataError('Произошла ошибка при загрузке данных с сервера'));
    }
  };
};

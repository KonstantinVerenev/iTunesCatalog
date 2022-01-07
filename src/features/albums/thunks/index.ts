import { ThunkAction } from 'redux-thunk';

import { albumAPI } from '../../../services/api';
import { getData, getDataError, getDataSuccess, mainStateAction } from '../../../store/actions';
import { AlbumsStateAction, getAlbumsSuccess, getTracksByIdSuccess } from '../actions';
import { AlbumsState } from '../reducers';

type thunkGetAlbumsAction = mainStateAction | AlbumsStateAction;

export const thunkGetAlbums = (
  name: string
): ThunkAction<void, AlbumsState, unknown, thunkGetAlbumsAction> => {
  return async (dispatch) => {
    try {
      dispatch(getData());

      const response = await albumAPI.getAlbumsByName(name);
      const data = await response.data;

      dispatch(getDataSuccess());
      dispatch(getAlbumsSuccess(data.results));
    } catch (error) {
      console.log(error);
      dispatch(getDataError('Произошла ошибка при загрузке данных с сервера'));
    }
  };
};

export const thunkGetAlbumTracksById = (
  collectionId: number
): ThunkAction<void, AlbumsState, unknown, thunkGetAlbumsAction> => {
  return async (dispatch) => {
    try {
      dispatch(getData());

      const response = await albumAPI.getTracksById(collectionId);
      const data = await response.data;

      dispatch(getDataSuccess());
      dispatch(getTracksByIdSuccess(data.results.slice(1), collectionId));
    } catch (error) {
      console.log(error);
      dispatch(getDataError('Произошла ошибка при загрузке данных с сервера'));
    }
  };
};

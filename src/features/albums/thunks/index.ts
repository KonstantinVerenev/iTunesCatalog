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

      const albums = await albumAPI.getAlbumsByName(name);

      dispatch(getDataSuccess());
      dispatch(getAlbumsSuccess(albums));
    } catch (error) {
      console.log(error);
      dispatch(getDataError('An error occurred while downloading data from the server'));
    }
  };
};

export const thunkGetAlbumTracksById = (
  collectionId: number
): ThunkAction<void, AlbumsState, unknown, thunkGetAlbumsAction> => {
  return async (dispatch) => {
    try {
      dispatch(getData());

      const tracks = await albumAPI.getTracksById(collectionId);

      dispatch(getDataSuccess());
      dispatch(getTracksByIdSuccess(tracks, collectionId));
    } catch (error) {
      console.log(error);
      dispatch(getDataError('An error occurred while downloading data from the server'));
    }
  };
};

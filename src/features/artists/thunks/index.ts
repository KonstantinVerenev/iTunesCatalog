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

      const artists = await artistAPI.getArtistsByName(name);

      dispatch(getDataSuccess());
      dispatch(getArtistSuccess(artists));
    } catch (error) {
      console.log(error);
      dispatch(getDataError('An error occurred while downloading data from the server'));
    }
  };
};

export const thunkGetAlbumsById = (
  id: number
): ThunkAction<void, ArtistsState, unknown, thunkGetArtistsAction> => {
  return async (dispatch) => {
    try {
      dispatch(getData());

      const albums = await artistAPI.getArtistAlbumsById(id);

      dispatch(getDataSuccess());
      dispatch(getAlbumsByIdSuccess(albums, id));
    } catch (error) {
      console.log(error);
      dispatch(getDataError('An error occurred while downloading data from the server'));
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

      const tracks = await artistAPI.getTracksById(collectionId);

      dispatch(getDataSuccess());
      dispatch(getTracksByIdSuccess(tracks, artistId, collectionId));
    } catch (error) {
      console.log(error);
      dispatch(getDataError('An error occurred while downloading data from the server'));
    }
  };
};

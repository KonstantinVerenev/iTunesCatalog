import { ThunkAction } from 'redux-thunk';
import { artistAPI } from '../../../services/api';
import { getData, getDataError, getDataSuccess, mainStateAction } from '../../../store/actions';
import { ArtistStateAction, getAlbumsByIdSuccess, getArtistSuccess } from '../actions';
import { ArtistsState } from '../reducers';

type thunkGetArtistsAction = mainStateAction | ArtistStateAction;

export const thunkGetArtists = (
  name: string
): ThunkAction<void, ArtistsState, unknown, thunkGetArtistsAction> => {
  return async (dispatch) => {
    try {
      dispatch(getData());

      const response = await artistAPI.getArtistsByName(name);
      const resData = await response.json();

      dispatch(getDataSuccess());
      dispatch(getArtistSuccess(resData.results));
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
      const resData = await response.json();

      dispatch(getDataSuccess());
      dispatch(getAlbumsByIdSuccess(resData.results.slice(1), id));
    } catch (error) {
      console.log(error);
      dispatch(getDataError('Произошла ошибка при загрузке данных с сервера'));
    }
  };
};

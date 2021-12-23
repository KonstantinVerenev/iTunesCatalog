import { ThunkAction } from 'redux-thunk';
import { albumAPI } from '../../../services/api';
import { AlbumsStateAction, fetchAlbumsSuccess, fetchData, fetchDataError } from '../actions';
import { AlbumsState } from '../reducers';

export const thunkGetAlbums = (
  name: string
): ThunkAction<void, AlbumsState, unknown, AlbumsStateAction> => {
  return async (dispatch) => {
    try {
      dispatch(fetchData());

      const response = await albumAPI.getAlbumsByName(name);
      const resData = await response.json();

      dispatch(fetchAlbumsSuccess(resData.results));
    } catch (error) {
      console.log(error);
      dispatch(fetchDataError('Произошла ошибка при загрузке с сервера'));
    }
  };
};

import { ThunkAction } from 'redux-thunk';
import { albumAPI } from '../../../services/api';
import { getData, getDataError, getDataSuccess, MainStateAction } from '../../../store/actions';
import { AlbumsStateAction, getAlbumsSuccess } from '../actions';
import { AlbumsState } from '../reducers';

type thunkGetAlbumsAction = MainStateAction | AlbumsStateAction;

export const thunkGetAlbums = (
  name: string
): ThunkAction<void, AlbumsState, unknown, thunkGetAlbumsAction> => {
  return async (dispatch) => {
    try {
      dispatch(getData());

      const response = await albumAPI.getAlbumsByName(name);
      const resData = await response.json();
      setTimeout(() => {
        dispatch(getDataSuccess());
        dispatch(getAlbumsSuccess(resData.results));
      }, 2000);
    } catch (error) {
      console.log(error);
      dispatch(getDataError('Произошла ошибка при загрузке с сервера'));
    }
  };
};

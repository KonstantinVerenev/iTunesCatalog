import { ThunkAction } from 'redux-thunk';
import { artistAPI } from '../../../services/api';
import { getData, getDataError, getDataSuccess, MainStateAction } from '../../../store/actions';
import { ArtistStateAction, getArtistSuccess } from '../actions';
import { ArtistsState } from '../reducers';

type thunkGetArtistsAction = MainStateAction | ArtistStateAction;

export const thunkGetArtists = (
  name: string
): ThunkAction<void, ArtistsState, unknown, thunkGetArtistsAction> => {
  return async (dispatch) => {
    try {
      dispatch(getData());

      const response = await artistAPI.getArtistsByName(name);
      const resData = await response.json();
      setTimeout(() => {
        dispatch(getDataSuccess());
        dispatch(getArtistSuccess(resData.results));
      }, 2000);
    } catch (error) {
      console.log(error);
      dispatch(getDataError('Произошла ошибка при загрузке с сервера'));
    }
  };
};

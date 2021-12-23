import { ThunkAction } from 'redux-thunk';
import { artistAPI } from '../../../services/api';
import { ArtistStateAction, fetchArtistSuccess, fetchData, fetchDataError } from '../actions';
import { ArtistsState } from '../reducers';

export const thunkGetArtists = (
  name: string
): ThunkAction<void, ArtistsState, unknown, ArtistStateAction> => {
  return async (dispatch) => {
    try {
      dispatch(fetchData());

      const response = await artistAPI.getArtistsByName(name);
      const resData = await response.json();

      dispatch(fetchArtistSuccess(resData.results));
    } catch (error) {
      console.log(error);
      dispatch(fetchDataError('Произошла ошибка при загрузке с сервера'));
    }
  };
};

//export const thunkGetAlbumsById = (
//  id: number
//): ThunkAction<void, ArtistsState, unknown, ArtistStateAction> => {
//  return async (dispatch) => {
//    try {
//      dispatch(fetchData());

//      const response = await fetch(`${basicURL}lookup?id=${id}&entity=album`);
//      const resData = await response.json();

//      dispatch(fetchArtistAlbumsSuccess(resData.results));
//    } catch (error) {
//      console.log(error);
//      dispatch(fetchDataError('Произошла ошибка при загрузке с сервера'));
//    }
//  };
//};

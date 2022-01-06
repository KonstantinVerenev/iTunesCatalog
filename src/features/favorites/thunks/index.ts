//import { ThunkAction } from 'redux-thunk';

//import { albumAPI, favoritesAPI } from '../../../services/api';
//import { getData, getDataError, getDataSuccess, mainStateAction } from '../../../store/actions';
//import { FavoritesStateAction } from '../actions';
//import { FavoritesState } from '../reducers';

//type thunkGetAlbumsAction = mainStateAction | FavoritesStateAction;

//export const thunkGetAlbumsByIds = (
//  ids: number[]
//): ThunkAction<void, FavoritesState, unknown, thunkGetAlbumsAction> => {
//  return async (dispatch) => {
//    try {
//      dispatch(getData());

//      const response = await favoritesAPI.getAlbumsByIds(ids);
//      const resData = await response.json();

//      dispatch(getDataSuccess());
//      dispatch(getAlbumsSuccess(resData.results));
//    } catch (error) {
//      console.log(error);
//      dispatch(getDataError('Произошла ошибка при загрузке данных с сервера'));
//    }
//  };
//};

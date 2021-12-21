import {
  AlbumsStateAction,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_DATA,
  FETCH_ALBUMS_DATA_ERROR,
} from '../actions';
import { albumsDataType } from '../types';

export type AlbumsState = {
  albumsData: albumsDataType[];
  isLoading: boolean;
  error: string | null;
};

const initialState: AlbumsState = {
  albumsData: [],
  isLoading: false,
  error: null,
};

export const albumsReducer = (state = initialState, action: AlbumsStateAction): AlbumsState => {
  switch (action.type) {
    case FETCH_ALBUMS_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        albumsData: action.payload,
        isLoading: false,
      };
    case FETCH_ALBUMS_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

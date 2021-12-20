import {
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ALBUMS_SUCCESS,
  ArtistStateAction,
} from './actions';
import { MainState } from './types';

const initialState: MainState = {
  artistsData: [],
  albumsData: [],
  isLoading: false,
  error: null,
};

export const reducer = (state = initialState, action: ArtistStateAction): MainState => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ARTISTS_SUCCESS:
      return {
        ...state,
        artistsData: action.payload,
        isLoading: false,
      };
    case FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        albumsData: action.payload,
        isLoading: false,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

import {
  FETCH_ARTISTS,
  FETCH_ARTISTS_ERROR,
  FETCH_ARTISTS_SUCCESS,
  ArtistStateAction,
} from './actions';
import { MainState } from './types';

const initialState: MainState = {
  artistsData: [],
  isLoading: false,
  error: null,
};

export const reducer = (state = initialState, action: ArtistStateAction): MainState => {
  switch (action.type) {
    case FETCH_ARTISTS:
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
    case FETCH_ARTISTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

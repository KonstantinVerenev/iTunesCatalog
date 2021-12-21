import {
  ArtistStateAction,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_DATA,
  FETCH_ARTISTS_DATA_ERROR,
  FETCH_ARTIST_ALBUMS_SUCCESS,
} from '../actions';
import { artistDataType } from '../types';

export type ArtistsState = {
  artistsData: artistDataType[];
  isLoading: boolean;
  error: string | null;
};

const initialState: ArtistsState = {
  artistsData: [],
  isLoading: false,
  error: null,
};

export const aristsReducer = (state = initialState, action: ArtistStateAction): ArtistsState => {
  switch (action.type) {
    case FETCH_ARTISTS_DATA:
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
    case FETCH_ARTISTS_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_ARTIST_ALBUMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // сюда добавление по новой структуре с id
        //artistsData: action.payload,
      };
    default:
      return state;
  }
};

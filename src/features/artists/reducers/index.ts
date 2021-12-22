import {
  ArtistStateAction,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_DATA,
  FETCH_ARTISTS_DATA_ERROR,
  FETCH_ARTIST_ALBUMS_SUCCESS,
} from '../actions';
import { artistResponceDataType, artistStateDataType } from '../types';

export type ArtistsState = {
  artistsData: artistStateDataType[];
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
    case FETCH_ARTISTS_SUCCESS: {
      const artistData = action.payload.map((artist: artistResponceDataType) => {
        console.log(artist);
        const { artistId, artistName, primaryGenreName } = artist;
        return {
          [artistId]: {
            name: artistName,
            artistGenre: primaryGenreName,
            albums: [],
          },
        };
      });

      return {
        ...state,
        artistsData: artistData,
        isLoading: false,
      };
    }
    case FETCH_ARTISTS_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    //case FETCH_ARTIST_ALBUMS_SUCCESS:
    //  return {
    //    ...state,
    //    isLoading: false,
    //    // сюда добавление по новой структуре с id
    //    //artistsData: action.payload,
    //  };
    default:
      return state;
  }
};

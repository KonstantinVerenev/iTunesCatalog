import { ArtistStateAction, GET_ARTISTS_SUCCESS } from '../actions';
import { artistResponceDataType, artistStateDataType } from '../types';

export type ArtistsState = {
  artistsData: artistStateDataType[];
};

const initialState: ArtistsState = {
  artistsData: [],
};

export const aristsReducer = (state = initialState, action: ArtistStateAction): ArtistsState => {
  switch (action.type) {
    case GET_ARTISTS_SUCCESS: {
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
      };
    }

    default:
      return state;
  }
};

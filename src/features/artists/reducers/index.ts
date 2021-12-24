import { ArtistStateAction, GET_ARTISTS_SUCCESS } from '../actions';
import { ArtistResponceData, ArtistStateData } from '../types';

export type ArtistsState = {
  artistsData: ArtistStateData;
};

const initialState: ArtistsState = {
  artistsData: {},
};

export const aristsReducer = (state = initialState, action: ArtistStateAction): ArtistsState => {
  switch (action.type) {
    case GET_ARTISTS_SUCCESS: {
      const artistData = action.payload.reduce((allArtist, artist: ArtistResponceData) => {
        const { artistId, artistName, primaryGenreName } = artist;

        return {
          ...allArtist,
          [artistId]: {
            artistId,
            artistName,
            primaryGenreName,
            albums: [],
          },
        };
      }, {});

      return {
        ...state,
        artistsData: artistData,
      };
    }

    default:
      return state;
  }
};

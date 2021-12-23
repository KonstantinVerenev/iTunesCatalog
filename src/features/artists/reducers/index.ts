import { ArtistStateAction, GET_ARTISTS_SUCCESS } from '../actions';
import { artistResponceDataType, artistStateDataType } from '../types';

export type ArtistsState = {
  artistsData: artistStateDataType;
};

const initialState: ArtistsState = {
  artistsData: {
    123: {
      artistId: 123,
      artistName: 'asd',
      primaryGenreName: 'primaryGenreName',
      albums: [],
    },
  },
};

export const aristsReducer = (state = initialState, action: ArtistStateAction): ArtistsState => {
  switch (action.type) {
    case GET_ARTISTS_SUCCESS: {
      const artistData = action.payload.reduce((allArtist, artist: artistResponceDataType) => {
        console.log(artist);
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

import { AlbumsStateAction, SET_ALBUMS_SUCCESS } from '../actions';
import { AlbumsStateData, AlbumsResponseData } from '../types';

export type AlbumsState = {
  albumsData: AlbumsStateData;
};

const initialState: AlbumsState = {
  albumsData: {},
};

export const albumsReducer = (state = initialState, action: AlbumsStateAction): AlbumsState => {
  switch (action.type) {
    case SET_ALBUMS_SUCCESS: {
      const albumsData = action.payload.reduce((allAlbums, album: AlbumsResponseData) => {
        const { collectionId, artistName, collectionName, artworkUrl100, collectionPrice } = album;

        return {
          ...allAlbums,
          [collectionId]: {
            collectionId,
            artistName,
            collectionName,
            artworkUrl100,
            collectionPrice,
            tracks: [],
          },
        };
      }, {});

      return {
        ...state,
        albumsData,
      };
    }

    default:
      return state;
  }
};

import { AlbumsStateAction, GET_ALBUM_TRACKS_BY_ID_SUCCESS, SET_ALBUMS_SUCCESS } from '../actions';
import { AlbumsStateData, AlbumsResponseData, TrackResponseData } from '../types';

export type AlbumsState = {
  albumsData: AlbumsStateData;
};

export const initialState: AlbumsState = {
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
            tracks: {},
          },
        };
      }, {});

      return {
        ...state,
        albumsData,
      };
    }

    case GET_ALBUM_TRACKS_BY_ID_SUCCESS: {
      const { albumId, tracks } = action.payload;
      const tracksData = tracks.reduce((allTracks, track: TrackResponseData) => {
        const {
          artistId,
          artistName,
          trackName,
          trackId,
          trackTimeMillis,
          artworkUrl100,
          trackNumber,
          releaseDate,
          country,
          primaryGenreName,
        } = track;

        return {
          ...allTracks,
          [trackId]: {
            artistId,
            trackId,
            artistName,
            trackName,
            trackTimeMillis,
            artworkUrl100,
            trackNumber,
            releaseDate,
            country,
            primaryGenreName,
          },
        };
      }, {});

      return {
        ...state,
        albumsData: {
          ...state.albumsData,
          [albumId]: {
            ...state.albumsData[albumId],
            tracks: tracksData,
          },
        },
      };
    }

    default:
      return state;
  }
};

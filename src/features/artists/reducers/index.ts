import {
  ArtistStateAction,
  GET_ALBUMS_BY_ID_SUCCESS,
  GET_ARTISTS_SUCCESS,
  GET_TRACKS_BY_ID_SUCCESS,
} from '../actions';
import {
  ArtistResponceData,
  AlbumsResponseData,
  ArtistStateData,
  TrackResponseData,
} from '../types';

export type ArtistsState = {
  artistsData: ArtistStateData;
};

const initialState: ArtistsState = {
  artistsData: {},
};

export const aristsReducer = (state = initialState, action: ArtistStateAction): ArtistsState => {
  switch (action.type) {
    case GET_ARTISTS_SUCCESS: {
      const artistsData = action.payload.reduce((allArtist, artist: ArtistResponceData) => {
        const { artistId, artistName, primaryGenreName } = artist;

        return {
          ...allArtist,
          [artistId]: {
            artistId,
            artistName,
            primaryGenreName,
            albums: {},
          },
        };
      }, {});

      return {
        ...state,
        artistsData: artistsData,
      };
    }
    case GET_ALBUMS_BY_ID_SUCCESS: {
      const artistId = action.payload.id;
      const albumsData = action.payload.albums.reduce((allAlbums, album: AlbumsResponseData) => {
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
        artistsData: {
          ...state.artistsData,
          [artistId]: { ...state.artistsData[artistId], albums: albumsData },
        },
      };
    }

    case GET_TRACKS_BY_ID_SUCCESS: {
      const artistId = action.payload.artistId;
      const albumId = action.payload.albumId;
      const tracksData = action.payload.tracks.reduce((allTracks, track: TrackResponseData) => {
        const {
          artistId,
          artistName,
          trackName,
          trackId,
          trackTimeMillis,
          artworkUrl100,
          trackNumber,
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
          },
        };
      }, {});

      return {
        ...state,
        artistsData: {
          ...state.artistsData,
          [artistId]: {
            ...state.artistsData[artistId],
            albums: {
              ...state.artistsData[artistId].albums,
              [albumId]: {
                ...state.artistsData[artistId].albums[albumId],
                tracks: tracksData,
              },
            },
          },
        },
      };
    }

    default:
      return state;
  }
};

import { RootReducer } from '../../../store/combineReducer';
import { AlbumsResponseData, TrackResponseData } from '../types';

export const selectAlbums = (state: RootReducer): AlbumsResponseData[] =>
  Object.values(state.albums.albumsData);

export const selectTracksById =
  (albumId: number) =>
  (state: RootReducer): TrackResponseData[] =>
    Object.values(state.albums.albumsData[albumId].tracks);

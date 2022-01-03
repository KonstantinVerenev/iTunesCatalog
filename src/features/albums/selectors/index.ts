import { RootReducer } from '../../../store/combineReducer';
import { AlbumsResponseData, TrackResponseData } from '../types';

export const selectAlbumsData = (state: RootReducer): AlbumsResponseData[] =>
  Object.values(state.albums.albumsData);

export const selectTracksDataById =
  (albumId: number) =>
  (state: RootReducer): TrackResponseData[] =>
    Object.values(state.albums.albumsData[albumId].tracks);
//Object.values(state.albums.albumsData[albumId].tracks);

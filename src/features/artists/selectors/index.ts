import { RootReducer } from '../../../store/combineReducer';
import { AlbumsResponseData } from '../../albums/types';
import { ArtistResponceData, TrackResponseData } from '../types';

export const selectArtists = (state: RootReducer): ArtistResponceData[] =>
  Object.values(state.artists.artistsData);

export const selectAlbumsById =
  (id: number) =>
  (state: RootReducer): AlbumsResponseData[] =>
    Object.values(state.artists.artistsData[id].albums);

export const selectTracksByIds =
  (artistId: number, albumId: number) =>
  (state: RootReducer): TrackResponseData[] =>
    Object.values(state.artists.artistsData[artistId].albums[albumId].tracks);

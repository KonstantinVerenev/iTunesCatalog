import { RootReducer } from '../../../store/combineReducer';
import { AlbumsResponseData } from '../../albums/types';
import { ArtistResponceData } from '../types';

export const selectArtistsData = (state: RootReducer): ArtistResponceData[] =>
  Object.values(state.artists.artistsData);

export const selectAlbumsDataById =
  (id: number) =>
  (state: RootReducer): AlbumsResponseData[] =>
    Object.values(state.artists.artistsData[id].albums);

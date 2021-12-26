import { RootReducer } from '../../../store/combineReducer';
import { AlbumStateData, ArtistStateData } from '../types';

export const selectArtistsData = (state: RootReducer): ArtistStateData => state.artists.artistsData;

export const selectAlbumsDataById =
  (id: number) =>
  (state: RootReducer): AlbumStateData =>
    state.artists.artistsData[id].albums;

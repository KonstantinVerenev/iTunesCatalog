import { RootReducer } from '../../../store/combineReducer';
import { AlbumsResponseData } from '../types';

export const selectAlbumsData = (state: RootReducer): AlbumsResponseData[] =>
  Object.values(state.albums.albumsData);

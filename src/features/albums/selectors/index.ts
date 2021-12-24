import { RootReducer } from '../../../store/combineReducer';
import { AlbumsStateData } from '../types';

export const selectAlbumsData = (state: RootReducer): AlbumsStateData => state.albums.albumsData;

import { rootReducer } from '../../../store/combineReducer';
import { albumsStateDataType } from '../types';

export const selectAlbumsData = (state: rootReducer): albumsStateDataType =>
  state.albums.albumsData;

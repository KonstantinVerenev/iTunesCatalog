import { rootReducer } from '../../../store/combineReducer';
import { albumsDataType } from '../types';

export const selectAlbumsData = (state: rootReducer): albumsDataType[] => state.albums.albumsData;

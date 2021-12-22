import { rootReducer } from '../../../store/combineReducer';
import { albumsDataType } from '../types';

export const selectAlbumsData = (state: rootReducer): albumsDataType[] => state.albums.albumsData;
export const selectAlbumsIsLoading = (state: rootReducer): boolean => state.albums.isLoading;
export const selectAlbumsError = (state: rootReducer): string | null => state.albums.error;

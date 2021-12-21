import { rootReducer } from '../../../store/combineReducer';
import { albumsDataType } from '../types';

export const selectAlbumsData = (state: rootReducer): albumsDataType[] => state.albums.albumsData;
export const selectIsLoading = (state: rootReducer): boolean => state.albums.isLoading;
export const selectError = (state: rootReducer): string | null => state.albums.error;

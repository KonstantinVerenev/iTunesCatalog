import { rootReducer } from '../../../store/combineReducer';
import { artistDataType } from '../types';

export const selectArtistsData = (state: rootReducer): artistDataType[] =>
  state.artists.artistsData;
export const selectIsLoading = (state: rootReducer): boolean => state.artists.isLoading;
export const selectError = (state: rootReducer): string | null => state.artists.error;

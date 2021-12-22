import { rootReducer } from '../../../store/combineReducer';
import { artistStateDataType } from '../types';

export const selectArtistsData = (state: rootReducer): artistStateDataType[] =>
  state.artists.artistsData;
export const selectArtistIsLoading = (state: rootReducer): boolean => state.artists.isLoading;
export const selectArtistError = (state: rootReducer): string | null => state.artists.error;

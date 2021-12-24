import { rootReducer } from '../../../store/combineReducer';
import { artistStateDataType } from '../types';

export const selectArtistsData = (state: rootReducer): artistStateDataType =>
  state.artists.artistsData;

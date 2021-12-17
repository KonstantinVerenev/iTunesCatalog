import { artistData, MainState } from './types';

export const selectArtistsData = (state: MainState): artistData[] => state.artistsData;

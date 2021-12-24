import { RootReducer } from '../../../store/combineReducer';
import { ArtistStateData } from '../types';

export const selectArtistsData = (state: RootReducer): ArtistStateData => state.artists.artistsData;

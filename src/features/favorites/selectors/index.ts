import { RootReducer } from '../../../store/combineReducer';

export const selectFavoritesAlbums = (state: RootReducer): number[] =>
  state.favorites.favoritesAlbums;

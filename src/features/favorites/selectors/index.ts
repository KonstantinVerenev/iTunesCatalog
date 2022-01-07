import { RootReducer } from '../../../store/combineReducer';

export const selectFavoriteAlbums = (state: RootReducer): number[] =>
  state.favorites.favoritesAlbums;

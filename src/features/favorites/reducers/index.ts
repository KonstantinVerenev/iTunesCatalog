import { FavoritesStateAction, SET_ALBUM_TO_FAVORITES } from '../actions';

export type FavoritesState = {
  favoritesAlbums: number[];
};

const initialState: FavoritesState = {
  favoritesAlbums: [],
};

export const favoritesReducer = (
  state = initialState,
  action: FavoritesStateAction
): FavoritesState => {
  switch (action.type) {
    case SET_ALBUM_TO_FAVORITES: {
      return {
        ...state,
        favoritesAlbums: [...state.favoritesAlbums, action.payload],
      };
    }

    default:
      return state;
  }
};

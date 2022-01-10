import { FavoritesStateAction, UPDATE_FAVORITE_ALBUMS } from '../actions';

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
    case UPDATE_FAVORITE_ALBUMS: {
      if (state.favoritesAlbums.includes(action.payload)) {
        return {
          ...state,
          favoritesAlbums: state.favoritesAlbums.filter((id) => id !== action.payload),
        };
      }

      return {
        ...state,
        favoritesAlbums: [...state.favoritesAlbums, action.payload],
      };
    }

    default:
      return state;
  }
};

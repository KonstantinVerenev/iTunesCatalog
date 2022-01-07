import { FavoritesStateAction, INVERSE_FAVORITE_STATUS } from '../actions';

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
    case INVERSE_FAVORITE_STATUS: {
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

export const SET_ALBUM_TO_FAVORITES = 'SET_ALBUM_TO_FAVORITES';

type setAlbumToFavorites = {
  type: typeof SET_ALBUM_TO_FAVORITES;
  payload: number;
};

export type FavoritesStateAction = setAlbumToFavorites;

export const setAlbumToFavorites = (payload: number): setAlbumToFavorites => ({
  type: SET_ALBUM_TO_FAVORITES,
  payload,
});

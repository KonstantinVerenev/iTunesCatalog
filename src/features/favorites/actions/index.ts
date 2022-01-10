export const UPDATE_FAVORITE_ALBUMS = 'UPDATE_FAVORITE_ALBUMS';

type inverseFavoriteStatus = {
  type: typeof UPDATE_FAVORITE_ALBUMS;
  payload: number;
};

export type FavoritesStateAction = inverseFavoriteStatus;

export const inverseFavoriteStatus = (payload: number): inverseFavoriteStatus => ({
  type: UPDATE_FAVORITE_ALBUMS,
  payload,
});

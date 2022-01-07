export const INVERSE_FAVORITE_STATUS = 'INVERSE_FAVORITE_STATUS';

type inverseFavoriteStatus = {
  type: typeof INVERSE_FAVORITE_STATUS;
  payload: number;
};

export type FavoritesStateAction = inverseFavoriteStatus;

export const inverseFavoriteStatus = (payload: number): inverseFavoriteStatus => ({
  type: INVERSE_FAVORITE_STATUS,
  payload,
});

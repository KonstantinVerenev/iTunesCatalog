export const UPDATE_FAVORITE_ALBUMS = 'UPDATE_FAVORITE_ALBUMS';

type inverseFavoriteStatus = {
  type: typeof UPDATE_FAVORITE_ALBUMS;
  collectionId: number;
};

export type FavoritesStateAction = inverseFavoriteStatus;

export const updateFavoriteAlbums = (collectionId: number): inverseFavoriteStatus => ({
  type: UPDATE_FAVORITE_ALBUMS,
  collectionId,
});

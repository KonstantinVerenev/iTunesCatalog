export const UPDATE_FAVORITE_ALBUMS = 'UPDATE_FAVORITE_ALBUMS';

type updateFavoriteAlbums = {
  type: typeof UPDATE_FAVORITE_ALBUMS;
  collectionId: number;
};

export type FavoritesStateAction = updateFavoriteAlbums;

export const updateFavoriteAlbums = (collectionId: number): updateFavoriteAlbums => ({
  type: UPDATE_FAVORITE_ALBUMS,
  collectionId,
});

import { updateFavoriteAlbums, UPDATE_FAVORITE_ALBUMS } from './index';
import { albumsMock } from '../../../mocks/index';

describe('favorite actions', () => {
  const collectionId = albumsMock[0].collectionId;

  it('should return updateFavoriteAlbums action', () => {
    expect(updateFavoriteAlbums(collectionId)).toEqual({
      type: UPDATE_FAVORITE_ALBUMS,
      collectionId,
    });
  });
});

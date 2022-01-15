import { updateFavoriteAlbums, UPDATE_FAVORITE_ALBUMS } from './index';
import { albumsMock } from '../../../mocks/index';

const collectionId = albumsMock[0].collectionId;

describe('favorite actions', () => {
  it('should return updateFavoriteAlbums action', () => {
    expect(updateFavoriteAlbums(collectionId)).toEqual({
      type: UPDATE_FAVORITE_ALBUMS,
      collectionId,
    });
  });
});

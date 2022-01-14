import { updateFavoriteAlbums, UPDATE_FAVORITE_ALBUMS } from '../actions/index';
import { collectionIdMock1 } from '../../../mocks/index';

describe('favorite actions', () => {
  it('should return updateFavoriteAlbums action', () => {
    expect(updateFavoriteAlbums(collectionIdMock1)).toEqual({
      type: UPDATE_FAVORITE_ALBUMS,
      collectionId: collectionIdMock1,
    });
  });
});

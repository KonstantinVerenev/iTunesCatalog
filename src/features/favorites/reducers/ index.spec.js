import { favoritesReducer, initialState } from './index';
import { updateFavoriteAlbums } from '../actions/index';
import { collectionIdMock1, collectionIdMock2 } from '../../../mocks/index';

const stateWithId = { favoritesAlbums: [collectionIdMock1] };

describe('favorites reducer', () => {
  it('should return the initial state', () => {
    expect(favoritesReducer(undefined, {})).toEqual(initialState);
    expect(favoritesReducer(initialState, {})).toEqual(initialState);
  });

  it('should add favorite album id to state', () => {
    expect(favoritesReducer(initialState, updateFavoriteAlbums(collectionIdMock1))).toEqual({
      favoritesAlbums: [collectionIdMock1],
    });

    expect(favoritesReducer(stateWithId, updateFavoriteAlbums(collectionIdMock2))).toEqual({
      favoritesAlbums: [collectionIdMock1, collectionIdMock2],
    });
  });

  it('should remove favorite album id', () => {
    expect(favoritesReducer(stateWithId, updateFavoriteAlbums(collectionIdMock1))).toEqual(
      initialState
    );
  });
});

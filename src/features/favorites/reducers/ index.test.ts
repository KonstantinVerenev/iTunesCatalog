import { favoritesReducer, initialState } from './index';
import { updateFavoriteAlbums } from '../actions/index';
import { albumsMock } from '../../../mocks/index';
import { FavoritesStateAction } from '../actions/index';

const collectionId = albumsMock[0].collectionId;
const collectionId2 = albumsMock[1].collectionId;
const nonEmptyState = { favoritesAlbums: [collectionId] };

describe('favorites reducer', () => {
  it('should return the initial state', () => {
    expect(favoritesReducer(undefined, {} as FavoritesStateAction)).toEqual(initialState);
    expect(favoritesReducer(initialState, {} as FavoritesStateAction)).toEqual(initialState);
  });

  it('should add favorite album id to state', () => {
    expect(favoritesReducer(initialState, updateFavoriteAlbums(collectionId))).toEqual({
      favoritesAlbums: [collectionId],
    });

    expect(favoritesReducer(nonEmptyState, updateFavoriteAlbums(collectionId2))).toEqual({
      favoritesAlbums: [collectionId, collectionId2],
    });
  });

  it('should remove favorite album id', () => {
    expect(favoritesReducer(nonEmptyState, updateFavoriteAlbums(collectionId))).toEqual(
      initialState
    );
  });
});

import { RootReducer } from '../../../store/combineReducer';
import { selectFavoriteAlbums } from './index';

describe('favorites selectors', () => {
  const favorites = { favoritesAlbums: [1, 2, 3] };

  it('should select favorites albums', () => {
    expect(selectFavoriteAlbums({ favorites } as RootReducer)).toEqual(favorites.favoritesAlbums);
  });
});

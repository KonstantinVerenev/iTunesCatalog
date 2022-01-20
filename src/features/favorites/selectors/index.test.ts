import { RootReducer } from '../../../store/combineReducer';
import { selectFavoriteAlbums } from './index';

const favorites = { favoritesAlbums: [1, 2, 3] };

describe('favorites selectors', () => {
  it('should select favorites albums', () => {
    expect(selectFavoriteAlbums({ favorites } as RootReducer)).toEqual(favorites.favoritesAlbums);
  });
});

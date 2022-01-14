import { selectFavoriteAlbums } from './index';

let favorites = { favoritesAlbums: [] };

describe('favorites selectors', () => {
  it('should return empty array', () => {
    expect(selectFavoriteAlbums({ favorites })).toEqual([]);
  });

  it('should return existing ids', () => {
    favorites = { favoritesAlbums: [1, 2, 3] };
    expect(selectFavoriteAlbums({ favorites })).toEqual([1, 2, 3]);
  });
});

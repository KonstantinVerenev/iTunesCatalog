import { selectAlbums, selectTracksById } from './index';
import { albumsMock, tracksMock } from '../../../mocks/index';

let albums = { albumsData: {} };

describe('albums selectors', () => {
  it('albums selector should return existing albums', () => {
    expect(selectAlbums({ albums })).toEqual([]);

    albums = { albumsData: albumsMock };
    expect(selectAlbums({ albums })).toEqual(albumsMock);
  });

  it('albums track selector should return existing tracks', () => {
    const albumId = albumsMock[0].collectionId;
    albums = {
      albumsData: {
        [albumId]: { ...albumsMock[0], tracks: tracksMock },
      },
    };

    expect(selectTracksById(albumId)({ albums })).toEqual(tracksMock);
  });
});

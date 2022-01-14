import { selectArtists, selectAlbumsById, selectTracksByIds } from './index';
import { artistsMock, albumsMock, tracksMock } from '../../../mocks/index';

let artists = { artistsData: {} };

describe('artist selectors', () => {
  it('artists selector should return existing albums', () => {
    expect(selectArtists({ artists })).toEqual([]);

    artists = { artistsData: artistsMock };
    expect(selectArtists({ artists })).toEqual(artistsMock);
  });

  it('artist albums selector should return existing albums', () => {
    const artistId = artistsMock[0].artistId;
    artists = {
      artistsData: {
        [artistId]: { ...artistsMock[0], albums: albumsMock },
      },
    };

    expect(selectAlbumsById(artistId)({ artists })).toEqual(albumsMock);
  });

  it('artist albums selector should return existing albums', () => {
    const artistId = artistsMock[0].artistId;
    const albumId = albumsMock[0].collectionId;
    artists = {
      artistsData: {
        [artistId]: {
          ...artistsMock[0],
          albums: {
            [albumId]: { ...albumsMock[0], tracks: tracksMock },
          },
        },
      },
    };

    expect(selectTracksByIds(artistId, albumId)({ artists })).toEqual(tracksMock);
  });
});

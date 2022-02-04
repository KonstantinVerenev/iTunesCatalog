import { selectArtists, selectAlbumsById, selectTracksByIds } from './index';
import { artistsMock, albumsMock, tracksMock } from '../../../mocks/index';
import { RootReducer } from '../../../store/combineReducer';

const artists = { artistsData: {} };
const artistId = artistsMock[0].artistId;

describe('artist selectors', () => {
  it('should select artists', () => {
    artists.artistsData = artistsMock;

    expect(selectArtists({ artists } as RootReducer)).toEqual(artistsMock);
  });

  it('should select albums', () => {
    artists.artistsData = { [artistId]: { ...artistsMock[0], albums: albumsMock } };

    expect(selectAlbumsById(artistId)({ artists } as RootReducer)).toEqual(albumsMock);
  });

  it('should select tracks', () => {
    const collectionId = albumsMock[0].collectionId;

    artists.artistsData = {
      [artistId]: {
        ...artistsMock[0],
        albums: {
          [collectionId]: { ...albumsMock[0], tracks: tracksMock },
        },
      },
    };

    expect(selectTracksByIds(artistId, collectionId)({ artists } as RootReducer)).toEqual(
      tracksMock
    );
  });
});

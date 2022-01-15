import { selectAlbums, selectTracksById } from './index';
import { albumsMock, tracksMock } from '../../../mocks/index';
import { RootReducer } from '../../../store/combineReducer';

const albums = { albumsData: {} };

describe('albums selectors', () => {
  it('should select albums', () => {
    albums.albumsData = albumsMock;
    expect(selectAlbums({ albums } as RootReducer)).toEqual(albumsMock);
  });

  it('should select tracks', () => {
    const collectionId = albumsMock[0].collectionId;
    albums.albumsData = { [collectionId]: { ...albumsMock[0], tracks: tracksMock } };
    expect(selectTracksById(collectionId)({ albums } as RootReducer)).toEqual(tracksMock);
  });
});

import { albumsReducer, initialState } from './index';
import { getAlbumsSuccess, getTracksByIdSuccess } from '../actions/index';
import { albumsMock, tracksMock } from '../../../mocks/index';
import { AlbumsStateAction } from '../actions/index';

const collectionId = albumsMock[0].collectionId;

describe('albums reducer', () => {
  it('should return the initial state', () => {
    expect(albumsReducer(undefined, {} as AlbumsStateAction)).toEqual(initialState);
    expect(albumsReducer(initialState, {} as AlbumsStateAction)).toEqual(initialState);
  });

  it('should set albums to state', () => {
    const collectionId2 = albumsMock[1].collectionId;

    const expectedState = {
      albumsData: {
        [collectionId]: { ...albumsMock[0], tracks: {} },
        [collectionId2]: { ...albumsMock[1], tracks: {} },
      },
    };

    expect(albumsReducer(initialState, getAlbumsSuccess(albumsMock))).toEqual(expectedState);
  });

  it('should set album tracks by id', () => {
    const trackId = tracksMock[0].trackId;
    const trackId2 = tracksMock[1].trackId;

    const stateWithAlbums = {
      albumsData: {
        [collectionId]: { ...albumsMock[0], tracks: {} },
      },
    };

    const expectedState = {
      albumsData: {
        [collectionId]: {
          ...albumsMock[0],
          tracks: {
            [trackId]: tracksMock[0],
            [trackId2]: tracksMock[1],
          },
        },
      },
    };

    expect(albumsReducer(stateWithAlbums, getTracksByIdSuccess(tracksMock, collectionId))).toEqual(
      expectedState
    );
  });
});

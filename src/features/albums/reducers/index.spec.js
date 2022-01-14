import { albumsReducer, initialState } from './index';
import { getAlbumsSuccess, getTracksByIdSuccess } from '../actions/index';
import {
  collectionIdMock1,
  collectionIdMock2,
  trackIdMock1,
  trackIdMock2,
  albumsMock,
  tracksMock,
} from '../../../mocks/index';

const stateWithAlbums = {
  albumsData: {
    [albumsMock[0].collectionId]: albumsMock[0],
  },
};

describe('albums reducer', () => {
  it('should return the initial state', () => {
    expect(albumsReducer(undefined, {})).toEqual(initialState);
    expect(albumsReducer(initialState, {})).toEqual(initialState);
  });

  it('should set albums to state', () => {
    const expectedState = {
      albumsData: {
        [collectionIdMock1]: { ...albumsMock[0], tracks: {} },
        [collectionIdMock2]: { ...albumsMock[1], tracks: {} },
      },
    };

    expect(albumsReducer(undefined, getAlbumsSuccess(albumsMock))).toEqual(expectedState);
  });

  it('should set album tracks by id', () => {
    const expectedState = {
      albumsData: {
        [collectionIdMock1]: {
          ...albumsMock[0],
          tracks: {
            [trackIdMock1]: tracksMock[0],
            [trackIdMock2]: tracksMock[1],
          },
        },
      },
    };

    expect(
      albumsReducer(stateWithAlbums, getTracksByIdSuccess(tracksMock, collectionIdMock1))
    ).toEqual(expectedState);
  });
});

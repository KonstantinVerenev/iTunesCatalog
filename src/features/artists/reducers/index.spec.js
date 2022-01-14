import { aristsReducer, initialState } from './index';
import { getArtistSuccess, getAlbumsByIdSuccess, getTracksByIdSuccess } from '../actions/index';
import { artistsMock, albumsMock, tracksMock } from '../../../mocks/index';

describe('artists reducer', () => {
  it('should return the initial state', () => {
    expect(aristsReducer(undefined, {})).toEqual(initialState);
    expect(aristsReducer(initialState, {})).toEqual(initialState);
  });

  it('should set artists to state', () => {
    const expectedState = {
      artistsData: {
        [artistsMock[0].artistId]: { ...artistsMock[0], albums: {} },
        [artistsMock[1].artistId]: { ...artistsMock[1], albums: {} },
      },
    };

    expect(aristsReducer(undefined, getArtistSuccess(artistsMock))).toEqual(expectedState);
  });

  it('should set albums by id', () => {
    const artistId = artistsMock[0].artistId;

    const stateBefore = {
      artistsData: { [artistId]: { ...artistsMock[0], albums: {} } },
    };

    const expectedState = {
      ...stateBefore,
      artistsData: {
        ...stateBefore.artistsData,
        [artistId]: {
          ...stateBefore.artistsData[artistId],
          albums: {
            [albumsMock[0].collectionId]: { ...albumsMock[0], tracks: {} },
            [albumsMock[1].collectionId]: { ...albumsMock[1], tracks: {} },
          },
        },
      },
    };

    expect(aristsReducer(stateBefore, getAlbumsByIdSuccess(albumsMock, artistId))).toEqual(
      expectedState
    );
  });

  it('should set tracks by ids', () => {
    const artistId = artistsMock[0].artistId;
    const collectionId = albumsMock[0].collectionId;

    const stateBefore = {
      artistsData: {
        [artistId]: {
          ...artistsMock[0],
          albums: {
            [collectionId]: { ...albumsMock[0], tracks: {} },
          },
        },
      },
    };

    const expectedState = {
      ...stateBefore,
      artistsData: {
        ...stateBefore.artistsData,
        [artistId]: {
          ...stateBefore.artistsData[artistId],
          albums: {
            ...stateBefore.artistsData[artistId].albums,
            [collectionId]: {
              ...stateBefore.artistsData[artistId].albums[collectionId],
              tracks: {
                [tracksMock[0].trackId]: tracksMock[0],
                [tracksMock[1].trackId]: tracksMock[1],
              },
            },
          },
        },
      },
    };

    expect(
      aristsReducer(stateBefore, getTracksByIdSuccess(tracksMock, artistId, collectionId))
    ).toEqual(expectedState);
  });
});

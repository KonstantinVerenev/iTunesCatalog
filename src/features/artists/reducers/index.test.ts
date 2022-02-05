import { aristsReducer, initialState } from './index';
import { getArtistSuccess, getAlbumsByIdSuccess, getTracksByIdSuccess } from '../actions/index';
import { artistsMock, albumsMock, tracksMock } from '../../../mocks/index';
import { ArtistStateAction } from '../actions/index';

const artistId = artistsMock[0].artistId;
const collectionId = albumsMock[0].collectionId;

describe('artists reducer', () => {
  it('should return the initial state', () => {
    expect(aristsReducer(undefined, {} as ArtistStateAction)).toEqual(initialState);
    expect(aristsReducer(initialState, {} as ArtistStateAction)).toEqual(initialState);
  });

  it('should set artists to state', () => {
    const artistId2 = artistsMock[1].artistId;

    const expectedState = {
      artistsData: {
        [artistId]: { ...artistsMock[0], albums: {} },
        [artistId2]: { ...artistsMock[1], albums: {} },
      },
    };

    expect(aristsReducer(undefined, getArtistSuccess(artistsMock))).toEqual(expectedState);
  });

  it('should set albums by id', () => {
    const collectionId2 = albumsMock[1].collectionId;

    const notEmptyState = {
      artistsData: { [artistId]: { ...artistsMock[0], albums: {} } },
    };

    const expectedState = {
      ...notEmptyState,
      artistsData: {
        ...notEmptyState.artistsData,
        [artistId]: {
          ...notEmptyState.artistsData[artistId],
          albums: {
            [collectionId]: { ...albumsMock[0], tracks: {} },
            [collectionId2]: { ...albumsMock[1], tracks: {} },
          },
        },
      },
    };

    expect(aristsReducer(notEmptyState, getAlbumsByIdSuccess(albumsMock, artistId))).toEqual(
      expectedState
    );
  });

  it('should set tracks by ids', () => {
    const trackId = tracksMock[0].trackId;
    const trackId2 = tracksMock[1].trackId;

    const notEmptyState = {
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
      ...notEmptyState,
      artistsData: {
        ...notEmptyState.artistsData,
        [artistId]: {
          ...notEmptyState.artistsData[artistId],
          albums: {
            ...notEmptyState.artistsData[artistId].albums,
            [collectionId]: {
              ...notEmptyState.artistsData[artistId].albums[collectionId],
              tracks: {
                [trackId]: tracksMock[0],
                [trackId2]: tracksMock[1],
              },
            },
          },
        },
      },
    };

    expect(
      aristsReducer(notEmptyState, getTracksByIdSuccess(tracksMock, artistId, collectionId))
    ).toEqual(expectedState);
  });
});

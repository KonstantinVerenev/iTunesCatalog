import {
  getArtistSuccess,
  getAlbumsByIdSuccess,
  getTracksByIdSuccess,
  GET_ARTISTS_SUCCESS,
  GET_ALBUMS_BY_ID_SUCCESS,
  GET_TRACKS_BY_ID_SUCCESS,
} from '../actions/index';
import {
  artistIdMock1,
  collectionIdMock1,
  artistsMock,
  albumsMock,
  tracksMock,
} from '../../../mocks/index';

describe('artists actions', () => {
  it('should return getArtist action', () => {
    const expectedAction = {
      type: GET_ARTISTS_SUCCESS,
      payload: artistsMock,
    };

    expect(getArtistSuccess(artistsMock)).toEqual(expectedAction);
  });

  it('should return getAlbumsById action', () => {
    const expectedAction = {
      type: GET_ALBUMS_BY_ID_SUCCESS,
      payload: {
        id: artistIdMock1,
        albums: albumsMock,
      },
    };

    expect(getAlbumsByIdSuccess(albumsMock, artistIdMock1)).toEqual(expectedAction);
  });

  it('should return getTracksById action', () => {
    const expectedAction = {
      type: GET_TRACKS_BY_ID_SUCCESS,
      payload: {
        artistId: artistIdMock1,
        albumId: collectionIdMock1,
        tracks: tracksMock,
      },
    };

    expect(getTracksByIdSuccess(tracksMock, artistIdMock1, collectionIdMock1)).toEqual(
      expectedAction
    );
  });
});

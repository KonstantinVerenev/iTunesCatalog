import {
  getAlbumsSuccess,
  getTracksByIdSuccess,
  SET_ALBUMS_SUCCESS,
  GET_ALBUM_TRACKS_BY_ID_SUCCESS,
} from '../actions/index';
import { albumsMock, tracksMock, collectionIdMock1 } from '../../../mocks/index';

describe('albums actions', () => {
  it('should return getAlbumsSuccess action', () => {
    const expectedAction = {
      type: SET_ALBUMS_SUCCESS,
      payload: albumsMock,
    };

    expect(getAlbumsSuccess(albumsMock)).toEqual(expectedAction);
  });

  it('should return getAlbumTracksById action', () => {
    const expectedAction = {
      type: GET_ALBUM_TRACKS_BY_ID_SUCCESS,
      payload: {
        tracks: tracksMock,
        albumId: collectionIdMock1,
      },
    };

    expect(getTracksByIdSuccess(tracksMock, collectionIdMock1)).toEqual(expectedAction);
  });
});

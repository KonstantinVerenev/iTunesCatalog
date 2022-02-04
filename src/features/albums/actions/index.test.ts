import {
  getAlbumsSuccess,
  getTracksByIdSuccess,
  SET_ALBUMS_SUCCESS,
  GET_ALBUM_TRACKS_BY_ID_SUCCESS,
} from './index';
import { albumsMock, tracksMock } from '../../../mocks/index';

describe('albums actions', () => {
  it('should return getAlbumsSuccess action', () => {
    const expectedAction = {
      type: SET_ALBUMS_SUCCESS,
      payload: albumsMock,
    };

    expect(getAlbumsSuccess(albumsMock)).toEqual(expectedAction);
  });

  it('should return getAlbumTracksById action', () => {
    const collectionId = albumsMock[0].collectionId;

    const expectedAction = {
      type: GET_ALBUM_TRACKS_BY_ID_SUCCESS,
      payload: {
        tracks: tracksMock,
        albumId: collectionId,
      },
    };

    expect(getTracksByIdSuccess(tracksMock, collectionId)).toEqual(expectedAction);
  });
});

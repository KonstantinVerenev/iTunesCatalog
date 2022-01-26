import {
  getArtistSuccess,
  getAlbumsByIdSuccess,
  getTracksByIdSuccess,
  GET_ARTISTS_SUCCESS,
  GET_ALBUMS_BY_ID_SUCCESS,
  GET_TRACKS_BY_ID_SUCCESS,
} from './index';
import { artistsMock, albumsMock, tracksMock } from '../../../mocks/index';

const artistId = artistsMock[0].artistId;

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
        id: artistId,
        albums: albumsMock,
      },
    };

    expect(getAlbumsByIdSuccess(albumsMock, artistId)).toEqual(expectedAction);
  });

  it('should return getTracksById action', () => {
    const collectionId = albumsMock[0].collectionId;

    const expectedAction = {
      type: GET_TRACKS_BY_ID_SUCCESS,
      payload: {
        artistId: artistId,
        albumId: collectionId,
        tracks: tracksMock,
      },
    };

    expect(getTracksByIdSuccess(tracksMock, artistId, collectionId)).toEqual(expectedAction);
  });
});

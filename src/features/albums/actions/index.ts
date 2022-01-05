import { AlbumsResponseData, TrackResponseData } from '../types';

export const SET_ALBUMS_SUCCESS = 'SET_ALBUMS_SUCCESS';
export const GET_ALBUM_TRACKS_BY_ID_SUCCESS = 'GET_ALBUM_TRACKS_BY_ID_SUCCESS';

type getAlbumsSuccess = {
  type: typeof SET_ALBUMS_SUCCESS;
  payload: AlbumsResponseData[];
};

type getAlbumTracksByIdSuccess = {
  type: typeof GET_ALBUM_TRACKS_BY_ID_SUCCESS;
  payload: { tracks: TrackResponseData[]; albumId: number };
};

export type AlbumsStateAction = getAlbumsSuccess | getAlbumTracksByIdSuccess;

export const getAlbumsSuccess = (payload: AlbumsResponseData[]): getAlbumsSuccess => ({
  type: SET_ALBUMS_SUCCESS,
  payload,
});

export const getTracksByIdSuccess = (
  tracks: TrackResponseData[],
  albumId: number
): getAlbumTracksByIdSuccess => {
  return { type: GET_ALBUM_TRACKS_BY_ID_SUCCESS, payload: { tracks, albumId } };
};

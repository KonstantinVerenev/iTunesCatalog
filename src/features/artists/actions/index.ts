import { AlbumsResponseData, ArtistResponceData } from '../types';

export const GET_ARTISTS_SUCCESS = 'GET_ARTISTS_SUCCESS';
export const GET_ALBUMS_BY_ID_SUCCESS = 'GET_ALBUMS_BY_ID_SUCCESS';

type getArtistSuccess = {
  type: typeof GET_ARTISTS_SUCCESS;
  payload: ArtistResponceData[];
};

type getAlbumsByIdSuccess = {
  type: typeof GET_ALBUMS_BY_ID_SUCCESS;
  payload: { albums: AlbumsResponseData[]; id: number };
};

export type ArtistStateAction = getArtistSuccess | getAlbumsByIdSuccess;

export const getArtistSuccess = (payload: ArtistResponceData[]): getArtistSuccess => {
  return { type: GET_ARTISTS_SUCCESS, payload };
};

export const getAlbumsByIdSuccess = (
  albums: AlbumsResponseData[],
  id: number
): getAlbumsByIdSuccess => {
  return { type: GET_ALBUMS_BY_ID_SUCCESS, payload: { albums, id } };
};

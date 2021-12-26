import { AlbumsResponseData, ArtistResponceData } from '../types';

export const GET_ARTISTS_SUCCESS = 'GET_ARTISTS_SUCCESS';
export const GET_ALBUMS_BY_ID_SUCCESS = 'GET_ALBUMS_BY_ID_SUCCESS';

type getArtistSuccessAction = {
  type: typeof GET_ARTISTS_SUCCESS;
  payload: ArtistResponceData[];
};

type getAlbumsByIdSuccessAction = {
  type: typeof GET_ALBUMS_BY_ID_SUCCESS;
  payload: { albums: AlbumsResponseData[]; id: number };
};

export type ArtistStateAction = getArtistSuccessAction | getAlbumsByIdSuccessAction;

export const getArtistSuccess = (payload: ArtistResponceData[]): getArtistSuccessAction => {
  return { type: GET_ARTISTS_SUCCESS, payload };
};

export const getAlbumsByIdSuccess = (
  albums: AlbumsResponseData[],
  id: number
): getAlbumsByIdSuccessAction => {
  return { type: GET_ALBUMS_BY_ID_SUCCESS, payload: { albums, id } };
};

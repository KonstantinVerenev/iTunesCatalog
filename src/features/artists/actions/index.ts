import { ArtistResponceData } from '../types';

export const GET_ARTISTS_SUCCESS = 'GET_ARTISTS_SUCCESS';

type getArtistSuccessAction = {
  type: typeof GET_ARTISTS_SUCCESS;
  payload: ArtistResponceData[];
};

export type ArtistStateAction = getArtistSuccessAction;

export const getArtistSuccess = (payload: ArtistResponceData[]): getArtistSuccessAction => {
  return { type: GET_ARTISTS_SUCCESS, payload };
};

import { artistResponceDataType } from '../types';

export const GET_ARTISTS_SUCCESS = 'GET_ARTISTS_SUCCESS';

type getArtistSuccessAction = {
  type: typeof GET_ARTISTS_SUCCESS;
  payload: artistResponceDataType[];
};

export type ArtistStateAction = getArtistSuccessAction;

export const getArtistSuccess = (payload: artistResponceDataType[]): getArtistSuccessAction => {
  return { type: GET_ARTISTS_SUCCESS, payload };
};

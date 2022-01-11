export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';
export const RESET_ERROR = 'RESET_ERROR';

type getData = {
  type: typeof GET_DATA;
};

type getDataSuccess = {
  type: typeof GET_DATA_SUCCESS;
};

type getDataError = {
  type: typeof GET_DATA_ERROR;
  payload: string;
};

type resetError = {
  type: typeof RESET_ERROR;
};

export type mainStateAction = getData | getDataSuccess | getDataError | resetError;

export const getData = (): getData => {
  return { type: GET_DATA };
};

export const getDataSuccess = (): getDataSuccess => {
  return { type: GET_DATA_SUCCESS };
};

export const getDataError = (payload: string): getDataError => {
  return { type: GET_DATA_ERROR, payload };
};

export const resetError = (): resetError => {
  return { type: RESET_ERROR };
};

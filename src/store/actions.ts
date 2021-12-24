export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_ERROR = 'FETCH_ALBUMS_DATA_ERROR';
export const RESET_ERROR = 'RESET_ERROR';

type getDataAction = {
  type: typeof GET_DATA;
};

type getDataSuccessAction = {
  type: typeof GET_DATA_SUCCESS;
};

type getDataErrorAction = {
  type: typeof GET_DATA_ERROR;
  payload: string;
};

type resetErrorAction = {
  type: typeof RESET_ERROR;
};

export type mainStateAction =
  | getDataAction
  | getDataSuccessAction
  | getDataErrorAction
  | resetErrorAction;

export const getData = (): getDataAction => {
  return { type: GET_DATA };
};

export const getDataSuccess = (): getDataSuccessAction => {
  return { type: GET_DATA_SUCCESS };
};

export const getDataError = (payload: string): getDataErrorAction => {
  return { type: GET_DATA_ERROR, payload };
};

export const resetError = (): resetErrorAction => {
  return { type: RESET_ERROR };
};

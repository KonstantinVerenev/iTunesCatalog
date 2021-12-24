import {
  GET_DATA,
  GET_DATA_ERROR,
  GET_DATA_SUCCESS,
  MainStateAction,
  RESET_ERROR,
} from './actions';

export type MainState = {
  isLoading: boolean;
  error: string | null;
};

const initialState: MainState = {
  isLoading: false,
  error: null,
};

export const mainReducer = (state = initialState, action: MainStateAction): MainState => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case GET_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case RESET_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

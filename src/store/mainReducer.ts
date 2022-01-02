import {
  GET_DATA,
  GET_DATA_ERROR,
  GET_DATA_SUCCESS,
  mainStateAction,
  RESET_ERROR,
} from './actions';

export type MainState = {
  isLoading: boolean;
  errorMessage?: string;
};

const initialState: MainState = {
  isLoading: false,
};

export const mainReducer = (state = initialState, action: mainStateAction): MainState => {
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
        errorMessage: action.payload,
      };
    case RESET_ERROR:
      return {
        ...state,
        errorMessage: undefined,
      };
    default:
      return state;
  }
};

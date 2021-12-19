//import { dummyDataArtist } from '../dummyData/dummyData';
import { GET_ARTISTS, StateAction } from './actions';
import { MainState } from './types';

const initialState: MainState = {
  artistsData: [],
};

export const reducer = (state = initialState, action: StateAction): MainState => {
  switch (action.type) {
    case GET_ARTISTS:
      return {
        ...state,
        artistsData: action.payload,
      };
    default:
      return state;
  }
};

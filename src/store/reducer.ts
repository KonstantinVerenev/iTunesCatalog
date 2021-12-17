import { dummyDataArtist } from '../dummyData/dummyData';
import { StateAction } from './actions';
import { MainState } from './types';

const initialState: MainState = {
  artistsData: dummyDataArtist.results,
  //albumsData: [],
  //tracksData: [],
};

export const reducer = (state = initialState, action: StateAction): MainState => {
  switch (action.type) {
    default:
      return state;
  }
};

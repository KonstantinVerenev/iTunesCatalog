import { AlbumsStateAction, SET_ALBUMS_SUCCESS } from '../actions';
import { albumsDataType } from '../types';

export type AlbumsState = {
  albumsData: albumsDataType[];
};

const initialState: AlbumsState = {
  albumsData: [],
};

export const albumsReducer = (state = initialState, action: AlbumsStateAction): AlbumsState => {
  switch (action.type) {
    case SET_ALBUMS_SUCCESS:
      return {
        ...state,
        albumsData: action.payload,
      };

    default:
      return state;
  }
};

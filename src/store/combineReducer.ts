import { combineReducers } from 'redux';
import { albumsReducer, AlbumsState } from '../features/albums/reducers';
import { aristsReducer, ArtistsState } from '../features/artists/reducers';

export type rootReducer = {
  albums: AlbumsState;
  artists: ArtistsState;
};

export default combineReducers({ artists: aristsReducer, albums: albumsReducer });

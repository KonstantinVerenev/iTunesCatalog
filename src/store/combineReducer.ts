import { combineReducers } from 'redux';
import { albumsReducer, AlbumsState } from '../features/albums/reducers';
import { aristsReducer, ArtistsState } from '../features/artists/reducers';
import { mainReducer, MainState } from './mainReducer';

export type rootReducer = {
  main: MainState;
  albums: AlbumsState;
  artists: ArtistsState;
};

export default combineReducers({
  main: mainReducer,
  artists: aristsReducer,
  albums: albumsReducer,
});

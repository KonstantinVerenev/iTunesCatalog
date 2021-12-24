import { combineReducers } from 'redux';

import { albumsReducer, AlbumsState } from '../features/albums/reducers';
import { aristsReducer, ArtistsState } from '../features/artists/reducers';
import { mainReducer, MainState } from './mainReducer';

export type RootReducer = {
  main: MainState;
  albums: AlbumsState;
  artists: ArtistsState;
};

const rootReducer = combineReducers({
  main: mainReducer,
  artists: aristsReducer,
  albums: albumsReducer,
});

export default rootReducer;

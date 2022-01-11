import { combineReducers } from 'redux';

import { albumsReducer, AlbumsState } from '../features/albums/reducers';
import { aristsReducer, ArtistsState } from '../features/artists/reducers';
import { favoritesReducer, FavoritesState } from '../features/favorites/reducers';
import { mainReducer, MainState } from './mainReducer';

export type RootReducer = {
  main: MainState;
  albums: AlbumsState;
  artists: ArtistsState;
  favorites: FavoritesState;
};

const rootReducer = combineReducers({
  main: mainReducer,
  artists: aristsReducer,
  albums: albumsReducer,
  favorites: favoritesReducer,
});

export default rootReducer;

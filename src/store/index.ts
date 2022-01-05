import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';

import Reactotron from '../../reactotronConfig';
import { AlbumsStateAction } from '../features/albums/actions';
import { ArtistStateAction } from '../features/artists/actions';
import { mainStateAction } from './actions';
import rootReducer, { RootReducer } from './combineReducer';

let store: Store<RootReducer, mainStateAction | ArtistStateAction | AlbumsStateAction>;

if (!__DEV__) {
  store = createStore(rootReducer, applyMiddleware(thunk));
} else {
  store = createStore(rootReducer, compose(applyMiddleware(thunk), Reactotron.createEnhancer!()));
}

export { store };

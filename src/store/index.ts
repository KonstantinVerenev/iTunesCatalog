import { createStore, applyMiddleware, compose, Store as IStore } from 'redux';
import thunk from 'redux-thunk';

import Reactotron from '../../reactotronConfig';
import { AlbumsStateAction } from '../features/albums/actions';
import { ArtistStateAction } from '../features/artists/actions';
import { mainStateAction } from './actions';
import rootReducer, { RootReducer } from './combineReducer';

let Store: IStore<RootReducer, mainStateAction | ArtistStateAction | AlbumsStateAction>;

if (!__DEV__) {
  Store = createStore(rootReducer, applyMiddleware(thunk));
} else {
  Store = createStore(rootReducer, compose(applyMiddleware(thunk), Reactotron.createEnhancer!()));
}

export { Store };

// another variant

//let enhancer: StoreEnhancer;

//if (!__DEV__) {
//  enhancer = applyMiddleware(thunk);
//} else {
//  enhancer = compose(applyMiddleware(thunk), Reactotron.createEnhancer!());
//}

//export const Store = createStore(rootReducer, enhancer);

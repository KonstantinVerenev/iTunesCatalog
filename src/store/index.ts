import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '../../reactotronConfig';

import rootReducer from './combineReducer';

export const Store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), Reactotron.createEnhancer!())
);

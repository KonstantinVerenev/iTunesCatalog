import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from './reducer';

export const Store = createStore(reducer, applyMiddleware(thunk));

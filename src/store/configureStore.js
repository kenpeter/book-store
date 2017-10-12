'use strict';

// store, middle ware
import {createStore, applyMiddleware} from 'redux';
// root
import rootReducer from '../reducers/rootReducer';
// async
import thunk from 'redux-thunk';

// exort func
export default function configureStore() {
  // create store
  return createStore(
    // all reducers
    rootReducer,
    // tools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // async
    applyMiddleware(thunk)
  );
}

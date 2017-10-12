import {combineReducers} from 'redux';
import bookReducer from './bookReducer';

// Combine with one reducer
const rootReducer = combineReducers({
  bookReducer
});

// Return default root reducer
export default rootReducer;

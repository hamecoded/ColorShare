import { combineReducers } from 'redux';

// reducers
import user from './userReducer';
import color from './colorListReducer';

const rootReducer = combineReducers({
  user,
  color
});

export default rootReducer;
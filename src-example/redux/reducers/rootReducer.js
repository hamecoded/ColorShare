import { combineReducers } from 'redux';

// reducers
import user from './userReducer';
import counter from './counterReducer';

const rootReducer = combineReducers({
  user,
  counter
});

export default rootReducer;
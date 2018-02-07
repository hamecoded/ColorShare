import { createStore } from 'redux';

// reducers
import rootReducer from './reducers/rootReducer';

const initialState = {};
const store = createStore(rootReducer, initialState);

export default store;
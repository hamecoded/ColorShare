import { createStore } from 'redux';

// reducers
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, {});

export default store;
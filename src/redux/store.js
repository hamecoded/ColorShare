import { createStore, compose, applyMiddleware } from 'redux';

// reducers
import rootReducer from './reducers/rootReducer';

// middlewares
import logMiddleware from './middlewares/logMiddleware';
// import apiMiddleware from './middlewares/apiMiddleware';
// import firebaseMiddleware from './middlewares/firebaseMiddleware';
// import googleAnalyticsMiddleware from './middlewares/googleAnalyticsMiddleware';

const middlewares = [
  logMiddleware
];

const storeEnhancers = compose(
  applyMiddleware(...middlewares)
);

const initialState = {};
const store = createStore(rootReducer, initialState, storeEnhancers);

export default store;
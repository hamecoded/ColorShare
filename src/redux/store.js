import { createStore } from 'redux';

// reducers
import colorListReducer from './reducers/colorListReducer';

const initialState = {
  colors: [
    {id: 1, value: "#676767"},
    {id: 2, value: "#fff"}
  ]
};
const store = createStore(colorListReducer, initialState);

export default store;
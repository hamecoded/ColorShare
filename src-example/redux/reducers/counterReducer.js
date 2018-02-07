import * as actionTypes from '../actionTypes';

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return state + 1;
    case actionTypes.SUB:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
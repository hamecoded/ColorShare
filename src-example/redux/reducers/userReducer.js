// import * as actionTypes from '../actionTypes';

const initialState = {
  id: '456789',
  email: 'shay@500tech.com',
  name: 'shay'
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
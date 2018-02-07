import * as actionTypes from '../actionTypes';

export const add = (value) => ({
  type: actionTypes.COLOR_ADD,
  payload: {
    value
  }
});

export const remove = (id) => ({
  type: actionTypes.COLOR_REMOVE,
  payload: {
    id
  }
});
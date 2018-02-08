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

export const fetchColors = () => ({
  type: actionTypes.API,
  payload: {
    url: 'colors',
    headers: {
      'content-type': 'application/json'
    },
    success: actionTypes.FETCH_COLORS.SUCCESS,
    failure: actionTypes.FETCH_COLORS.FAILURE
  }
});

// export const deleteColors = (id) => ({
//   type: actionTypes.API,
//   payload: {
//     method: 'DELETE',
//     url: colors/${id}`,
//     headers: {
//       'content-type': 'application/json',
//       'content-length': 0
//     },
//     success: actionTypes.DELETE_COLOR_SUCCESS,
//     failure: actionTypes.COLORS_FETCH_ERROR
//   }
// });
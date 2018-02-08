import { API } from '../actionTypes';

const BASE_URL = 'http://private-2cce4-embeddedecommerceapi.apiary-mock.com/';
const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== API) {
    return next(action);
  }

  const { url, success, headers } = action.payload;

  const options = {
    method: 'GET',
    headers: new Headers(headers)
  };

  return fetch(BASE_URL + url, options)
    .then(response => {
      return response.json();
    })
    .then(payload => dispatch({ type: success, payload }))
    .catch(error => console.log(`Network error:`, error));
};


export default apiMiddleware;
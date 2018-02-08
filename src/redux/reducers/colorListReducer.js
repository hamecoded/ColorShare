import * as actionTypes from '../actionTypes';

const initialState = {
  colors: [
    // {id: 1, value: "#676767"},
    // {id: 2, value: "#fff"}
  ]
};

const genUuid = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

const colorListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COLORS.SUCCESS:
      return {
        colors: action.payload
      }
    case actionTypes.COLOR_ADD:
      return {
        colors: state.colors.concat([{id: genUuid(), value: action.payload.value}])
      };
    case actionTypes.COLOR_REMOVE:
      return {
        colors: state.colors.filter((color) => color.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default colorListReducer;
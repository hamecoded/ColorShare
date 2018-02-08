const asynActionType = actionType => ({
  PENDING: `${actionType}_PENDING`,
  SUCCESS: `${actionType}_SUCCESS`,
  FAILURE: `${actionType}_FAILURE`,
  BASE: actionType
});

export const API = 'API';

export const COLOR_ADD = 'COLOR_ADD';
export const COLOR_REMOVE = 'COLOR_REMOVE';

export const FETCH_COLORS = asynActionType('FETCH_COLORS');


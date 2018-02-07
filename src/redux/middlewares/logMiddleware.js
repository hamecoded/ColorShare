const logMiddleware = store => next => action => {
  //implementation of middleware
  console.log(action);
  next(action);
};

export default logMiddleware;
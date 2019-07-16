const confirmation = store => next => action => {
  const shouldConfirm = action.meta && action.meta.shouldConfirm;

  if (!shouldConfirm) return next(action);

  const shouldProceed = prompt('Are you sure?').toLowerCase()

  if (shouldProceed === 'yes') next(action);
  next(action)

};

export default confirmation;
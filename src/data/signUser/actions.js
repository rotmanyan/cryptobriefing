export const actionTypes = {
  SIGN_UP_REQUEST: 'registration/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'registration/SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: 'registration/SIGN_UP_ERROR',
  SIGN_UP_DEFAULT: 'registration/SIGN_UP_DEFAULT',

  SIGN_IN_REQUEST: 'session/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'session/SIGN_IN_SUCCESS',
  SIGN_IN_ERROR: 'session/SIGN_IN_ERROR',
  SIGN_IN_DEFAULT: 'session/SIGN_IN_DEFAULT',

  SIGN_OUT_REQUEST: 'session/SIGN_OUT_REQUEST',
  SIGN_OUT_SUCCESS: 'session/SIGN_OUT_SUCCESS',
  SIGN_OUT_ERROR: 'session/SIGN_OUT_ERROR',

  GET_CURRENT: 'session/GET_CURRENT',
};

export const signUpRequest = () => ({
  type: actionTypes.SIGN_UP_REQUEST,
});

export const signUpDefault = () => ({
  type: actionTypes.SIGN_UP_DEFAULT,
});

export const signUpSuccess = data => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload: data,
});

export const signUpError = error => ({
  type: actionTypes.SIGN_UP_ERROR,
  payload: {
    error,
  },
});

export const signInRequest = () => ({
  type: actionTypes.SIGN_IN_REQUEST,
});

export const signInDefault = () => ({
  type: actionTypes.SIGN_IN_DEFAULT,
});

export const signInSuccess = data => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: data,
});

export const signInError = error => ({
  type: actionTypes.SIGN_IN_ERROR,
  payload: {
    error,
  },
});

export const signOutRequest = () => ({
  type: actionTypes.SIGN_OUT_REQUEST,
});

export const signOutSuccess = () => ({
  type: actionTypes.SIGN_OUT_SUCCESS,
});

export const signOutError = () => ({
  type: actionTypes.SIGN_OUT_ERROR,
});

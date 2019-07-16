import { actionTypes } from './actions';
import { token } from '../baseUrl';

const initialState = {
  userEmail: '',
  isAuthenticated: !!token,
  token: null,
  isResetPassword: false,
  message: '',
};

export const signUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        message: 'wait',
      };
    case actionTypes.SIGN_UP_SUCCESS:
      return { ...state, message: 'good' };
    case actionTypes.SIGN_UP_DEFAULT:
      return { ...state, message: '' };
    case actionTypes.SIGN_IN_DEFAULT:
      return { ...state, message: '' };
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        userEmail: payload.data.session.email,
        isAuthenticated: true,
        token: payload.data.session.jwt,
        message: 'good',
      };
    case actionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        userEmail: '',
        isAuthenticated: false,
        token: null,
        message: '',
      };

    case actionTypes.SIGN_UP_ERROR:
      return {
        ...state,
        userEmail: '',
        isAuthenticated: false,
        token: null,
        message: 'signUpError',
      };
    case actionTypes.SIGN_OUT_ERROR:
    case actionTypes.SIGN_IN_ERROR:
      return {
        ...state,
        userEmail: '',
        isAuthenticated: false,
        token: null,
        message: 'error',
      };
    default:
      return state;
  }
};

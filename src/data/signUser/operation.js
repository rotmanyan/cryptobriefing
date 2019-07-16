import axios from 'axios';

import {
  signUpError,
  signUpRequest,
  signUpDefault,
  signUpSuccess,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess,
  signOutError,
} from './actions';

import { urlSignIn, urlSignUp, urlSignOut, token } from '../baseUrl';
import { getDashboardListed } from '../dashboard/operation';

export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());

  axios
    .post(urlSignUp, { user: credentials })
    .then(data => {
      return dispatch(signUpSuccess(data));
    })
    .catch(error => dispatch(signUpError(error)))
    .finally(() => dispatch(signUpDefault()));
};

export const signIn = credentials => dispatch => {
  localStorage.clear();
  dispatch(signInRequest());

  axios
    .post(urlSignIn, credentials)
    .then(response => {
      localStorage.setItem('token', response.data.session.jwt);
      localStorage.setItem('email', response.data.session.email);
      return dispatch(signInSuccess(response));
    })
    .then(() => {
      dispatch(getDashboardListed(1));
    })
    .catch(error => {
      return dispatch(signInError(error));
    })
    .finally(() => dispatch(signUpDefault()));
};

export const signOut = () => (dispatch, getState) => {
  const actualToken = getState().session.token || token;
  const headerDefault = { Authorization: `Bearer ${actualToken}` };
  dispatch(signOutRequest());

  const options = {
    method: 'DELETE',
    headers: headerDefault,
    url: urlSignOut,
  };

  axios(options)
    .then(() => dispatch(signOutSuccess()))
    .then(() => localStorage.clear())
    .catch(error => dispatch(signOutError(error)));
};

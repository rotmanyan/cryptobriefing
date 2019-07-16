import axios from 'axios'

import {
  getNewsTickerRequest,
  getNewsTickerSuccess,
  getNewsTickerError,

  getDashboardListedRequest,
  getDashboardListedSuccess,
  getDashboardListedError,

  updateDashboardListedRequest,
  updateDashboardListedSuccess,
  updateDashboardListedError,

  getCoinDetailsRequest,
  getCoinDetailsSuccess,
  getCoinDetailsError,

  getDashboardICORequest,
  getDashboardICOSuccess,
  getDashboardICOError,

  getDashboardSTORequest,
  getDashboardSTOSuccess,
  getDashboardSTOError,

  clearDashboardListedRequest,
  setTrueValueLoader
} from './actions'

import {
  token,
  urlNewsTicker,
  urlListedCoinDetails,

  urlDashboardListed,
  urlDashboardICO,
  urlDashboardSTO,
} from '../baseUrl'

// ----- News ticker ----- \\
export const getNewsTicker = credentials => dispatch => {
  dispatch(getNewsTickerRequest())

  const option = {
    method: 'get',
    url: urlNewsTicker
  }

  axios(option)
    .then(data => dispatch(getNewsTickerSuccess(data)))
    .catch(error => dispatch(getNewsTickerError(error)))
}

// ----- Dashboard ----- \\

//GET DASHBOARD LISTED
export const getDashboardListed = credentials => (dispatch, getState) => {
  const actualToken = getState().session.token || token;
  const listedLength = getState().loader.length
  const headerDefault = {Authorization: `Bearer ${actualToken}`}

  if (credentials === 1) {
    dispatch(clearDashboardListedRequest())
    dispatch(setTrueValueLoader())
    dispatch(getDashboardListedRequest())
  }
  if (listedLength) dispatch(getDashboardListedRequest())

  const option = actualToken
    ? {
      method: 'get',
      url: urlDashboardListed + `?page=${credentials ? credentials : 1}`,
      headers: headerDefault,
    }
    : {
      method: 'get',
      url: urlDashboardListed + `?page=${credentials ? credentials : 1}`,
    }
  console.log(actualToken, 'actualToken');
  if (listedLength || credentials === 1) axios(option)
    .then(data => data)
    .then(data => dispatch(getDashboardListedSuccess(data)))
    .catch(error => dispatch(getDashboardListedError(error)))
}

//UPDATE DASHBOARD LISTED
export const updateDashboardListed = credentials => (dispatch, getState) => {
  const actualToken = getState().session.token || token;
  const headerDefault = {Authorization: `Bearer ${actualToken}`}

  dispatch(updateDashboardListedRequest())

  const option = {
    method: 'get',
    url: urlDashboardListed + `?page=${credentials}`,
    headers: headerDefault,
  }

  axios(option)
    .then(data => {
      return data
    })
    .then(data => dispatch(updateDashboardListedSuccess(data)))
    .catch(error => dispatch(updateDashboardListedError(error)))
}

export const getDashboardICO = credentials => (dispatch, getState) => {
  const actualToken = getState().session.token || token;
  const headerDefault = {Authorization: `Bearer ${actualToken}`}

  dispatch(getDashboardICORequest())

  const option = actualToken
    ? {
      method: 'get',
      url: urlDashboardICO,
      headers: headerDefault,
      params: {status: credentials ? credentials : 'all'}
    }
    : {
      method: 'get',
      url: urlDashboardICO,
      params: {status: credentials ? credentials : 'all'}
    }

  axios(option)
    .then(data => dispatch(getDashboardICOSuccess(data)))
    .catch(error => dispatch(getDashboardICOError(error)))
}

export const getDashboardSTO = credentials => (dispatch, getState) => {
  const actualToken = getState().session.token || token;
  const headerDefault = {Authorization: `Bearer ${actualToken}`}

  dispatch(getDashboardSTORequest())

  const option = actualToken
    ? {
      method: 'get',
      url: urlDashboardSTO,
      headers: headerDefault,
      params: {status: credentials ? credentials : 'all'}
    }
    : {
      method: 'get',
      url: urlDashboardSTO,
      params: {status: credentials ? credentials : 'all'}
    }

  axios(option)
    .then(data => dispatch(getDashboardSTOSuccess(data)))
    .catch(error => dispatch(getDashboardSTOError(error)))
}

// COIN Details

export const getCoinDetails = credentials => (dispatch, getState) => {
  const actualToken = getState().session.token || token;
  const headerDefault = {Authorization: `Bearer ${actualToken}`}

  dispatch(getCoinDetailsRequest())

  const option = actualToken
    ? {
      method: 'get',
      url: urlListedCoinDetails + '/' + credentials,
      headers: headerDefault,
    }
    : {
      method: 'get',
      url: urlListedCoinDetails + '/' + credentials,
    }

  axios(option)
    .then(data => {
      return dispatch(getCoinDetailsSuccess(data))
    })
    .catch(error => dispatch(getCoinDetailsError(error)))
}

export const updateCoinDetails = credentials => (dispatch, getState) => {
  const actualToken = getState().session.token || token;
  const headerDefault = {Authorization: `Bearer ${actualToken}`}

  const option = actualToken
    ? {
      method: 'get',
      url: urlListedCoinDetails + '/' + credentials,
      headers: headerDefault,
    }
    : {
      method: 'get',
      url: urlListedCoinDetails + '/' + credentials,
    }

  axios(option)
    .then(data => {
      return dispatch(getCoinDetailsSuccess(data))
    })
    .catch(error => dispatch(getCoinDetailsError(error)))
}


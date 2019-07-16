import axios from 'axios'
import {updateCoinDetails} from "../dashboard/operation";
import {getAvailableStatistics, getPortfolioAvailable, getPortfolioWatchlist} from "../portfolio/operation";

import {
  token,

  urlAddToPortfolio,
  urlAddToWatchlist,
  urlRemoveFromWatchlist,
  urlBuyCoin,
  urlSellCoin,
  urlExportTransactions
} from '../baseUrl'

import {
  addWatcherRequest,
  addWatcherSuccess,
  addWatcherError,

  removeWatcherRequest,
  removeWatcherSuccess,
  removeWatcherError,

  addToPortfolioRequest,
  addToPortfolioSuccess,
  addToPortfolioError,

  postBuyCoinRequest,
  postBuyCoinSuccess,
  postBuyCoinError,

  postSellCoinRequest,
  postSellCoinSuccess,
  postSellCoinError,

  getExportTransactionRequest,
  getExportTransactionSuccess,
  getExportTransactionError
} from './actions'

//add watch
export const addWatcher = (credentials, reload) => (dispatch, getState) => {
  const actualToken = getState().session.token || token
  const headerDefault = {Authorization: `Bearer ${actualToken}`}

  dispatch(addWatcherRequest())

  const option = {
    method: 'get',
    url: urlAddToWatchlist + '/' + credentials,
    headers: headerDefault,
  }

  axios(option)
    .then(data => dispatch(addWatcherSuccess(data)))
    .then(() => {
      if (reload) dispatch(updateCoinDetails(credentials))
    })
    .catch(error => dispatch(addWatcherError(error)))
}

//remove watch
export const removeWatcher = (credentials, reload) => (dispatch, getState) => {
  const actualToken = getState().session.token || token;
  const headerDefault = {Authorization: `Bearer ${actualToken}`}

  dispatch(removeWatcherRequest())

  const option = {
    method: 'get',
    url: urlRemoveFromWatchlist + '/' + credentials,
    headers: headerDefault,
  }

  axios(option)
    .then(data => dispatch(removeWatcherSuccess(data)))
    .then(() => {
      if (reload === 'projectProfile') dispatch(updateCoinDetails(credentials))
      if (reload === 'watchlist') dispatch(getPortfolioWatchlist(credentials))
    })
    .catch(error => dispatch(removeWatcherError(error)))

}

// add to portfolio
export const addToPortfolio = (credentials, reload) => (dispatch, getState) => {
  const actualToken = getState().session.token || token
  const headerDefault = {Authorization: `Bearer ${actualToken}`}

  dispatch(addToPortfolioRequest())

  const option = {
    method: 'get',
    url: urlAddToPortfolio + '/' + credentials,
    headers: headerDefault,
  }

  axios(option)
    .then(data => dispatch(addToPortfolioSuccess(data)))
    .then(() => {
      if (reload === 'projectProfile') dispatch(updateCoinDetails(credentials))
    })
    .catch(error => dispatch(addToPortfolioError(error)))
}

// buy coin
export const buyCoin = (credentials, amount) => (dispatch, getState) => {
  const actualToken = getState().session.token || token
  const headerDefault = {Authorization: `Bearer ${actualToken}`}

  dispatch(postBuyCoinRequest())

  const option = {
    method: 'post',
    url: urlBuyCoin + '/' + credentials,
    headers: headerDefault,
    data: {"amount": amount}
  }

  axios(option)
    .then(data => dispatch(postBuyCoinSuccess(data)))
    .then(() => {
      dispatch(getAvailableStatistics())
      dispatch(getPortfolioAvailable())
    })
    .catch(error => dispatch(postBuyCoinError(error)))
}

// sell coin
export const sellCoin = (credentials, amount) => (dispatch, getState) => {
  const actualToken = getState().session.token || token
  const headerDefault = {Authorization: `Bearer ${actualToken}`}

  dispatch(postSellCoinRequest())

  const option = {
    method: 'post',
    url: urlSellCoin + '/' + credentials,
    headers: headerDefault,
    data: {"amount": amount}
  }

  axios(option)
    .then(data => dispatch(postSellCoinSuccess(data)))
    .then(() => {
      dispatch(getAvailableStatistics())
      dispatch(getPortfolioAvailable())
    })
    .catch(error => dispatch(postSellCoinError(error)))
}

// get export transaction
export const getExportTransaction = credentials => (dispatch, getState) => {
  const actualToken = getState().session.token || token
  const headerDefault = {Authorization: `Bearer ${actualToken}`}

  dispatch(getExportTransactionRequest())

  const option = {
    method: 'get',
    url: urlExportTransactions,
    headers: headerDefault,
  }

  axios(option)
    .then(response => {
      return response
    })
    .then(res => dispatch(getExportTransactionSuccess(res)))
    .catch(error => dispatch(getExportTransactionError(error)))
}



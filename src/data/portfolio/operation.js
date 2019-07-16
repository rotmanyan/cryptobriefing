import axios from 'axios'

import {
  token,
  urlAvailable,
  urlAvailableStatistics,
  urlTransactions,
  urlWatchlist
} from '../baseUrl'

import {
  getAvailableStatisticsRequest,
  getAvailableStatisticsSuccess,
  getAvailableStatisticsError,

  getPortfolioAvailableRequest,
  getPortfolioAvailableSuccess,
  getPortfolioAvailableError,

  getPortfolioTransactionRequest,
  getPortfolioTransactionSuccess,
  getPortfolioTransactionError,

  getPortfolioWatchlistRequest,
  getPortfolioWatchlistSuccess,
  getPortfolioWatchlistError
} from '../portfolio/actions'

// get available statistics
export const getAvailableStatistics = credentials => (dispatch, getState) => {
  const actualToken = getState().session.token || token
  const headerDefault = {Authorization: `Bearer ${actualToken}`}

  dispatch(getAvailableStatisticsRequest())

  const option = {
    method: 'get',
    url: urlAvailableStatistics,
    headers: headerDefault
  }

  axios(option)
    .then(data => dispatch(getAvailableStatisticsSuccess(data)))
    .catch(error => dispatch(getAvailableStatisticsError(error)))
}


// get portfolio available
export const getPortfolioAvailable = credentials => (dispatch, getState) => {
  const actualToken = getState().session.token || token
  const headerDefault = {Authorization: `Bearer ${actualToken}`}

  dispatch(getPortfolioAvailableRequest())

  const option = {
    method: 'get',
    url: urlAvailable,
    headers: headerDefault
  }

  axios(option)
    .then(data => dispatch(getPortfolioAvailableSuccess(data)))
    .catch(error => dispatch(getPortfolioAvailableError(error)))
}


// get portfolio transaction
export const getPortfolioTransaction = credentials => (dispatch, getState) => {
  const actualToken = getState().session.token || token
  const headerDefault = {Authorization: `Bearer ${actualToken}`}

  dispatch(getPortfolioTransactionRequest())

  const option = {
    method: 'get',
    url: urlTransactions,
    headers: headerDefault
  }

  axios(option)
    .then(data => dispatch(getPortfolioTransactionSuccess(data)))
    .catch(error => dispatch(getPortfolioTransactionError(error)))
}


// get portfolio watchlist
export const getPortfolioWatchlist = credentials => (dispatch, getState) => {
  const actualToken = getState().session.token || token
  const headerDefault = {Authorization: `Bearer ${actualToken}`}

  dispatch(getPortfolioWatchlistRequest())

  const option = {
    method: 'get',
    url: urlWatchlist,
    headers: headerDefault
  }


  axios(option)
    .then(data => dispatch(getPortfolioWatchlistSuccess(data)))
    .catch(error => dispatch(getPortfolioWatchlistError(error)))
}
export const actionTypes = {
  GET_AVAILABLE_STATISTICS_REQUEST: 'GET_AVAILABLE_STATISTICS_REQUEST',
  GET_AVAILABLE_STATISTICS_SUCCESS: 'GET_AVAILABLE_STATISTICS_SUCCESS',
  GET_AVAILABLE_STATISTICS_ERROR: 'GET_AVAILABLE_STATISTICS_ERROR',

  GET_PORTFOLIO_AVAILABLE_REQUEST: 'GET_PORTFOLIO_AVAILABLE_REQUEST',
  GET_PORTFOLIO_AVAILABLE_SUCCESS: 'GET_PORTFOLIO_AVAILABLE_SUCCESS',
  GET_PORTFOLIO_AVAILABLE_ERROR: 'GET_PORTFOLIO_AVAILABLE_ERROR',

  GET_PORTFOLIO_TRANSACTION_REQUEST: 'GET_PORTFOLIO_TRANSACTION_REQUEST',
  GET_PORTFOLIO_TRANSACTION_SUCCESS: 'GET_PORTFOLIO_TRANSACTION_SUCCESS',
  GET_PORTFOLIO_TRANSACTION_ERROR: 'GET_PORTFOLIO_TRANSACTION_ERROR',

  GET_PORTFOLIO_WATCHLIST_REQUEST: 'GET_PORTFOLIO_WATCHLIST_REQUEST',
  GET_PORTFOLIO_WATCHLIST_SUCCESS: 'GET_PORTFOLIO_WATCHLIST_SUCCESS',
  GET_PORTFOLIO_WATCHLIST_ERROR: 'GET_PORTFOLIO_WATCHLIST_ERROR',
}

export const getAvailableStatisticsRequest = () => ({
  type: actionTypes.GET_AVAILABLE_STATISTICS_REQUEST
})

export const getAvailableStatisticsSuccess = data => ({
  type: actionTypes.GET_AVAILABLE_STATISTICS_SUCCESS,
  payload: data
})

export const getAvailableStatisticsError = error => ({
  type: actionTypes.GET_AVAILABLE_STATISTICS_ERROR,
  payload: {
    error
  }
})

export const getPortfolioAvailableRequest = () => ({
  type: actionTypes.GET_PORTFOLIO_AVAILABLE_REQUEST
})

export const getPortfolioAvailableSuccess = data => ({
  type: actionTypes.GET_PORTFOLIO_AVAILABLE_SUCCESS,
  payload: data
})

export const getPortfolioAvailableError = error => ({
  type: actionTypes.GET_PORTFOLIO_AVAILABLE_ERROR,
  payload: {
    error
  }
})

export const getPortfolioTransactionRequest = () => ({
  type: actionTypes.GET_PORTFOLIO_TRANSACTION_REQUEST
})

export const getPortfolioTransactionSuccess = data => ({
  type: actionTypes.GET_PORTFOLIO_TRANSACTION_SUCCESS,
  payload: data
})

export const getPortfolioTransactionError = error => ({
  type: actionTypes.GET_PORTFOLIO_TRANSACTION_ERROR,
  payload: {
    error
  }
})
export const getPortfolioWatchlistRequest = () => ({
  type: actionTypes.GET_PORTFOLIO_WATCHLIST_REQUEST
})

export const getPortfolioWatchlistSuccess = data => ({
  type: actionTypes.GET_PORTFOLIO_WATCHLIST_SUCCESS,
  payload: data
})

export const getPortfolioWatchlistError = error => ({
  type: actionTypes.GET_PORTFOLIO_WATCHLIST_ERROR,
  payload: {
    error
  }
})


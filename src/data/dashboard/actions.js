export const actionTypes = {
  GET_NEWS_TICKER_REQUEST: 'GET_NEWS_TICKER_REQUEST',
  GET_NEWS_TICKER_SUCCESS: 'GET_NEWS_TICKER_SUCCESS',
  GET_NEWS_TICKER_ERROR: 'GET_NEWS_TICKER_ERROR',

  GET_DASHBOARD_LISTED_REQUEST: 'GET_DASHBOARD_LISTED_REQUEST',
  GET_DASHBOARD_LISTED_SUCCESS: 'GET_DASHBOARD_LISTED_SUCCESS',
  GET_DASHBOARD_LISTED_ERROR: 'GET_DASHBOARD_LISTED_ERROR',

  UPDATE_DASHBOARD_LISTED_REQUEST: 'UPDATE_DASHBOARD_LISTED_REQUEST',
  UPDATE_DASHBOARD_LISTED_SUCCESS: 'UPDATE_DASHBOARD_LISTED_SUCCESS',
  UPDATE_DASHBOARD_LISTED_ERROR: 'UPDATE_DASHBOARD_LISTED_ERROR',

  GET_DASHBOARD_ICO_REQUEST: 'GET_DASHBOARD_ICO_REQUEST',
  GET_DASHBOARD_ICO_SUCCESS: 'GET_DASHBOARD_ICO_SUCCESS',
  GET_DASHBOARD_ICO_ERROR: 'GET_DASHBOARD_ICO_ERROR',

  GET_DASHBOARD_STO_REQUEST: 'GET_DASHBOARD_STO_REQUEST',
  GET_DASHBOARD_STO_SUCCESS: 'GET_DASHBOARD_STO_SUCCESS',
  GET_DASHBOARD_STO_ERROR: 'GET_DASHBOARD_STO_ERROR',

  GET_COIN_DETAILS_REQUEST: 'GET_COIN_DETAILS_REQUEST',
  GET_COIN_DETAILS_SUCCESS: 'GET_COIN_DETAILS_SUCCESS',
  GET_COIN_DETAILS_ERROR: 'GET_COIN_DETAILS_ERROR',

  CLEAR_DASHBOARD_LISTED_REQUEST: 'CLEAR_DASHBOARD_LISTED_REQUEST',
  SET_TRUE_VALUE_LOADER: 'SET_TRUE_VALUE_LOADER'
}

export const getNewsTickerRequest = () => ({
  type: actionTypes.GET_NEWS_TICKER_REQUEST
})

export const getNewsTickerSuccess = data => ({
  type: actionTypes.GET_NEWS_TICKER_SUCCESS,
  payload: data
})

export const getNewsTickerError = error => ({
  type: actionTypes.GET_NEWS_TICKER_ERROR,
  payload: {
    error
  }
})

export const getDashboardListedRequest = () => ({
  type: actionTypes.GET_DASHBOARD_LISTED_REQUEST
})

export const getDashboardListedSuccess = data => ({
  type: actionTypes.GET_DASHBOARD_LISTED_SUCCESS,
  payload: data
})

export const getDashboardListedError = error => ({
  type: actionTypes.GET_DASHBOARD_LISTED_ERROR,
  payload: {
    error
  }
})

export const updateDashboardListedRequest = () => ({
  type: actionTypes.UPDATE_DASHBOARD_LISTED_REQUEST
})

export const updateDashboardListedSuccess = data => ({
  type: actionTypes.UPDATE_DASHBOARD_LISTED_SUCCESS,
  payload: data
})

export const updateDashboardListedError = error => ({
  type: actionTypes.UPDATE_DASHBOARD_LISTED_ERROR,
  payload: {
    error
  }
})

export const clearDashboardListedRequest = () => ({
  type: actionTypes.CLEAR_DASHBOARD_LISTED_REQUEST
})

export const setTrueValueLoader = () => ({
  type: actionTypes.SET_TRUE_VALUE_LOADER
})


export const getDashboardICORequest = () => ({
  type: actionTypes.GET_DASHBOARD_ICO_REQUEST
})

export const getDashboardICOSuccess = data => ({
  type: actionTypes.GET_DASHBOARD_ICO_SUCCESS,
  payload: data
})

export const getDashboardICOError = error => ({
  type: actionTypes.GET_DASHBOARD_ICO_ERROR,
  payload: {
    error
  }
})

export const getDashboardSTORequest = () => ({
  type: actionTypes.GET_DASHBOARD_STO_REQUEST
})

export const getDashboardSTOSuccess = data => ({
  type: actionTypes.GET_DASHBOARD_STO_SUCCESS,
  payload: data
})

export const getDashboardSTOError = error => ({
  type: actionTypes.GET_DASHBOARD_STO_ERROR,
  payload: {
    error
  }
})


export const getCoinDetailsRequest = () => ({
  type: actionTypes.GET_COIN_DETAILS_REQUEST
})

export const getCoinDetailsSuccess = data => ({
  type: actionTypes.GET_COIN_DETAILS_SUCCESS,
  payload: data
})

export const getCoinDetailsError = error => ({
  type: actionTypes.GET_COIN_DETAILS_ERROR,
  payload: {
    error
  }
})
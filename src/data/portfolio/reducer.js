import { combineReducers } from 'redux';
import { actionTypes } from './actions';

const availableStatisticsState = {};

const availableStatistics = (
  state = availableStatisticsState,
  { type, payload },
) => {
  switch (type) {
    case actionTypes.GET_AVAILABLE_STATISTICS_SUCCESS:
      return { ...payload.data };
    case actionTypes.GET_AVAILABLE_STATISTICS_ERROR:
    default:
      return { ...state };
  }
};
const portfolioAvailableState = {};

const portfolioAvailable = (
  state = portfolioAvailableState,
  { type, payload },
) => {
  switch (type) {
    case actionTypes.GET_PORTFOLIO_AVAILABLE_SUCCESS:
      return { ...payload.data };
    case actionTypes.GET_PORTFOLIO_AVAILABLE_ERROR:
    default:
      return { ...state };
  }
};

const portfolioTransactionState = {};

const portfolioTransaction = (
  state = portfolioTransactionState,
  { type, payload },
) => {
  switch (type) {
    case actionTypes.GET_PORTFOLIO_TRANSACTION_SUCCESS:
      return { ...payload.data };
    case actionTypes.GET_PORTFOLIO_TRANSACTION_ERROR:
    default:
      return { ...state };
  }
};

const portfolioWatchlistState = {};

const portfolioWatchlist = (
  state = portfolioWatchlistState,
  { type, payload },
) => {
  switch (type) {
    case actionTypes.GET_PORTFOLIO_WATCHLIST_SUCCESS:
      return { ...payload.data };
    case actionTypes.GET_PORTFOLIO_WATCHLIST_ERROR:
    default:
      return { ...state };
  }
};

export const portfolioBox = combineReducers({
  available: portfolioAvailable,
  transaction: portfolioTransaction,
  watchlist: portfolioWatchlist,
  statistics: availableStatistics,
});

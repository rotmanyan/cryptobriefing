import { actionTypes } from './actions';
import { combineReducers } from 'redux';

const loader = {
  state: 'default',
  length: true,
};

export const loaderReducer = (state = loader, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_NEWS_TICKER_REQUEST:
      return { ...state, state: 'fetching' };
    case actionTypes.GET_NEWS_TICKER_SUCCESS:
      return { ...state, state: 'success' };
    case actionTypes.GET_NEWS_TICKER_ERROR:
      return { ...state, state: 'error' };
    case actionTypes.GET_DASHBOARD_LISTED_SUCCESS:
      if (payload.data.dashboard_data.length) return { ...state };
      else return { ...state, length: false };
    case actionTypes.SET_TRUE_VALUE_LOADER:
      return { ...state, length: true };
    default:
      return { ...state };
  }
};

// Ticker \\
const tickerState = [];

export const tickerReducer = (state = tickerState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_NEWS_TICKER_SUCCESS:
      return [...state, ...payload.data.latest_prices];
    case actionTypes.GET_NEWS_TICKER_ERROR:
      return [...state];
    default:
      return [...state];
  }
};

/*Dashboard-----*/

const listedHeaderState = [];

const listedHeaderReducer = (state = listedHeaderState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_DASHBOARD_LISTED_SUCCESS:
      return [...payload.data.selected_fields];
    case actionTypes.GET_DASHBOARD_LISTED_ERROR:
    default:
      return [...state];
  }
};

const listedBodyState = [];

const listedBodyReducer = (state = listedBodyState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_DASHBOARD_LISTED_SUCCESS:
      return [...state];
    case actionTypes.GET_DASHBOARD_LISTED_SUCCESS:
      if (payload.data.dashboard_data.length) {
        if (state.length && state[0].id === payload.data.dashboard_data[0].id)
          return [...state];
        return [...state, ...payload.data.dashboard_data];
      }
      return [...state];
    case actionTypes.CLEAR_DASHBOARD_LISTED_REQUEST:
      return [];
    case actionTypes.UPDATE_DASHBOARD_LISTED_ERROR:
    case actionTypes.GET_DASHBOARD_LISTED_ERROR:
    default:
      return [...state];
  }
};

const coinDetailsState = {
  load: 'default',
};

export const coinDetailsReducer = (
  state = coinDetailsState,
  { type, payload },
) => {
  switch (type) {
    case actionTypes.GET_COIN_DETAILS_REQUEST:
      return { load: 'fetching' };
    case actionTypes.GET_COIN_DETAILS_SUCCESS:
      return { ...state, ...payload.data, ...{ load: 'success' } };
    case actionTypes.GET_COIN_DETAILS_ERROR:
    default:
      return { ...state };
  }
};

const listedCombine = combineReducers({
  selected_fields: listedHeaderReducer,
  dashboard_data: listedBodyReducer,
  coin_details: coinDetailsReducer,
});

const ICOState = {};

const ICOReducer = (state = ICOState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_DASHBOARD_ICO_SUCCESS:
      return { ...state, ...payload.data };
    case actionTypes.GET_DASHBOARD_ICO_ERROR:
      return { ...state };
    default:
      return { ...state };
  }
};

const STOState = {};

const STOReducer = (state = STOState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_DASHBOARD_STO_SUCCESS:
      return { ...state, ...payload.data };
    case actionTypes.GET_DASHBOARD_STO_ERROR:
      return { ...state };
    default:
      return { ...state };
  }
};

export const dashboardReducer = combineReducers({
  listed: listedCombine,
  ico: ICOReducer,
  sto: STOReducer,
});

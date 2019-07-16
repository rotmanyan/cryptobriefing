import { constants } from './constants';

export const newsActions = {
  fetchNewsAsync: () => ({
    type: constants.FETCH_NEWS_ASYNC,
  }),

  fillNews: news => ({
    type: constants.FILL_NEWS,
    payload: news,
  }),

  fillNewsRequest: () => ({
    type: constants.FILL_NEWS_REQUEST,
  }),

  fetchNewsError: error => ({
    type: constants.FILL_NEWS_ERROR,
    payload: error,
  }),

  fetchFiltersAsync: () => ({
    type: constants.FETCH_FILTERS_ASYNC,
  }),

  fillFilters: filters => ({
    type: constants.FILL_FILTERS,
    payload: filters,
  }),

  fetchFiltersError: error => ({
    type: constants.FILL_FILTERS_ERROR,
    payload: error,
  }),
  selectNewSource: chekedSource => ({
    type: constants.SELECT_NEW_SOURCE,
    payload: chekedSource,
  }),

  selectNewSourceAll: statusSelectedAll => ({
    type: constants.SELECT_NEW_SOURCE_ALL,
    payload: statusSelectedAll,
  }),

  selectProject: checkedProject => ({
    type: constants.SELECT_PROJECT,
    payload: checkedProject,
  }),

  selectProjectAll: statusSelectedAll => ({
    type: constants.SELECT_PROJECT_ALL,
    payload: statusSelectedAll,
  }),

  selectDate: date => ({
    type: constants.SELECT_DATE,
    payload: date,
  }),

  selectCategories: category => ({
    type: constants.SELECT_CATEGORIES,
    payload: category,
  }),

  deleteSelectCategories: () => ({
    type: constants.DELETE_SELECT_CATEGORIES,
  }),

  handleChangePage: page => ({
    type: constants.CHANGE_PAGE,
    payload: page,
  }),
};

export const actionTypes = {
  GET_CHART_REQUEST: 'GET_CHART_REQUEST',
  GET_CHART_SUCCESS: 'GET_CHART_SUCCESS',
  GET_CHART_ERROR: 'GET_CHART_ERROR',
}

export const getChartRequest = () => ({
  type: actionTypes.GET_CHART_REQUEST
})

export const getChartSuccess = data => ({
  type: actionTypes.GET_CHART_SUCCESS,
  payload: data
})

export const getChartError = error => ({
  type: actionTypes.GET_CHART_ERROR,
  payload: {
    error
  }
})
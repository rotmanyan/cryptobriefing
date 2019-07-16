import axios from 'axios'

import {
  getChartRequest,
  getChartSuccess,
  getChartError,
} from './actions'

import {
  token,
  urlCharts,
} from '../baseUrl'

export const getChart = credentials => (dispatch, getState) => {
  const actualToken = getState().session.token || token;
  const headerDefault = {Authorization: `Bearer ${actualToken}`}
  const cred = credentials.join(',')
  let option

  if (credentials.length > 1) {
    option = actualToken
      ? {
        method: 'get',
        url: urlCharts + '/?coins=' + cred,
        headers: headerDefault
      }
      : {
        method: 'get',
        url: urlCharts + '/?coins=' + cred,
      }
  } else {
    option = actualToken
      ? {
        method: 'get',
        url: urlCharts + '/' + cred,
        headers: headerDefault
      }
      : {
        method: 'get',
        url: urlCharts + '/' + cred,
      }
  }

  dispatch(getChartRequest())

  axios(option)
    .then(data => dispatch(getChartSuccess(data)))
    .catch(error => dispatch(getChartError(error)))
}
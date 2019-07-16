import axios from 'axios'

import {
  getProjectProfileRequest,
  getProjectProfileSuccess,
  getProjectProfileError
} from './actions'

import {urlListedCoinDetails} from '../baseUrl'

export const getProjectProfile = credentials => dispatch => {
  dispatch(getProjectProfileRequest())

  const option = urlListedCoinDetails + '/' + credentials

  axios.get(option)
    .then(response => dispatch(getProjectProfileSuccess(response)))
    .catch(error => dispatch(getProjectProfileError(error)))
}
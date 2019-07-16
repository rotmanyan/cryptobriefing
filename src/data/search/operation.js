import axios from 'axios'

import {
  searchRequest,
  searchSuccess,
  searchError
} from './actions'

import {urlSearch} from '../baseUrl'

export const search = credentials => dispatch => {
  dispatch(searchRequest())
  const option = credentials.length > 0 ? urlSearch + '/' + credentials : urlSearch + '/clearLIST'

  axios.get(option)
    .then(response => dispatch(searchSuccess(response)))
    .catch(error => dispatch(searchError(error)))
}
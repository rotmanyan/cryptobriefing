export const actionTypes = {
  SEARCH_REQUEST:'SEARCH_REQUEST',
  SEARCH_SUCCESS:'SEARCH_SUCCESS',
  SEARCH_ERROR:'SEARCH_ERROR'
}

export const searchRequest = () => ({
  type: actionTypes.SEARCH_REQUEST
})

export const searchSuccess = data => ({
  type: actionTypes.SEARCH_SUCCESS,
  payload: data
})

export const searchError = error => ({
  type: actionTypes.SEARCH_ERROR,
  payload: {
    error
  }
})
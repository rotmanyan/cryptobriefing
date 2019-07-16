import {actionTypes} from './actions'

export const searchState = []

export const searchReducer = (state = searchState, {type, payload}) => {
  switch (type) {
    case actionTypes.SEARCH_SUCCESS:
      return [ ...payload.data]
    case actionTypes.SEARCH_ERROR:
      return [...state]
    default:
      return [...state]
  }
}
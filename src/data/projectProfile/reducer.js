import {actionTypes} from './actions'

export const projectProfileState = {}

export const projectProfileReducer = (state = projectProfileState, {type, payload}) => {
  switch (type) {
    case actionTypes.GET_PROJECT_PROFILE_SUCCESS:
      return {...payload.data}
    case actionTypes.GET_PROJECT_PROFILE_ERROR:
      return state
    default:
      return state
  }
}

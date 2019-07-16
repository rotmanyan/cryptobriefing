export const actionTypes = {
  GET_PROJECT_PROFILE_REQUEST: 'GET_PROJECT_PROFILE_REQUEST',
  GET_PROJECT_PROFILE_SUCCESS: 'GET_PROJECT_PROFILE_SUCCESS',
  GET_PROJECT_PROFILE_ERROR: 'GET_PROJECT_PROFILE_ERROR',
  CLEAN_PROJECT_PROFILE: 'CLEAN_PROJECT_PROFILE'
}

export const getProjectProfileRequest = () => ({
  type: actionTypes.GET_PROJECT_PROFILE_REQUEST
})

export const getProjectProfileSuccess = data => ({
  type: actionTypes.GET_PROJECT_PROFILE_SUCCESS,
  payload: data
})

export const getProjectProfileError = error => ({
  type: actionTypes.GET_PROJECT_PROFILE_ERROR,
  payload: {
    error
  }
})

export const cleanProjectProfile = () => ({
  type: actionTypes.CLEAN_PROJECT_PROFILE
})
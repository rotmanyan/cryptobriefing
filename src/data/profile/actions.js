import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_PASSWORD_REQUEST,
  UPDATE_PROFILE_PASSWORD_SUCCESS,
  UPDATE_PROFILE_PASSWORD_ERROR,
  GET_PROFILE_SETTINGS_REQUEST,
  GET_PROFILE_SETTINGS_SUCCESS,
  GET_PROFILE_SETTINGS_ERROR,
  UPDATE_PROFILE_SETTINGS_REQUEST,
  UPDATE_PROFILE_SETTINGS_SUCCESS,
  UPDATE_PROFILE_SETTINGS_ERROR,
  UPDATE_PROFILE_PHOTO_REQUEST,
  UPDATE_PROFILE_PHOTO_SUCCESS,
  UPDATE_PROFILE_PHOTO_ERROR,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_ERROR,
  HANDLE_MODAL_RESET
} from "./constants";

export const getProfileRequest = () => ({
  type: GET_PROFILE_REQUEST
});

export const getProfileSuccess = data => ({
  type: GET_PROFILE_SUCCESS,
  payload: data
});

export const getProfileError = error => ({
  type: GET_PROFILE_ERROR,
  payload: error
});

export const getProfileSettingsRequest = () => ({
  type: GET_PROFILE_SETTINGS_REQUEST
});

export const getProfileSettingsSuccess = data => ({
  type: GET_PROFILE_SETTINGS_SUCCESS,
  payload: data
});

export const getProfileSettingsError = error => ({
  type: GET_PROFILE_SETTINGS_ERROR,
  payload: error
});

export const updateProfileRequest = () => ({
  type: UPDATE_PROFILE_REQUEST
});

export const updateProfileSuccess = data => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: data
});

export const updateProfileError = error => ({
  type: UPDATE_PROFILE_ERROR,
  payload: error
});

export const updateProfilePasswordRequest = () => ({
  type: UPDATE_PROFILE_PASSWORD_REQUEST
});

export const updateProfilePasswordSuccess = data => ({
  type: UPDATE_PROFILE_PASSWORD_SUCCESS,
  payload: data
});

export const updateProfilePasswordError = error => ({
  type: UPDATE_PROFILE_PASSWORD_ERROR,
  payload: error
});

export const updateProfileSettingsRequest = () => ({
  type: UPDATE_PROFILE_SETTINGS_REQUEST
});

export const updateProfileSettingsSuccess = data => ({
  type: UPDATE_PROFILE_SETTINGS_SUCCESS,
  payload: data
});

export const updateProfileSettingsError = error => ({
  type: UPDATE_PROFILE_SETTINGS_ERROR,
  payload: error
});

export const deleteProfileRequest = () => ({
  type: DELETE_PROFILE_REQUEST
});

export const deleteProfileSuccess = data => ({
  type: DELETE_PROFILE_SUCCESS,
  payload: data
});

export const deleteProfileError = error => ({
  type: DELETE_PROFILE_ERROR,
  payload: error
});

export const updateProfilePhotoRequest = () => ({
  type: UPDATE_PROFILE_PHOTO_REQUEST
});

export const updateProfilePhotoSuccess = data => ({
  type: UPDATE_PROFILE_PHOTO_SUCCESS,
  payload: data
});

export const updateProfilePhotoError = error => ({
  type: UPDATE_PROFILE_PHOTO_ERROR,
  payload: error
});

export const handleModalReset = () => ({
  type: HANDLE_MODAL_RESET
});

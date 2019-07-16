import axios from "axios";

import {
  getProfileRequest,
  getProfileSuccess,
  getProfileError,
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileError,
  updateProfilePasswordRequest,
  updateProfilePasswordSuccess,
  updateProfilePasswordError,
  getProfileSettingsRequest,
  getProfileSettingsSuccess,
  getProfileSettingsError,
  updateProfileSettingsRequest,
  updateProfileSettingsSuccess,
  updateProfileSettingsError,
  deleteProfileRequest,
  deleteProfileSuccess,
  deleteProfileError,
  updateProfilePhotoRequest,
  updateProfilePhotoSuccess,
  updateProfilePhotoError
} from "data/profile/actions";

import { signOutSuccess } from "data/signUser/actions";

import { token } from "data/baseUrl";

export const getProfile = () => (dispatch, getState) => {
  const actualToken = getState().session.token || token;

  dispatch(getProfileRequest());

  axios
    .get(process.env.REACT_APP_SERVER_ORIGIN + "/user/profile", {
      headers: {
        Authorization: `Bearer ${actualToken}`,
        "X-Requested-With": "XMLHttpRequest"
      }
    })

    .then(data => dispatch(getProfileSuccess(data.data)))
    .catch(error => dispatch(getProfileError(error)));
};

export const updateProfile = userProfileData => (dispatch, getState) => {
  const actualToken = getState().session.token || token;

  dispatch(updateProfileRequest());

  axios
    .post(
      process.env.REACT_APP_SERVER_ORIGIN + "/user/profile",
      { user: userProfileData },
      {
        headers: {
          Authorization: `Bearer ${actualToken}`,
          "X-Requested-With": "XMLHttpRequest"
        }
      }
    )

    .then(data => dispatch(updateProfileSuccess(data.data)))
    .catch(error => dispatch(updateProfileError(error)));
};

export const resetPassword = passwordData => (dispatch, getState) => {
  const actualToken = getState().session.token || token;

  dispatch(updateProfilePasswordRequest());

  axios
    .post(
      process.env.REACT_APP_SERVER_ORIGIN + "/user/profile/password",
      { user: passwordData },
      {
        headers: {
          Authorization: `Bearer ${actualToken}`,
          "X-Requested-With": "XMLHttpRequest"
        }
      }
    )

    .then(data => dispatch(updateProfilePasswordSuccess()))
    .catch(error =>
      dispatch(updateProfilePasswordError(error.response.data.message))
    );
};

export const getProfileSettings = () => (dispatch, getState) => {
  const actualToken = getState().session.token || token;

  dispatch(getProfileSettingsRequest());

  axios
    .get(process.env.REACT_APP_SERVER_ORIGIN + "/user/settings", {
      headers: {
        Authorization: `Bearer ${actualToken}`,
        "X-Requested-With": "XMLHttpRequest"
      }
    })

    .then(data => dispatch(getProfileSettingsSuccess(data.data)))
    .catch(error => dispatch(getProfileSettingsError(error)));
};

export const updateProfileSettings = settingItem => (dispatch, getState) => {
  const actualToken = getState().session.token || token;

  dispatch(updateProfileSettingsRequest());

  axios
    .post(
      process.env.REACT_APP_SERVER_ORIGIN + "/user/settings",
      { settings: settingItem },
      {
        headers: {
          Authorization: `Bearer ${actualToken}`,
          "X-Requested-With": "XMLHttpRequest"
        }
      }
    )

    .then(data => dispatch(updateProfileSettingsSuccess(data.data)))
    .catch(error => dispatch(updateProfileSettingsError(error)));
};

export const deleteProfile = () => (dispatch, getState) => {
  const actualToken = getState().session.token || token;

  dispatch(deleteProfileRequest());

  axios
    .delete(process.env.REACT_APP_SERVER_ORIGIN + "/registration", {
      headers: {
        Authorization: `Bearer ${actualToken}`,
        "X-Requested-With": "XMLHttpRequest"
      }
    })

    .then(() => {
      localStorage.removeItem("token");
      dispatch(signOutSuccess());
      dispatch(deleteProfileSuccess());
    })
    .catch(error => dispatch(deleteProfileError(error)));
};

export const updateProfilePhoto = photo => (dispatch, getState) => {
  const actualToken = getState().session.token || token;

  dispatch(updateProfilePhotoRequest());

  axios
    .post(
      process.env.REACT_APP_SERVER_ORIGIN + "/profile/update_photo",
      { avatar: photo },
      {
        headers: {
          Authorization: `Bearer ${actualToken}`,
          "X-Requested-With": "XMLHttpRequest"
        }
      }
    )

    .then(data => dispatch(updateProfilePhotoSuccess(data.data.avatar)))
    .catch(error => dispatch(updateProfilePhotoError(error)));
};

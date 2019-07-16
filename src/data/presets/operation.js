import axios from "axios";

import {
  getPresetsRequest,
  getPresetsSuccess,
  getPresetsError,

  requestSaveNewPreset,
  saveNewPresetSuccess,
  saveNewPresetError,

  deletePreset,
  deletePresetSuccess,
  deletePresetError,
  requestSelectPreset,
  selectPresetSuccess,
  selectPresetError
} from "data/presets/actions";

import {getDashboardListed} from "data/dashboard/operation";

import {token, urlDashboardPresetsListed} from "data/baseUrl";

export const getPresets = credential => (dispatch, getState) => {
  const actualToken = getState().session.token || token;
  const headerDefault = {Authorization: `Bearer ${actualToken}`};
  let url;
  switch (credential) {
    case 'listed':
      url = urlDashboardPresetsListed
      break
    case 'sto':
      url = urlDashboardPresetsListed
      break
    case 'ico':
      url = urlDashboardPresetsListed
      break
    default:
      url = urlDashboardPresetsListed
      break
  }
  dispatch(getPresetsRequest());

  const option = actualToken
    ? {
      method: "get",
      url: url,
      headers: headerDefault
    }
    : {
      method: "get",
      url: url
    };

  axios(option)
    .then(data => {
      dispatch(getPresetsSuccess(data.data.presets));
      if (actualToken) {
        dispatch(selectPreset(getState().presets.data.default[0].id));
      }
      return data
    })
    .then(() => {
      dispatch(getDashboardListed())
    })
    .catch(error => dispatch(getPresetsError(error)));
};

export const addNewPresets = value => (dispatch, getState) => {
  const actualToken = getState().session.token || token;

  dispatch(requestSaveNewPreset());

  axios
    .post(
      process.env.REACT_APP_SERVER_ORIGIN + "/v1/dashboard/save_preset/listed",
      {name: value},
      {
        headers: {
          Authorization: `Bearer ${actualToken}`
        }
      }
    )

    .then(data => {
      if (data.status === 200) {
        dispatch(saveNewPresetSuccess(data.data.preset));
        dispatch(getDashboardListed(1));
      }
    })
    .catch(error => dispatch(saveNewPresetError(error)));
};

export const deletePresets = id => (dispatch, getState) => {
  const actualToken = getState().session.token || token;

  dispatch(deletePreset());

  axios
    .delete(
      process.env.REACT_APP_SERVER_ORIGIN + `/v1/dashboard/delete_preset/${id}`,
      {
        headers: {
          Authorization: `Bearer ${actualToken}`
        }
      }
    )

    .then(() => dispatch(deletePresetSuccess(id)))
    .catch(error => dispatch(deletePresetError(error)));
};

export const selectPreset = id => (dispatch, getState) => {
  const actualToken = getState().session.token || token;

  dispatch(requestSelectPreset());

  axios
    .post(
      process.env.REACT_APP_SERVER_ORIGIN + `/v1/dashboard/set_preset/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${actualToken}`
        }
      }
    )

    .then(data => {
      if (data.status === 200) {
        dispatch(selectPresetSuccess(data.data.preset));
        dispatch(getDashboardListed(1));
      }
    })
    .catch(error => dispatch(selectPresetError(error)));
};

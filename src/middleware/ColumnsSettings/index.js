import axios from "axios";

import {
  requestColumnsSettings,
  successColumnsSettings,
  errorColumnsSettings,
  saveColumsSettings,
  successSaveColumsSettings,
  errorSaveColumsSettings
} from "data/columnSettings/actions";

import { token } from "data/baseUrl";

export const fetchDataColumnsSettings = () => (dispatch, getState) => {
  const actualToken = getState().session.token || token;

  dispatch(requestColumnsSettings());

  axios
    .get(
      process.env.REACT_APP_SERVER_ORIGIN +
        "/v1/dashboard/columns_settings/listed",
      {
        headers: {
          Authorization: `Bearer ${actualToken}`,
          "X-Requested-With": "XMLHttpRequest"
        }
      }
    )
    .then(data => dispatch(successColumnsSettings(data.data)))
    .catch(error => dispatch(errorColumnsSettings(error)));
};

export const applyColumsSettings = selectSettings => (dispatch, getState) => {
  const actualToken = getState().session.token || token;

  dispatch(saveColumsSettings());

  axios
    .post(
      process.env.REACT_APP_SERVER_ORIGIN +
        "/v1/dashboard/columns_settings/listed",
      { selected_columns: selectSettings },
      { headers: { Authorization: `Bearer ${actualToken}` } }
    )

    .then(data => {
      if (data.status === 200) {
        return dispatch(successSaveColumsSettings());
      }
    })
    .catch(error => dispatch(errorSaveColumsSettings(error)));
};

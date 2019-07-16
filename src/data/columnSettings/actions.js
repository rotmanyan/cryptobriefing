import {
  REQUEST_COLUMNS_SETTINGS,
  SUCCESS_COLUMNS_SETTINGS,
  ERROR_COLUMNS_SETTINGS,
  SELECT_COLUMNS_SETTINGS,
  DELETE_SELECT_COLUMNS_SETTINGS,
  SAVE_PARAMS_COLUMNS_SETTINGS,
  SUCCESS_SAVE_PARAMS_COLUMNS_SETTINGS,
  ERROR_SAVE_PARAMS_COLUMNS_SETTINGS,
  CLEAR_SELECT_COLUMS_SETTINGS,
  CHANGE_POSOTION_COLUMS_SETTINGS
} from "./constants";

const requestColumnsSettings = () => ({
  type: REQUEST_COLUMNS_SETTINGS
});

const successColumnsSettings = payload => ({
  type: SUCCESS_COLUMNS_SETTINGS,
  payload
});

const errorColumnsSettings = error => ({
  type: ERROR_COLUMNS_SETTINGS,
  error
});

const selectColumnsSettings = payload => ({
  type: SELECT_COLUMNS_SETTINGS,
  payload
});

const deleteSelectColumnsSettings = payload => ({
  type: DELETE_SELECT_COLUMNS_SETTINGS,
  payload
});

const saveColumsSettings = () => ({
  type: SAVE_PARAMS_COLUMNS_SETTINGS
});

const successSaveColumsSettings = () => ({
  type: SUCCESS_SAVE_PARAMS_COLUMNS_SETTINGS
});

const errorSaveColumsSettings = () => ({
  type: ERROR_SAVE_PARAMS_COLUMNS_SETTINGS
});

const clearSelectSettings = () => ({
  type: CLEAR_SELECT_COLUMS_SETTINGS
});

const changePositionColumsSettings = payload => ({
  type: CHANGE_POSOTION_COLUMS_SETTINGS,
  payload
});

export {
  requestColumnsSettings,
  successColumnsSettings,
  errorColumnsSettings,
  selectColumnsSettings,
  deleteSelectColumnsSettings,
  saveColumsSettings,
  successSaveColumsSettings,
  errorSaveColumsSettings,
  clearSelectSettings,
  changePositionColumsSettings
};

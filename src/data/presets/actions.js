import {
    REQUEST_SELECT_PRESETS,
    REQUEST_SELECT_PRESETS_SUCCESS,
    REQUEST_SELECT_PRESETS_ERROR,

    REQUEST_SAVE_NEW_PRESET,
    REQUEST_SAVE_NEW_PRESET_SUCCESS,
    REQUEST_SAVE_NEW_PRESET_ERROR,

    REQUEST_DELETE_PRESET,
    REQUEST_DELETE_PRESET_SUCCESS,
    REQUEST_DELETE_PRESET_ERROR
} from "./constants";

export const actionTypes = {
    GET_PRESETS_REQUEST: 'GET_PRESETS_REQUEST',
    GET_PRESETS_SUCCESS: 'GET_PRESETS_SUCCESS',
    GET_PRESETS_ERROR: 'GET_PRESETS_ERROR',

    PRESETS_SELECT_REQUEST: 'PRESETS_SELECT_REQUEST',
    REQUEST_SELECT_PRESETS_SUCCESS: 'REQUEST_SELECT_PRESETS_SUCCESS',
    REQUEST_SELECT_PRESETS_ERROR: 'REQUEST_SELECT_PRESETS_ERROR',

    REQUEST_SAVE_NEW_PRESET: 'REQUEST_SAVE_NEW_PRESET',
    REQUEST_SAVE_NEW_PRESET_SUCCESS: 'REQUEST_SAVE_NEW_PRESET_SUCCESS',
    REQUEST_SAVE_NEW_PRESET_ERROR: 'REQUEST_SAVE_NEW_PRESET_ERROR',

    REQUEST_DELETE_PRESET: 'REQUEST_DELETE_PRESET',
    REQUEST_DELETE_PRESET_SUCCESS: 'REQUEST_DELETE_PRESET_SUCCESS',
    REQUEST_DELETE_PRESET_ERROR: 'REQUEST_DELETE_PRESET_ERROR'
}



const getPresetsRequest = () => ({
  type: actionTypes.GET_PRESETS_REQUEST
});

const getPresetsSuccess = payload => ({
  type: actionTypes.GET_PRESETS_SUCCESS,
  payload
});

const getPresetsError = payload => ({
  type: actionTypes.GET_PRESETS_ERROR,
  payload
});

const requestSaveNewPreset = () => ({
  type: REQUEST_SAVE_NEW_PRESET
});

const saveNewPresetSuccess = payload => ({
  type: REQUEST_SAVE_NEW_PRESET_SUCCESS,
  payload
});

const saveNewPresetError = payload => ({
  type: REQUEST_SAVE_NEW_PRESET_ERROR
});

const deletePreset = payload => ({
  type: REQUEST_DELETE_PRESET,
  payload
});

const deletePresetSuccess = payload => ({
  type: REQUEST_DELETE_PRESET_SUCCESS,
  payload
});

const deletePresetError = payload => ({
  type: REQUEST_DELETE_PRESET_ERROR,
  payload
});

const requestSelectPreset = payload => ({
  type: REQUEST_SELECT_PRESETS,
  payload
});

const selectPresetSuccess = payload => ({
  type: REQUEST_SELECT_PRESETS_SUCCESS,
  payload
});

const selectPresetError = payload => ({
  type: REQUEST_SELECT_PRESETS_ERROR,
  payload
});

export {
    getPresetsRequest,
    getPresetsSuccess,
    getPresetsError,

  requestSelectPreset,
  selectPresetSuccess,
  selectPresetError,
  requestSaveNewPreset,
  saveNewPresetSuccess,
  saveNewPresetError,
  deletePreset,
  deletePresetSuccess,
  deletePresetError
};

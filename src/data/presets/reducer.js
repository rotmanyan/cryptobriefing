import {
  REQUEST_SELECT_PRESETS_SUCCESS,
  REQUEST_SAVE_NEW_PRESET_SUCCESS,
  REQUEST_DELETE_PRESET_SUCCESS
} from "./constants";

import { actionTypes } from './actions';

import { SUCCESS_SAVE_PARAMS_COLUMNS_SETTINGS } from "data/columnSettings/constants";

const initState = {
  data: {},
  newPreset: false,
  valuePreset: {},
  error: ""
};

export const presets = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_PRESETS_SUCCESS: {
      const initPreset = state.valuePreset.id
        ? state.valuePreset
        : payload.default[0];
      return { ...state, data: payload, valuePreset: initPreset };
    }
    case REQUEST_SELECT_PRESETS_SUCCESS: {
      return {
        ...state,
        valuePreset: payload
      };
    }
    case SUCCESS_SAVE_PARAMS_COLUMNS_SETTINGS: {
      return {
        ...state,
        newPreset: true,
        valuePreset: { id: 0, name: "Basic *" }
      };
    }
    case REQUEST_SAVE_NEW_PRESET_SUCCESS: {
      return {
        ...state,
        newPreset: false,
        data: {
          ...state.data,
          custom: [...state.data.custom, payload]
        },
        valuePreset: payload
      };
    }

    case REQUEST_DELETE_PRESET_SUCCESS: {
      const newCustom = state.data.custom.filter(
        preset => preset.id !== +payload
      );

      const newValuePreset =
        state.valuePreset.id === +payload
          ? state.data.default[0]
          : state.valuePreset;

      return {
        ...state,
        data: {
          ...state.data,
          custom: newCustom
        },
        valuePreset: newValuePreset
      };
    }

    default:
      return state;
  }
};

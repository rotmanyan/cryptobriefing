import {
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  GET_PROFILE_SETTINGS_SUCCESS,
  UPDATE_PROFILE_SETTINGS_SUCCESS,
  UPDATE_PROFILE_PHOTO_SUCCESS,
  DELETE_PROFILE_SUCCESS,
  UPDATE_PROFILE_PASSWORD_SUCCESS,
  UPDATE_PROFILE_PASSWORD_ERROR,
  HANDLE_MODAL_RESET
} from "./constants";

export const profileState = {
  profile: {},
  settings: {
    newsletter: false,
    desktop_notifications: false,
    mobile_notifications: false,
    camera: false,
    cookies: false
  },
  delete_account: false,
  errorPassword: "",
  statusChangePassword: false,
  modalReset: false
};

export const profileReducer = (state = profileState, { type, payload }) => {
  switch (type) {
    case GET_PROFILE_SUCCESS:
      return { ...state, profile: { ...state.profile, ...payload } };

    case UPDATE_PROFILE_SUCCESS:
      return { ...state, profile: { ...state.profile, ...payload } };

    case GET_PROFILE_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: {
          ...state.settings,
          ...payload
        }
      };

    case UPDATE_PROFILE_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: {
          ...state.settings,
          ...payload
        }
      };

    case DELETE_PROFILE_SUCCESS:
      return {
        ...state,
        delete_account: true
      };

    case UPDATE_PROFILE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          avatar: payload
        }
      };

    case UPDATE_PROFILE_PASSWORD_SUCCESS:
      return {
        ...state,
        errorPassword: "",
        statusChangePassword: true,
        modalReset: false
      };

    case UPDATE_PROFILE_PASSWORD_ERROR: {
      return {
        ...state,
        errorPassword: payload,
        statusChangePassword: false,
        modalReset: true
      };
    }

    case HANDLE_MODAL_RESET: {
      return {
        ...state,
        modalReset: !state.modalReset
      };
    }

    default:
      return { ...state };
  }
};

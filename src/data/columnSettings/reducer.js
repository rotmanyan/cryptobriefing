import {
  SUCCESS_COLUMNS_SETTINGS,
  SELECT_COLUMNS_SETTINGS,
  DELETE_SELECT_COLUMNS_SETTINGS,
  CLEAR_SELECT_COLUMS_SETTINGS,
  CHANGE_POSOTION_COLUMS_SETTINGS
} from "./constants";

const initState = {
  data: [],
  error: "",
  selectSettings: []
};

export const dataColumnsSettings = (state = initState, { type, payload }) => {
  switch (type) {
    case SUCCESS_COLUMNS_SETTINGS:
      const select = payload.column_settings.map(block => {
        return {
          block: block.block,
          items: block.items.map(item => {
            for (let value of payload.current_setting) {
              if (value.column_type === item.column_type) {
                return {
                  ...item,
                  check: true
                };
              }
            }
            return {
              ...item
            };
          })
        };
      });

      return {
        ...state,
        data: [...select],
        selectSettings: payload.current_setting
      };

    case CHANGE_POSOTION_COLUMS_SETTINGS: {
      return {
        ...state,
        selectSettings: payload
      };
    }

    case SELECT_COLUMNS_SETTINGS: {
      const clone = state.selectSettings.some(
        elem => elem.column_type === payload.column_type
      );

      const select = state.data.map(block => {
        return {
          block: block.block,
          items: block.items.map(item => {
            if (item.column_type === payload.column_type) {
              return {
                ...item,
                check: true
              };
            }
            return {
              ...item
            };
          })
        };
      });

      if (!clone) {
        if (state.selectSettings.length <= 7) {
          return {
            ...state,
            selectSettings: [...state.selectSettings, payload],
            data: [...select]
          };
        }
      } else {
        return {
          ...state
        };
      }
      return {
        ...state
      };
    }
    case DELETE_SELECT_COLUMNS_SETTINGS: {
      const deleteSelect = state.data.map(block => {
        return {
          block: block.block,
          items: block.items.map(item => {
            if (item.column_type === payload) {
              return {
                ...item,
                check: false
              };
            }
            return {
              ...item
            };
          })
        };
      });

      const newSelect = state.selectSettings.filter(
        item => item.column_type !== payload
      );
      return {
        ...state,
        selectSettings: [...newSelect],
        data: [...deleteSelect]
      };
    }

    case CLEAR_SELECT_COLUMS_SETTINGS: {
      return { ...state, selectSettings: [] };
    }

    default:
      return state;
  }
};

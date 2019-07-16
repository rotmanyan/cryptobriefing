import {actionTypes} from "./actions";

const chartState = []

export const chartReducer = (state = chartState, {type, payload}) => {
  switch (type) {
    // case actionTypes.GET_CHART_REQUEST:
    //   return []
    case actionTypes.GET_CHART_SUCCESS:
      return [...state, payload.data]
    case actionTypes.GET_CHART_ERROR:
    default:
      return [...state]
  }
}
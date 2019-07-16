import {actionTypes} from './actions'

const selectedButtonsState = {
  addWatch: 'default',
  removeWatch: 'default',
  addPortfolio: 'default',
  exportTransaction: 'default',
  exportData: ''
}

export const selectedButtonsReducer = (state = selectedButtonsState, {type, payload}) => {
  switch (type) {
    case actionTypes.ADD_WATCHER_ERROR:
      return {...state, addWatch: 'error'}
    case actionTypes.REMOVE_WATCHER_ERROR:
      return {...state, removeWatch: 'error'}
    case actionTypes.ADD_TO_PORTFOLIO_ERROR:
      return {...state, addPortfolio: 'error'}
    case  actionTypes.GET_EXPORT_TRANSACTION_ERROR:
      return {...state, exportTransaction: 'error'}
    case actionTypes.GET_EXPORT_TRANSACTION_SUCCESS:
      return console.log(payload, 'payload');
    // return {...state, ...{exportData: payload.data}}

    case actionTypes.ADD_WATCHER_SUCCESS:
    case actionTypes.REMOVE_WATCHER_SUCCESS:
    case actionTypes.ADD_TO_PORTFOLIO_SUCCESS:
    case actionTypes.POST_BUY_COIN_SUCCESS:
    case actionTypes.POST_SELL_COIN_SUCCESS:
    case actionTypes.POST_BUY_COIN_ERROR:
    case actionTypes.POST_SELL_COIN_ERROR:
    default:
      return {...state}
  }
}
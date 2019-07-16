export const ticker = state => state.ticker
export const loader = state => state.loader
export const listedData = state => state.dashboard.listed.dashboard_data
export const listedSelected = state => state.dashboard.listed.selected_fields
export const listedLoading = state => state.dashboard.listed.isLoad
export const icoData = state => state.dashboard.ico.dashboard_data
export const icoSelected = state => state.dashboard.ico.selected_fields
export const stoData = state => state.dashboard.sto.dashboard_data
export const stoSelected = state => state.dashboard.sto.selected_fields

export const coin = state => state.dashboard.listed.coin_details.coin
export const description = state => state.dashboard.listed.coin_details.description
export const keyStatistics = state => state.dashboard.listed.coin_details.keyStatistics
export const news = state => state.dashboard.listed.coin_details.news
export const loadingDetails = state => state.dashboard.listed.coin_details.load

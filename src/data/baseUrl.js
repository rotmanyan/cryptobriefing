export const baseUrl = process.env.REACT_APP_SERVER_ORIGIN;
export const token = localStorage.getItem('token');

export const urlSignIn = baseUrl + '/session';
export const urlSignUp = baseUrl + '/registration';
export const urlSignOut = baseUrl + '/session';
export const urlPassword = baseUrl + '/password';

export const urlCoins = baseUrl + '/v1/coin/tickers';
export const urlNewsTicker = baseUrl + '/v1/coin/latest_prices';

export const urlDashboardListed = baseUrl + '/v1/dashboard/listed';
export const urlDashboardICO = baseUrl + '/v1/dashboard/ico';
export const urlDashboardSTO = baseUrl + '/v1/dashboard/sto';

export const urlAddToWatchlist = baseUrl + '/v1/coin/add_to_watchlist';
export const urlRemoveFromWatchlist =
  baseUrl + '/v1/coin/remove_from_watchlist';
export const urlAddToPortfolio = baseUrl + '/v1/portfolio/add';
export const urlBuyCoin = baseUrl + '/v1/portfolio/buy_coin';
export const urlSellCoin = baseUrl + '/v1/portfolio/sell_coin';

export const urlAvailable = baseUrl + '/v1/portfolio/available';
export const urlAvailableStatistics =
  baseUrl + '/v1/portfolio/available/statistics';

export const urlTransactions = baseUrl + '/v1/portfolio/transactions';
export const urlWatchlist = baseUrl + '/v1/portfolio/watchlist';

export const urlListedCoinDetails = baseUrl + '/v1/coin/detailed';
export const urlExportTransactions =
  baseUrl + '/v1/portfolio/export_transactions';
export const urlSearch = baseUrl + '/v1/coin/search_by_name';

export const urlCharts = baseUrl + '/v1/coin/price_chart';

export const urlProfile = baseUrl + '/v1/coin/search_by_name'; //??????????????

export const urlDashboardPresetsListed =
  baseUrl + '/v1/dashboard/user_presets/listed';

// export const urlDashboardListedSORT = urlDashboardListed + '?page=10&column_name=price&order=asc/desc'
// export const baseUrl = 'http://192.168.88.121:3000'
//REACT_APP_SERVER_ORIGIN="http://192.168.88.18:3000"
// "https://192.168.88.214:3000"
// export const baseUrl = env.process.REACT_APP_SERVER_ORIGIN//''https://server.cryptobriefing.maxiemind.com'/'
// export const headerDefault = {Authorization: `Bearer ${token}`}
// REACT_APP_SERVER_ORIGIN="https://server.cryptobriefing.maxiemind.com"
// NODE_PATH=src

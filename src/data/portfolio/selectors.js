export const availableData = state => state.portfolio.available.available
export const availableDataFields = state => state.portfolio.available.selected_fields
export const availableStatistics = state => state.portfolio.statistics.available

export const transactionData = state => state.portfolio.transaction.transactions
export const transactionDataFields = state => state.portfolio.transaction.selected_fields

export const watchlistData = state => state.portfolio.watchlist.coins
export const watchlistDataFields = state => state.portfolio.watchlist.selected_fields
import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as selectors from 'data/portfolio/selectors'
import {getPortfolioWatchlist} from 'data/portfolio/operation'
import TableCoins from "../tableCoins/TableCoins";

class Watchlist extends Component {
  componentDidMount() {
    this.props.watch()
  }

  render() {
    const {watchlistData, watchlistDataFields} = this.props

    return watchlistData
      ? <TableCoins
        data={watchlistData}
        selected_fields={watchlistDataFields}
        currency
        component='watchlist'
        link
      />
      : <></>
  }
}

const MSTP = state => ({
  watchlistData: selectors.watchlistData(state),
  watchlistDataFields: selectors.watchlistDataFields(state)
})

const MDTP = {
  watch: getPortfolioWatchlist
}

export default connect(MSTP, MDTP)(Watchlist);
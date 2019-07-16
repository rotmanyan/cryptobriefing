import React, {Component} from "react";
import TableCoins from "../tableCoins/TableCoins";
import './available.scss'
import {connect} from "react-redux";
import {availableData, availableDataFields, availableStatistics} from "data/portfolio/selectors";
import {getPortfolioAvailable} from "data/portfolio/operation";
import {getAvailableStatistics} from "../../data/portfolio/operation";

class Available extends Component {
  componentDidMount() {
    const {getAvailable, getAvailableStatistics} = this.props
    getAvailableStatistics()
    getAvailable()
  }

  render() {
    const {available, selected_fields, statistics} = this.props
    return (
      <>
        <TableCoins
          data={available}
          selected_fields={selected_fields}
          statistics={statistics}
          currency
          option
          top
          buySell
          exportButtton
          link
        />
      </>
    );
  }
}

const MSTP = state => ({
  available: availableData(state),
  selected_fields: availableDataFields(state),
  statistics: availableStatistics(state)
});

const MDTP = {
  getAvailable: getPortfolioAvailable,
  getAvailableStatistics: getAvailableStatistics
};

export default connect(MSTP, MDTP)(Available)

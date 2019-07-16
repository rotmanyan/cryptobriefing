import React, {Component} from 'react';
import * as selectors from "data/portfolio/selectors";
import {getPortfolioTransaction} from "data/portfolio/operation";
import TableCoins from "../tableCoins/TableCoins";

import {connect} from "react-redux";

class Transaction extends Component {
  componentDidMount() {
    const {getTransaction} = this.props

    getTransaction()
  }

  render() {
    const {data, selected_fields} = this.props
    return (
      <>
        <TableCoins
          data={data}
          selected_fields={selected_fields}
          currency
          option
          transaction
          portfolio
          link
        />
      </>
    );
  }
}

const MSTP = state => ({
  data: selectors.transactionData(state),
  selected_fields: selectors.transactionDataFields(state)
})

const MDTP = {
  getTransaction: getPortfolioTransaction
}

export default connect(MSTP, MDTP)(Transaction);
import React, { Component } from 'react';
import TableCoins from '../tableCoins/TableCoins';
import { connect } from 'react-redux';
import * as selectors from '../../data/dashboard/selectors';
import './listed.scss';

class Listed extends Component {
  state = {
    page: 1,
    parameter: 'name',
    order: 'asc',
  };

  changeParameter = (parameter, order) =>
    this.setState({ parameter: parameter, order: order, page: 1 });

  render() {
    const { data, selected_fields } = this.props;
    return (
      <>
        <TableCoins
          data={data}
          selected_fields={selected_fields}
          search
          columns
          addPortfolio
          component='listed'
          link
          infinity
        />
      </>
    );
  }
}

const MSTP = state => ({
  data: selectors.listedData(state),
  selected_fields: selectors.listedSelected(state),
  listedLoad: selectors.listedLoading(state),
  loadingPage: selectors.loadingDetails(state),
});

export default connect(MSTP)(Listed);

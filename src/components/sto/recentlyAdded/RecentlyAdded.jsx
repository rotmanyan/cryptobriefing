import React, {Component} from 'react';
import TableCoins from "../../tableCoins/TableCoins";
import {getDashboardSTO} from 'data/dashboard/operation';
import * as selectors from 'data/dashboard/selectors';
import {connect} from "react-redux";

class RecentlyAdded extends Component {
  state = {
    firstName: '/dashboard',
    secondName: '/sto/',
    arr: ['upcoming', 'ongoing', 'recently added', 'ended', 'all']
  }

  componentDidMount() {
    this.props.getStoData('recently_added')
  }

  render() {
    const {data, selected_fields} = this.props

    return (
      <TableCoins
        navigation={this.state}
        data={data}
        selected_fields={selected_fields}
        search
        columns
      />
    );
  }
}

const MSTP = state => ({
  data: selectors.stoData(state),
  selected_fields: selectors.stoSelected(state)
})

const MDTP = {
  getStoData: getDashboardSTO
}

export default connect(MSTP, MDTP)(RecentlyAdded)
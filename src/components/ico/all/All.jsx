import React, {Component} from 'react';
import TableCoins from "../../tableCoins/TableCoins";
import {getDashboardICO} from 'data/dashboard/operation'
import * as selectors from 'data/dashboard/selectors';
import {connect} from "react-redux";

class All extends Component {
  state = {
    firstName: '/dashboard',
    secondName: '/ico/',
    arr: ['upcoming', 'ongoing', 'recently added', 'ended', 'all']
  }

  componentDidMount() {
    this.props.getIcoData('all')
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
        presets='ico'
      />
    )
  }
}

const MSTP = state => ({
  data: selectors.icoData(state),
  selected_fields: selectors.icoSelected(state)
})

const MDTP = {
  getIcoData: getDashboardICO
}

export default connect(MSTP, MDTP)(All)
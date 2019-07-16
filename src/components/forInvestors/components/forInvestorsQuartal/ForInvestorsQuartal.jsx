import React, {Component} from 'react';
import Chart from "../../../chart/Chart";
import * as selector from "../../../../data/charts/selectors";
import {getChart} from "../../../../data/charts/operation";
import {connect} from "react-redux";

class ForInvestorsQuartal extends Component {
  state = {
    firstName: '/charts',
    secondName: '/forInvestors/',
    arr: ['1D', '7D', '1M', 'Q', 'HY', '1Y', 'ALL'],
    searchChartId: [23],
  }

  componentDidMount() {
    const {getChart} = this.props
    getChart(this.state.searchChartId)
  }

  setSearchChartId = id => this.setState({searchChartId: [...this.state.searchChartId, id]})

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {searchChartId} = this.state
    if (prevState.searchChartId !== searchChartId) getChart(searchChartId)
  }

  render() {
    const {data, getChart} = this.props
    const {searchChartId} = this.state

    return (
      <>
        <Chart
          data={data}
          setSearchChartId={this.setSearchChartId}
          searchChartId={searchChartId}
          getChart={getChart}
          navigationRoutes={this.state}
        />
      </>
    );
  }
}

const MSTP = state => ({
  data: selector.charts(state),
})

const MDTP = {
  getChart
}
export default connect(MSTP, MDTP)(ForInvestorsQuartal)
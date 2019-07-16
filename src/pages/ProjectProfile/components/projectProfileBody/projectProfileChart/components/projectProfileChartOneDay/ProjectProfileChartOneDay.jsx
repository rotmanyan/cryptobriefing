import React, {Component} from 'react';
import Chart from 'components/chart/Chart'
import {getChart} from 'data/charts/operation'
import * as selectors from 'data/dashboard/selectors'
import * as selector from 'data/charts/selectors'
import {connect} from 'react-redux'

class ProjectProfileChartOneDay extends Component {
  state = {
    searchChartId: [this.props.coin.id],
    navigationRoutes: {
      firstName: '/projectProfile',
      secondName: '/',
      arr: ['1D', '7D', '1M', 'Q', 'HY', '1Y', 'ALL'],
    }
  }

  setSearchChartId = id => this.setState({searchChartId: [...this.state.searchChartId, id]})

  componentDidMount() {
    const {getChart} = this.props
    getChart(this.state.searchChartId)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {searchChartId} = this.state
    if (prevState.searchChartId !== searchChartId) getChart(searchChartId)
  }

  render() {
    const {data, getChart} = this.props
    const {searchChartId, navigationRoutes} = this.state


    return (
      <>
        <Chart
          data={data}
          setSearchChartId={this.setSearchChartId}
          searchChartId={searchChartId}
          getChart={getChart}
          navigationRoutes={navigationRoutes}
        />
      </>
    );
  }
}

const MSTP = state => ({
  coin: selectors.coin(state),
  data: selector.charts(state),
})

const MDTP = {
  getChart
}
export default connect(MSTP, MDTP)(ProjectProfileChartOneDay)
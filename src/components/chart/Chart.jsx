import React, {Component} from 'react'
import ChartHead from "./components/chartHead/ChartHead";
import ChartBody from "./components/chartBody/ChartBody";
import './charts.scss'

class Chart extends Component {
  state = {
    selectedCoins: [],
    colorsStroke: ['#000000', '#0d27d1', '#f0009e', '#ff2400', '#FF6400', '#0AFF00', '#00ffa0', '#00ddff']
  }

  componentDidMount() {
    const {searchChartId} = this.props;
    this.setState({selectedCoins: [...this.state.selectedCoins, searchChartId]})
  }

  componentDidUpdate(prevProps, prevState) {
    const {searchChartId} = this.props
    const {selectedCoins} = this.state

    if (!selectedCoins.includes(searchChartId)) this.setState({selectedCoins: [...selectedCoins, searchChartId]})
  }

  render() {
    const {data, setSearchChartId, navigationRoutes} = this.props
    const {
      colorsStroke,
      // selectedCoins
    } = this.state

    return (
      <>
        <div className="container--chart">
          <ChartHead
            data={data}
            setSearchChartId={setSearchChartId}
            // selectedCoins={selectedCoins}
            colorsStroke={colorsStroke}
            navigationRoutes={navigationRoutes}
          />
          <ChartBody data={data} colorsStroke={colorsStroke}/>
        </div>
      </>
    )
  }
}

export default Chart
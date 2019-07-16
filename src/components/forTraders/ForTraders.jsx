import React, {Component} from 'react';
// import TradingViewWidget from 'react-tradingview-widget';
import ChartHead from '../../components/chart/components/chartHead/ChartHead';

class ForTraders extends Component {
  state = {
    selectedSymbol: 'COINBASE:BTCUSD',
    navigationRoutes: {
      firstName: '/charts',
      secondName: '/forTraders/',
      arr: ['1D', '7D', '1M', 'Q', 'HY', '1Y', 'ALL'],
    }
  };

  _ref = React.createRef();

  initTradingViewWidget = () => {
    const script = document.createElement('script');
    const secondScript = document.createElement('script');
    script.src = 'https://d33t3vvu2t2yu5.cloudfront.net/tv.js';
    script.type = 'text/javascript';
    secondScript.type = 'text/javascript';
    secondScript.innerHTML = `
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(
        () =>
          new TradingView.widget({
            width: 980,
            height: 610,
            symbol: 'COINBASE:BTCUSD',
            interval: '3',
            timezone: 'Etc/UTC',
            theme: 'Light',
            style: '1',
            locale: 'en',
            toolbar_bg: 'rgba(255, 255, 255, 1)',
            enable_publishing: false,
            hide_top_toolbar: true,
            withdateranges: true,
            allow_symbol_change: true,
            save_image: false,
            studies: ['BB@tv-basicstudies', 'BollingerBandsR@tv-basicstudies'],
            container_id: 'tradingview-widget-container__widget',
          }),
        1000,
      );
    });
    `;
    this._ref.current.appendChild(script);
    this._ref.current.appendChild(secondScript);
  };

  componentDidMount() {
    this.initTradingViewWidget();
  }

  render() {
    const {
      // selectedSymbol,
      navigationRoutes
    } = this.state;
    return (
      <div className='forInvestors'>
        <div className='container--chart'>
                    <ChartHead
            // data={data}
            // setSearchChartId={setSearchChartId}
            // selectedCoins={selectedCoins}
            // colorsStroke={colorsStroke}
            navigationRoutes={navigationRoutes}
          />

          <div className='tradingview-widget-container' ref={this._ref}>
            <div
              className='tradingview-widget-container__widget'
              id='tradingview-widget-container__widget'
            />
          </div>
          {/* <TradingViewWidget
            symbol={selectedSymbol}
            locale='en'
            class='qweqweqweqwe'
            // autosize
          /> */}
        </div>
      </div>
    );
  }
}

export default ForTraders;

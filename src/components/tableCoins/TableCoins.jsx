import React, {Component} from 'react';
import {connect} from 'react-redux';
import WindowRemoveWatch from 'components/windowRemoveWatch/WindowRemoveWatch';
import {TopTableCoins} from './components/topTableCoins/TopTableCoins';
import {HeadTableTableCoins} from './components/headTableTableCoins/HeadTableTableCoins';
import {OptionTableCoins} from './components/optionTableCoins/OptionTableCoins';
import {BodyTableTableCoins} from './components/bodyTableTableCoins/BodyTableTableCoins';

import {getCoinDetails} from 'data/dashboard/operation';
import {
  buyCoin,
  sellCoin,
  addWatcher,
  removeWatcher,
  addToPortfolio,
  getExportTransaction,
} from 'data/selectedButtons/operation';
import {search} from 'data/search/operation';
import * as selectors from 'data/search/selectors';
import * as selectorUser from 'data/signUser/selectors';
import Navigation from './components/navigation/Navigation';
import ColumnsSettings from '../headerTable/components/ColumnsSettings/ColumnsSettings';
import {getDashboardListed} from '../../data/dashboard/operation';
import {clearDashboardListedRequest} from '../../data/dashboard/actions';

class TableCoins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: '',
      target: null,
      arrayChecked: [],
      arrayWatched: [],
      searchValue: '',
      isVisibleColumns: false,
      page: 1,
      isLoading: false,
    };
    this.sendRequest = this.sendRequest.bind(this);
  }

  componentDidMount() {
    const {data, component} = this.props;

    if (data && component === 'watchlist') {
      let a = [];
      data.map(el => a.push(el.id));
      this.setState({arrayWatched: a});
    }
    this.setState({page: 1});
  }

  componentDidUpdate(prevProps, prevState) {
    const {searchValue, page} = this.state;
    const {searchRequest, getListedData, component} = this.props;

    if (prevState.searchValue !== searchValue) {
      if (searchValue.length > 2) searchRequest(searchValue);
    }
    if (prevState.page !== page && page > 1 && component === 'listed')
      getListedData(page);
  }

  changePage = () => {
    this.setState({page: this.state.page + 1});
  };

  sendRequest = () => {
    this.changePage();
    this.setState({isLoading: true}, () =>
      setTimeout(this.setState({isLoading: false}), 0),
    );
  };

  setSearchValue = e => this.setState({searchValue: e.target.value});
  openSettings = () =>
    this.setState({isVisibleColumns: !this.state.isVisibleColumns});
  watchSetting = () =>
    this.state.isVisibleColumns ? (
      <ColumnsSettings openSettings={this.openSettings}/>
    ) : null;

  askBlock = () => {
    const {remove, component} = this.props;
    const {target, open, arrayWatched} = this.state;

    if (open && open.length > 0)
      return (
        <WindowRemoveWatch
          removeWatchList={this.removeWatchList}
          target={target}
          remove={remove}
          component={component}
          arrayWatched={arrayWatched}
        />
      );
    else return null;
  };

  addWatchList = i => {
    const {arrayWatched} = this.state;
    this.setState({arrayWatched: [...arrayWatched, i]}, this.props.add(i));
  };

  removeWatchList = i => {
    const {component} = this.props;
    const {arrayWatched} = this.state;

    if (i) this.setState({open: component, target: i}, () => this.askBlock());
    if (i === null) this.setState({open: '', target: i});
    this.setState({arrayWatched: arrayWatched.filter(e => e !== i)});
  };

  addToken = (e, i) => {
    const {arrayChecked} = this.state;
    const {addToPortfolio} = this.props;

    e.stopPropagation();

    this.setState({arrayChecked: [...arrayChecked, i]}, addToPortfolio(i));
  };

  directToCoinDetails = i => this.props.coinDetails(i);

  componentWillUnmount() {
    this.props.cleanListedData();
  }

  render() {
    const {
      data,
      selected_fields,
      statistics,
      option,
      top,
      columns,
      search,
      buySell,
      currency,
      buy,
      sell,
      addPortfolio,
      coinDetails,
      navigation,
      transaction,
      isAuth,
      searchList,
      exportTransaction,
      exportButton,
      infinity,
      link,
      buyCoinModal,
    } = this.props;

    const {arrayChecked, arrayWatched, searchValue, isLoading} = this.state;
    return (
      <div className='heightBox'>
        {data || selected_fields ? (
          <>
            {this.askBlock()}
            <div className='listed__wrapper'>
              {top && statistics && <TopTableCoins statistics={statistics}/>}
              <div className='listed__bar'>
                <Navigation
                  currency={currency}
                  navigation={navigation}
                  search={search}
                  searchList={searchList}
                  searchValue={searchValue}
                  watchSetting={this.watchSetting}
                  openSettings={this.openSettings}
                  columns={columns}
                  isAuth={isAuth}
                  setSearchValue={this.setSearchValue}
                  directToCoinDetails={this.directToCoinDetails}
                />
              </div>
              <div className='listBoard__wrapper'>
                <HeadTableTableCoins
                  selected_fields={selected_fields}
                  buySell={buySell}
                />
                {data && (
                  <BodyTableTableCoins
                    data={data}
                    selected_fields={selected_fields}
                    transaction={transaction}
                    addPortfolio={addPortfolio}
                    addWatchList={this.addWatchList}
                    removeWatchList={this.removeWatchList}
                    buySell={buySell}
                    buy={buy}
                    coinDetails={coinDetails}
                    sell={sell}
                    arrayChecked={arrayChecked}
                    arrayWatched={arrayWatched}
                    directToCoinDetails={this.directToCoinDetails}
                    addToken={this.addToken}
                    infinity={infinity}
                    sendRequest={this.sendRequest}
                    isLoading={isLoading}
                    isAuth={isAuth}
                    link={link}
                    buyCoinModal={buyCoinModal}
                    statistics={statistics}
                  />
                )}
              </div>
              {option && (
                <OptionTableCoins
                  exportButton={exportButton}
                  exportTransaction={exportTransaction}
                  height={transaction}
                />
              )}
            </div>
          </>
        ) : (
          <div className='lds-roller'>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
          </div>
        )}
      </div>
    );
  }
}

const MSTP = state => ({
  searchList: selectors.searchList(state),
  isAuth: selectorUser.isAuthenticated(state),
});

const MDTP = {
  buy: buyCoin,
  sell: sellCoin,
  add: addWatcher,
  remove: removeWatcher,
  coinDetails: getCoinDetails,
  addToPortfolio: addToPortfolio,
  searchRequest: search,
  exportTransaction: getExportTransaction,
  getListedData: getDashboardListed,
  cleanListedData: clearDashboardListedRequest,
};

export default connect(
  MSTP,
  MDTP,
)(TableCoins);

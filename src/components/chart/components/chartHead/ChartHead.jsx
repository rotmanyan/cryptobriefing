import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import DropDownBlack from '../../../dropDownBlack/DropDownBlack';
import SelectedCoin from '../../../selectedCoin/SelectedCoin';
import Search from '../../../tableCoins/components/search/Search';
import searchIcon from '../../../../assets/icons/ic-search-grey.svg';
import './chartHeadStyles.scss';

import * as selectors from 'data/search/selectors';
import { search } from 'data/search/operation';
import { connect } from 'react-redux';

class ChartHead extends Component {
  state = {
    isSearchOpen: false,
    searchValue: '',
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { searchValue } = this.state;
    const { searchRequest } = this.props;
    if (prevState.searchValue !== this.state.searchValue)
      searchRequest(searchValue);
  }

  setSearchValue = e => this.setState({ searchValue: e.target.value });
  showSearch = () => this.setState({ isSearchOpen: !this.state.isSearchOpen });

  render() {
    const {
      data,
      colorsStroke,
      searchList,
      setSearchChartId,
      navigationRoutes,
    } = this.props;

    const { isSearchOpen, searchValue } = this.state;
    return (
      <div className='chartHead'>
        <section className='chartHead__wrapper'>
          <div className='chartHead__dnd'>
            <DropDownBlack name='Linear' />
            <DropDownBlack name='Price' />
            <DropDownBlack name='Statistics' />
            <DropDownBlack name='News' />
            <DropDownBlack name='Currency' />
          </div>
          <div className='icoSto__routingBox chartHead__routingBox'>
            <DropDownBlack name='Period' />
            {navigationRoutes.arr.map((el, id) => (
              <NavLink
                key={id}
                className='navigation__item navigation__item--inversion'
                activeClassName='navigation__item--inversionActive'
                to={
                  navigationRoutes.firstName +
                  navigationRoutes.secondName +
                  el
                    .split(' ')
                    .join('')
                    .toLowerCase()
                }
              >
                {el}
              </NavLink>
            ))}
          </div>
        </section>
        <section className='chartHead__selectedMenu'>
          <img
            src={searchIcon}
            onClick={this.showSearch}
            alt='search'
            className='chartHead__icon'
          />
          {isSearchOpen ? (
            <Search
              dnd
              searchValue={searchValue}
              searchList={searchList}
              showSearch={this.showSearch}
              setSearchValue={this.setSearchValue}
              isSearchOpen={isSearchOpen}
              setSearchChartId={setSearchChartId}
            />
          ) : null}
          {data &&
            data.map((item, index) => (
              <SelectedCoin
                colorsStroke={colorsStroke}
                key={index}
                id={index}
                data={{
                  name: item.name,
                  price: item.prices[item.prices.length - 1].current_price,
                  id: item.prices[item.prices.length - 1].id,
                }}
              />
            ))}
          {/*<SelectedCoin data={dataSec} close/>*/}
        </section>
      </div>
    );
  }
}

const MSTP = state => ({
  searchList: selectors.searchList(state),
});
const MDTP = {
  searchRequest: search,
};
export default connect(
  MSTP,
  MDTP,
)(ChartHead);

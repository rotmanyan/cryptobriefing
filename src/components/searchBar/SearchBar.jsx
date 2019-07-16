import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import '../../styles/searchBar.scss'

import glass from 'assets/icons/glass.svg'
import icSettings from 'assets/icons/ic-settings.svg'
import Presets from "../Presets/Presets";
import ColumnsSettings from '../headerTable/components/ColumnsSettings/ColumnsSettings'
import * as selectors from 'data/search/selectors'
import * as selectorUser from 'data/signUser/selectors'
import {search} from 'data/search/operation'

class SearchBar extends Component {
  state = {
    isVisible: false,
    searchValue: ''
  }
  openSettings = () => this.setState({isVisible: !this.state.isVisible})
  sendValue = e => this.setState({searchValue: e.target.value})
  watchSetting = () => this.state.isVisible ? <ColumnsSettings openSettings={this.openSettings}/> : null

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {searchValue} = this.state
    const {searchRequest} = this.props
    if (prevState.searchValue !== searchValue) {
      if (searchValue.length > 2) searchRequest(searchValue)
    }
  }

  mapListBySearch = () => {
    const {searchList, getCoinDetails} = this.props
    const {searchValue} = this.state

    if (searchValue.length > 2)
      return <div className="searchList__list">
        {searchList.length
          ? searchList.map((el, index) =>
            <Link
              to='/projectProfile'
              className="searchList__item"
              key={index}
              onClick={() => getCoinDetails(el.id)}
            >
              <span className='searchList__symbol'>{el.symbol}</span>
              <span className='searchList__name'>{el.name}</span>
            </Link>
          )
          : <p className="searchList__item searchList__item--block">No match search...</p>
        }
      </div>
  }

  render() {
    const {isAuth} = this.props
    const {searchValue} = this.state

    return (
      <div className='listed__bar'>
        {this.watchSetting()}
        <div className='listed__search'>
          <img className='listed__label' src={glass} alt='glass'/>
          <div className='wrapper-search'>
            <input
              type='text'
              id='search'
              placeholder='Search token'
              autoComplete='false'
              className='listed__input'
              onChange={this.sendValue}
              value={searchValue}
            />
            {this.mapListBySearch()}
          </div>
        </div>
        <div className='listed__dropDown'>
          <Presets/>
          {isAuth ? <button
            onClick={this.openSettings}
            value='listedIcSettings'
            className='listed__columnsSettings'
          >
            Columns Settings
            <img
              defaultValue='icSettings'
              className='listed__columnsSettings--icon'
              src={icSettings}
              alt='icSettings'
            />
          </button> : null}
        </div>
      </div>
    )
  }
}

const MSTP = state => ({
  searchList: selectors.searchList(state),
  isAuth: selectorUser.isAuthenticated(state)
})

const MDTP = {
  searchRequest: search
}

export default connect(MSTP, MDTP)(SearchBar)
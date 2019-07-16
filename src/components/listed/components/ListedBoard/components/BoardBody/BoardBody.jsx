import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import '../../../../../../styles/boardBody.scss'

import {getCoinDetails} from 'data/dashboard/operation'
import {addWatcher, removeWatcher, addToPortfolio} from 'data/selectedButtons/operation'
import WindowRemoveWatch from "components/windowRemoveWatch/WindowRemoveWatch";

import visible from 'assets/icons/visible.svg'
import invisible from 'assets/icons/invisible.svg'
import checked from 'assets/icons/ic-tick.svg'

class BoardBody extends Component {
  state = {
    open: '',
    target: null,
    arrayChecked: [],
    arrayWatched: [],
    isLoading: false
  }

  sendRequest = () => {
    const {changePage} = this.props
    changePage()

    this.setState({isLoading: true}, () => setTimeout(this.setState({isLoading: false}), 10000))
  }

  askBlock = () => {
    const {remove} = this.props
    const {target, open} = this.state

    if (open === 'removeWindow')
      return <WindowRemoveWatch
        removeWatchList={this.removeWatchList}
        target={target}
        remove={remove}
      />
  }

  addWatchList = i => {
    const {arrayWatched} = this.state
    this.setState({arrayWatched: [...arrayWatched, i]}, this.props.add(i))
  }

  removeWatchList = i => {
    if (i) this.setState({open: 'removeWindow', target: i}, () => this.askBlock())
    if (i === null) this.setState({open: null, target: null})
    this.setState({arrayWatched: []})
  }

  addToken = (e, i) => {
    const {arrayChecked} = this.state
    const {addProfile} = this.props

    e.stopPropagation()

    this.setState({arrayChecked: [...arrayChecked, i]}, addProfile(i))
  }

  directToCoinDetails = (i) => this.props.getCoinDetails(i)

  onWriteBoard() {
    const {items} = this.props
    const {arrayChecked, arrayWatched} = this.state

    return items.selected_fields.map((el, index) => (
      <ul className='boardBody__list' key={index}>{
        items.dashboard_data.map((item, id) =>
          el.column_type.toLowerCase() === 'token'
            ? (
              <li
                className={`boardBody__item boardBody__item--token ${item.inPortfolio || arrayChecked.includes(item.id) ? 'bgct' : ''}`}
                key={id}
                onClick={() => {
                  this.directToCoinDetails(item.id)
                }}>
                <img
                  className='boardBody__img--token'
                  alt={item[el.column_type].symbol}
                  src={item[el.column_type].icon}
                />
                <div className="tokenNameBox">
              <span className='boardBody__text boardBody__text--bold'>
                {item[el.column_type].name}
              </span>
                  <span className='boardBody__text'>
                {item[el.column_type].symbol}
              </span>
                </div>
                {item.inPortfolio || arrayChecked.includes(item.id)
                  ? <img src={checked} alt='checked' className="iconChecked"/>
                  : <span onClick={e => {
                    this.addToken(e, item.id)
                  }} className="buttonSmall">Add</span>
                }
              </li>)
            : el.column_type.toLowerCase() === 'trend'
            ? (<Link to='/projectProfile' onClick={() => this.directToCoinDetails(item.id)}
                     className={`cursor bottom-line  ${item.inPortfolio || arrayChecked.includes(item.id) ? 'bgct' : ''}`}
                     key={id}>
              <img
                className='boardBody__img'
                alt={id}
                src={`${process.env.REACT_APP_SERVER_ORIGIN}${
                  item[el.column_type]
                  }`}
              />
            </Link>)
            : el.column_type.toLowerCase() === 'watch'
              ? item[el.column_type] || arrayWatched.includes(item.id)
                ? (<li
                  className={`bottom-line  ${item.inPortfolio || arrayChecked.includes(item.id) ? 'bgct' : ''}`}
                  key={id}>
                  <img
                    className='boardBody__img boardBody__watch'
                    alt={id}
                    onClick={() => this.removeWatchList(item.id)}
                    src={visible}
                  />
                </li>)
                : (<li
                  className={`bottom-line  ${item.inPortfolio || arrayChecked.includes(item.id) ? 'bgct' : ''}`}
                  key={id}>
                  <img
                    className='boardBody__img boardBody__watch'
                    alt={id}
                    onClick={() => this.addWatchList(item.id)}
                    src={invisible}
                  />
                </li>)
              : (<Link to='/projectProfile' onClick={() => this.directToCoinDetails(item.id)}
                       className={`boardBody__item  ${item.inPortfolio || arrayChecked.includes(item.id) ? 'bgct' : ''}`}
                       key={id}>
                {item[el.column_type]}
              </Link>))
      } </ul>
    ))
  }

  render() {
    const {open} = this.state
    return (
      <div className="boardBody__wrapper">
        <div>{this.onWriteBoard()}</div>
        {open ? this.askBlock() : null}
      </div>
    )
  }
}


const MDTP = {
  add: addWatcher,
  remove: removeWatcher,
  coinDetails: getCoinDetails,
  addProfile: addToPortfolio
}

export default connect(null, MDTP)(BoardBody)

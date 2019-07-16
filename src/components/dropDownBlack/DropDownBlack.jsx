import React, {Component} from 'react';
import periodIcon from 'assets/icons/calendar.svg'
import arrowIcon from 'assets/icons/ic-select.svg'
import newsIcon from '../../assets/icons/ic_news_inactive.svg'
import './dropDownBlack.scss'

class DropDownBlack extends Component {
  state = {
    containerName: 'currency',
    containerIsOpen: false,
    containerClicked: false
  }

  changeState = value => this.setState({
    containerIsOpen: !this.state.containerIsOpen,
    containerName: value,
    containerClicked: true
  })

  writeDnD = () => {
    const {name} = this.props

    if (name.toLowerCase() === 'period') {
      const array = ['usd', 'eur', 'uah']
      return (
        <>
          <div className="dropDownBox__select dropDownBox__select--withIcon"
               onClick={() => this.changeState(name.toLowerCase())}>
            <img src={periodIcon} alt={name}/>
            <p>{name}</p>
            <img src={arrowIcon} alt={name}/>
          </div>
          {this.configDnD(name.toLowerCase(), array)}
        </>
      )
    }
    if (name.toLowerCase() === 'news') {
      const array = ['usd', 'eur', 'uah']
      return (
        <>
          <div className="dropDownBox__select dropDownBox__select--withIcon"
               onClick={() => this.changeState(name.toLowerCase())}>
            <img src={newsIcon} alt={name}/>
            <p>{name}</p>
            <img src={arrowIcon} alt={name}/>
          </div>
          {this.configDnD(name.toLowerCase(), array)}
        </>
      )
    }
    if (name.toLowerCase() === 'currency') {
      const array = ['usd', 'eur', 'uah']
      return (
        <>
          <div className="dropDownBox__select" onClick={() => this.changeState(name.toLowerCase())}>
            <p>{name}</p>
            <img src={arrowIcon} alt={name}/>
          </div>
          {this.configDnD(name.toLowerCase(), array)}
        </>
      )
    } else {
      const array = ['usd', 'eur', 'uah']

      return (<div className='dropDownBox'>
        <div className="dropDownBox__select" onClick={() => this.changeState(name.toLowerCase())}>
          <p>{name}</p>
          <img src={arrowIcon} alt={name}/>
        </div>
        {this.configDnD(name.toLowerCase(), array)}
      </div>)
    }
  }

  configDnD = (title, array) => {
    const {containerName, containerIsOpen} = this.state

    if (title === containerName) {
      return (
        <div className='dropDownContainer'>
          {containerIsOpen ? array.map((el, id) => (
            <div className='dropDownContainer__item' key={id}>{el.toUpperCase()}</div>
          )) : null}
        </div>
      )
    } else return (null)
  }

  render() {
    const {containerClicked} = this.state
    return (
      <>
        <div className={`${containerClicked ? 'dropDownBox dropDownBox--border' : 'dropDownBox'}`}>
          {this.writeDnD()}
        </div>
      </>
    );
  }
}

export default DropDownBlack;
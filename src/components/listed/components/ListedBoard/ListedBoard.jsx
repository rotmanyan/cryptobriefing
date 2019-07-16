import React, {Component} from 'react'
import './listedBoard.scss'
import Header from 'components/headerTable/Header'
import BoardBody from './components/BoardBody/BoardBody'
import ColumnsSettings from 'components/headerTable/components/ColumnsSettings/ColumnsSettings'

class ListedBoard extends Component {
  state = {
    isVisible: false
  }

  openSettings = () => this.setState({isVisible: !this.state.isVisible})

  watchSetting = () => {
    const {isVisible} = this.state
    return isVisible && <ColumnsSettings openSettings={this.openSettings}/>
  }

  selectColumnItem = e => console.log(e.target.title, '---- title from head')

  render() {
    const {
      changeParameter,
      changePage,
      getCoinDetails,
      page,
      dbArr,
      dbArr: {selected_fields}
    } = this.props

    return (
      <div className='listBoard__wrapper'>
        <Header
          changeParameter={changeParameter}
          selectColumnItem={this.selectColumnItem}
          openSettings={this.openSettings}
          selected_fields={selected_fields}
        />
        {this.watchSetting()}
        <BoardBody
          getCoinDetails={getCoinDetails}
          page={page}
          changePage={changePage}
          items={dbArr}
        />
      </div>
    )
  }
}

export default ListedBoard

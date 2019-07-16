import React, {Component} from 'react';
import unSelect from '../../assets/icons/ic-closeGrey.svg'
import './selectedCoin.scss'

class SelectedCoin extends Component {
  render() {
    const {data, close, id, colorsStroke} = this.props
    const styleBox = {color: colorsStroke[id], borderColor: colorsStroke[id]}

    return (
      <>
        <div
          className='selectedCoin__wrapper'
          style={styleBox}
          onClick={() => console.log(id)}
        >
          <span
            className='selectedCoin__name'
            style={styleBox}
          >
              {data.name}
            </span>
          {close && <img
            className="selectedCoin__delete"
            src={unSelect}
            alt='delete'
            onClick={() => console.log(id, 'delete')}
          />}
          {data.price &&
          <span
            className='selectedCoin__name'
            style={styleBox}
          >{Number.parseInt(data.price)}</span>}
        </div>
      </>
    );
  }
}

export default SelectedCoin;
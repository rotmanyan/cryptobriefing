import React, { Component } from 'react';
import { buyCoin, sellCoin } from 'data/selectedButtons/operation';

import { connect } from 'react-redux';

import close from 'assets/icons/close-inv.svg';

class BuyCoinModal extends Component {
  state = { value: '' };

  handleInputChange = e => {
    const {
      sell,
      data: { quantity },
    } = this.props;

    if (sell && e.target.value > parseInt(quantity)) {
      this.setState({ value: quantity });
    } else {
      this.setState({ value: e.target.value });
    }
  };

  handleEscCloseModal = e =>
    e.keyCode === 27 && this.props.handleBuySellSelectedCoin('');

  handleEnterModal = e =>
    e.keyCode === 13 &&
    this.state.value &&
    this.props.buyCoin(this.props.data.id, this.state.value);

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscCloseModal);
    window.addEventListener('keydown', this.handleEnterModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscCloseModal);
    window.removeEventListener('keydown', this.handleEnterModal);
  }

  render() {
    const {
      data: {
        current_price,
        quantity,
        id,
        token: { name, symbol },
      },
      available_cash,
      handleBuySellSelectedCoin,
      handleSellSelectedCoin,
      buyCoin,
      sell,
      sellCoin,
    } = this.props;
    const { value } = this.state;
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
      new Date(),
    );
    const currentPrice = Number(current_price.replace('$', ''));

    const isSell = sell ? handleSellSelectedCoin : handleBuySellSelectedCoin;

    return (
      available_cash && (
        <div className='wrapper-modal-upload-avatar wrapper-buy-coin'>
          <div className='innder-wrapper'>
            <div className='inner-upload-avatar'>
              <div className='modal-upload-avatar modal-buy-coin'>
                <div className='title'>{sell ? 'Sell coin' : 'Buy coin'}</div>
                <div className='modal__coin'>
                  <div className='modal__coin-info'>
                    <p className='modal__coin-title'>
                      {name} <span>{symbol}</span>
                    </p>
                    <p className='modal__coin-date'>{formattedDate}</p>
                  </div>
                  <div className='modal__coin-form'>
                    <label className='modal__coin-label'>
                      Quantity max:
                      {sell ? quantity : +available_cash / currentPrice}
                    </label>
                    <input
                      maxLength='5'
                      type='number'
                      className='modal__coin-input'
                      value={value}
                      onChange={this.handleInputChange}
                    />
                    <span className='modal__coin-price'>x {current_price}</span>
                  </div>
                  <div className='modal__coin-footer'>
                    <span className='modal__coin-total-title'>Total value</span>
                    <span className='modal__coin-total'>
                      ${currentPrice * +value}
                    </span>
                  </div>
                  <div className='modal__coin-buttons'>
                    {sell ? (
                      <button
                        type='button'
                        className='modal__coin--buy'
                        onClick={() => sellCoin(id, +value)}
                      >
                        Sell
                      </button>
                    ) : (
                      <button
                        type='button'
                        className='modal__coin--buy'
                        onClick={() => buyCoin(id, +value)}
                      >
                        Buy
                      </button>
                    )}
                    <button
                      type='button'
                      className='modal__coin--cancel'
                      onClick={() => isSell({})}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                <img
                  src={close}
                  alt={close}
                  onClick={() => isSell({})}
                  className='close'
                />
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

const mapDispatchToProps = { buyCoin, sellCoin };

export default connect(
  null,
  mapDispatchToProps,
)(BuyCoinModal);

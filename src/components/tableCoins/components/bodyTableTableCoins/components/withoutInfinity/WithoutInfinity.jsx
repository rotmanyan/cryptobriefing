import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BuyCoinModal from 'components/available/BuyCoinModal';

import visible from 'assets/icons/visible.svg';
import invisible from 'assets/icons/invisible.svg';
import checked from 'assets/icons/ic-tick.svg';

export default class WithoutInfinity extends Component {
  state = {
    onMouse: false,
    selectedId: null,
    buySellSelectedCoin: null,
    isBuySelectedCoinModalOpen: false,
    isSellSelectedCoinModalOpen: false,
  };

  onMouseSetTrue = id => this.setState({ onMouse: true, selectedId: id });
  onMouseSetFalse = id => this.setState({ onMouse: false, selectedId: id });
  handleBuySellSelectedCoin = coin =>
    this.setState({
      buySellSelectedCoin: coin,
      isBuySelectedCoinModalOpen: !this.state.isBuySelectedCoinModalOpen,
    });

  handleSellSelectedCoin = coin =>
    this.setState({
      buySellSelectedCoin: coin,
      isSellSelectedCoinModalOpen: !this.state.isSellSelectedCoinModalOpen,
    });

  render() {
    const {
      props: {
        data,
        selected_fields,
        buySell,
        arrayChecked,
        arrayWatched,
        directToCoinDetails,
        addToken,
        addWatchList,
        removeWatchList,
        transaction,
        addPortfolio,
        link,
        statistics,
      },
    } = this.props;

    const {
      onMouse,
      selectedId,
      buySellSelectedCoin,
      isBuySelectedCoinModalOpen,
      isSellSelectedCoinModalOpen,
    } = this.state;

    return (
      <>
        {selected_fields.map((el, index) => (
          <div className='boardBody__list' key={index}>
            {data.map((item, id) => {
              switch (el.column_type.toLowerCase()) {
                case 'token':
                  return (
                    <div
                      onMouseEnter={() => this.onMouseSetTrue(item.id)}
                      onMouseLeave={() => this.onMouseSetFalse(item.id)}
                      className={`boardBody__item boardBody__item--token ${
                        selectedId === item.id && onMouse
                          ? 'boardBody__item--hover'
                          : ''
                      }  ${
                        item.inPortfolio || arrayChecked.includes(item.id)
                          ? 'bgct'
                          : ''
                      }`}
                      key={id}
                    >
                      {link ? (
                        <Link
                          to='/projectProfile'
                          onClick={() => directToCoinDetails(item.id)}
                        >
                          <img
                            className='boardBody__img--token'
                            alt={item[el.column_type].symbol}
                            src={item[el.column_type].icon}
                          />
                        </Link>
                      ) : (
                        <div>
                          <img
                            className='boardBody__img--token'
                            alt={item[el.column_type].symbol}
                            src={item[el.column_type].icon}
                          />
                        </div>
                      )}
                      {link ? (
                        <Link
                          to='/projectProfile'
                          onClick={() => directToCoinDetails(item.id)}
                        >
                          <pre className='boardBody__text boardBody__text--bold'>{`${
                            item[el.column_type].name
                          } `}</pre>
                        </Link>
                      ) : (
                        <pre className='boardBody__text boardBody__text--bold'>{`${
                          item[el.column_type].name
                        } `}</pre>
                      )}
                      {link ? (
                        <Link
                          to='/projectProfile'
                          onClick={() => directToCoinDetails(item.id)}
                        >
                          <span className='boardBody__text'>
                            {item[el.column_type].symbol}
                          </span>
                        </Link>
                      ) : (
                        <span className='boardBody__text'>
                          {item[el.column_type].symbol}
                        </span>
                      )}
                      {addPortfolio ? (
                        item.inPortfolio || arrayChecked.includes(item.id) ? (
                          <img
                            src={checked}
                            alt='checked'
                            className='iconChecked'
                          />
                        ) : (
                          <span
                            onClick={e => {
                              addToken(e, item.id);
                            }}
                            className='buttonSmall'
                          >
                            Add
                          </span>
                        )
                      ) : (
                        ''
                      )}
                    </div>
                  );
                case 'trend':
                  return link ? (
                    <Link
                      onMouseEnter={() => this.onMouseSetTrue(item.id)}
                      onMouseLeave={() => this.onMouseSetFalse(item.id)}
                      to='/projectProfile'
                      onClick={() => directToCoinDetails(item.id)}
                      className={`cursor bottom-line  ${
                        selectedId === item.id && onMouse
                          ? 'boardBody__item--hover'
                          : ''
                      } ${
                        item.inPortfolio || arrayChecked.includes(item.id)
                          ? 'bgct'
                          : ''
                      }`}
                      key={id}
                    >
                      <img
                        className='boardBody__img'
                        alt={id}
                        src={`${process.env.REACT_APP_SERVER_ORIGIN}${
                          item[el.column_type]
                        }`}
                      />
                    </Link>
                  ) : (
                    <div
                      key={id}
                      className={`cursor bottom-line  ${
                        item.inPortfolio || arrayChecked.includes(item.id)
                          ? 'bgct'
                          : ''
                      }`}
                    >
                      <img
                        className='boardBody__img'
                        alt={id}
                        src={`${process.env.REACT_APP_SERVER_ORIGIN}${
                          item[el.column_type]
                        }`}
                      />
                    </div>
                  );
                case 'watch':
                  return item[el.column_type] ||
                    arrayWatched.includes(item.id) ? (
                    <div
                      onMouseEnter={() => this.onMouseSetTrue(item.id)}
                      onMouseLeave={() => this.onMouseSetFalse(item.id)}
                      className={`bottom-line ${
                        selectedId === item.id && onMouse
                          ? 'boardBody__item--hover'
                          : ''
                      }  ${
                        item.inPortfolio || arrayChecked.includes(item.id)
                          ? 'bgct'
                          : ''
                      }`}
                      key={id}
                    >
                      <img
                        className='boardBody__img boardBody__watch'
                        alt={id}
                        onClick={() => removeWatchList(item.id)}
                        src={visible}
                      />
                    </div>
                  ) : (
                    <div
                      onMouseEnter={() => this.onMouseSetTrue(item.id)}
                      onMouseLeave={() => this.onMouseSetFalse(item.id)}
                      className={`bottom-line  ${
                        selectedId === item.id && onMouse
                          ? 'boardBody__item--hover'
                          : ''
                      } ${
                        item.inPortfolio || arrayChecked.includes(item.id)
                          ? 'bgct'
                          : ''
                      }`}
                      key={id}
                    >
                      <img
                        className='boardBody__img boardBody__watch'
                        alt={id}
                        onClick={() => addWatchList(item.id)}
                        src={invisible}
                      />
                    </div>
                  );
                default:
                  return transaction ? (
                    <div
                      key={id}
                      className='boardBody__item boardBody__item--height'
                    >
                      <p>{item[el.column_type]}</p>
                    </div>
                  ) : link ? (
                    <Link
                      onMouseEnter={() => this.onMouseSetTrue(item.id)}
                      onMouseLeave={() => this.onMouseSetFalse(item.id)}
                      to='/projectProfile'
                      onClick={() => directToCoinDetails(item.id)}
                      className={`${
                        selectedId === item.id && onMouse
                          ? 'boardBody__item--hover'
                          : ''
                      } boardBody__item ${
                        transaction ? 'boardBody__item--height' : ''
                      } ${
                        item.inPortfolio || arrayChecked.includes(item.id)
                          ? 'bgct'
                          : ''
                      }`}
                      key={id}
                    >
                      <p>{item[el.column_type]}</p>
                    </Link>
                  ) : (
                    <div
                      className={`boardBody__item ${
                        transaction ? 'boardBody__item--height' : ''
                      } ${
                        item.inPortfolio || arrayChecked.includes(item.id)
                          ? 'bgct'
                          : ''
                      }`}
                      key={id}
                    >
                      <p>{item[el.column_type]}</p>
                    </div>
                  );
              }
            })}
          </div>
        ))}
        {buySell && (
          <div className='boardBody__list'>
            {data.map((item, id) => (
              <div
                className='boardBody__item boardBody__item--buysell'
                key={item + id}
              >
                <button
                  onClick={() => this.handleBuySellSelectedCoin(item)}
                  className='available__buy'
                >
                  Buy
                </button>
                <button
                  onClick={() => this.handleSellSelectedCoin(item)}
                  className='available__btn'
                >
                  Sell
                </button>
              </div>
            ))}
          </div>
        )}
        {buySell &&
          (isBuySelectedCoinModalOpen || isSellSelectedCoinModalOpen) && (
            <BuyCoinModal
              sell={isSellSelectedCoinModalOpen}
              data={buySellSelectedCoin}
              available_cash={statistics.available_cash}
              handleBuySellSelectedCoin={this.handleBuySellSelectedCoin}
              handleSellSelectedCoin={this.handleSellSelectedCoin}
            />
          )}
      </>
    );
  }
}

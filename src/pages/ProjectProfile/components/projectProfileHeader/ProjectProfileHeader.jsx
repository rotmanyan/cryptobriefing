import React from 'react';

import backIcon from 'assets/icons/ic-back.svg';
import upIcon from 'assets/icons/ic-down.svg';
import downIcon from 'assets/icons/ic-up.svg';
import addSuccess from 'assets/icons/ic-added.svg';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  addWatcher,
  removeWatcher,
  addToPortfolio,
} from 'data/selectedButtons/operation';
import { connect } from 'react-redux';

const ProjectProfileHeader = ({
  coin,
  add,
  remove,
  addPortfolio,
  isAuthenticated,
}) => {
  return (
    <>
      <div className='wrapper--black'>
        <div className='container'>
          <div className='projectProfile__headerBox'>
            <div className='projectProfile__headerLeft'>
              <img
                onClick={() => window.history.back()}
                className='projectProfile__iconBack'
                src={backIcon}
                alt='back-icon'
              />
              <h2 className='projectProfile__headTitle'>
                <span className='projectProfile__headTitle--bold'>
                  {coin.name}{' '}
                </span>
                {coin.symbol}
                <span
                  style={{ backgroundImage: `url(${coin.icon})` }}
                  className='projectProfile__headerImg'
                />
                <span className='projectProfile__headTitleRight projectProfile__headTitleRight--mobile'>
                  ${coin.price}
                </span>
              </h2>
              <p className='projectProfile__headSubtitle'>
                Social Services & Non-profit
              </p>
              <div className='projectProfile__buttonBox'>
                {!coin.inPortfolio && isAuthenticated ? (
                  <button
                    onClick={() => addPortfolio(coin.id, 'projectProfile')}
                    className='buttonMedium buttonMedium--orange'
                  >
                    Add to Portfolio
                  </button>
                ) : (
                  <Link
                    to='/portfolio'
                    className='buttonMedium buttonMedium--orangeTransparent'
                  >
                    <img
                      style={{ marginRight: '.625rem' }}
                      src={addSuccess}
                      alt='addSuccess'
                    />{' '}
                    Go to portfolio
                  </Link>
                )}
                {isAuthenticated ? (
                  !coin.watch ? (
                    <button
                      onClick={() => add(coin.id, 'projectProfile')}
                      className='buttonMedium buttonMedium--black'
                    >
                      + Watchlist
                    </button>
                  ) : (
                    <button
                      onClick={() => remove(coin.id, 'projectProfile')}
                      className='buttonMedium buttonMedium--black'
                    >
                      <img
                        style={{ marginRight: '.625rem' }}
                        src={addSuccess}
                        alt='addSuccess'
                      />{' '}
                      Watchlist
                    </button>
                  )
                ) : null}
              </div>
            </div>
            <div className='projectProfile__headerRight'>
              <div className='projectProfile__headerRight--head'>
                {+coin.daily_percent_change > 0 ? (
                  <span className='projectProfile__headTitleRight--small'>
                    <img
                      className='projectProfile__downUp'
                      src={upIcon}
                      alt='up'
                    />
                    <span className='projectProfile__headTitleRight--percent projectProfile__downUp--green'>
                      {coin.daily_percent_change}%
                    </span>
                  </span>
                ) : (
                  <span className='projectProfile__headTitleRight--small'>
                    <img
                      className='projectProfile__downUp'
                      src={downIcon}
                      alt='up'
                    />
                    <span className='projectProfile__headTitleRight--percent projectProfile__downUp--red'>
                      {coin.daily_percent_change}%
                    </span>
                  </span>
                )}
                <h2 className='projectProfile__headTitleRight projectProfile__headTitleRight--desktop'>
                  ${coin.price}
                </h2>
              </div>
              <ul className='projectProfile__headerRight--list'>
                <li className='projectProfile__headerRight--item'>
                  <p className='projectProfile__headerRight--item--title'>
                    24h volume
                    <img
                      src=''
                      alt=''
                      className='projectProfile__headerRight--item--icon'
                    />
                  </p>
                  <p className='projectProfile__headerRight--item--value'>
                    ${coin.vol24}
                  </p>
                </li>

                <li className='projectProfile__headerRight--item'>
                  <p className='projectProfile__headerRight--item--title projectProfile__headerRight--item--title--orange'>
                    grade
                    <img
                      src=''
                      alt=''
                      className='projectProfile__headerRight--item--icon'
                    />
                  </p>
                  <p className='projectProfile__headerRight--item--value'>
                    {coin.grade}
                  </p>
                </li>

                <li className='projectProfile__headerRight--item'>
                  <p className='projectProfile__headerRight--item--title projectProfile__headerRight--item--title--orange'>
                    third party analyst rating
                    <img
                      src=''
                      alt=''
                      className='projectProfile__headerRight--item--icon'
                    />
                  </p>
                  <p className='projectProfile__headerRight--item--value'>
                    {coin.grade}
                    <span className='projectProfile__headerRight--item--value--span'>
                      Rate
                    </span>
                  </p>
                </li>

                <li className='projectProfile__headerRight--item'>
                  <p className='projectProfile__headerRight--item--title'>
                    expected value
                    <img
                      src=''
                      alt=''
                      className='projectProfile__headerRight--item--icon'
                    />
                  </p>
                  <p className='projectProfile__headerRight--item--value'>
                    ${coin.expected_value}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
ProjectProfileHeader.propTypes = {
  coin: PropTypes.object,
  add: PropTypes.func,
  remove: PropTypes.func,
  addPortfolio: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};

const mapDispatchToProps = {
  add: addWatcher,
  remove: removeWatcher,
  addPortfolio: addToPortfolio,
};

export default connect(
  null,
  mapDispatchToProps,
)(ProjectProfileHeader);

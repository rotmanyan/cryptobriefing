import React, { Component } from 'react';
import './portfolio.scss';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Available from '../../components/available/Available';
import Transaction from '../../components/transaction/Transaction';
import Watchlist from '../../components/watchlist/Watchlist';
import * as selectors from '../../data/signUser/selectors';
import { connect } from 'react-redux';

class Portfolio extends Component {
  render() {
    return this.props.isAuthenticated ? (
      <>
        <div className='wrapper--black wrapper--portfolio'>
          <div className='container'>
            <h1 className='dashboard__title'>Portfolio</h1>
            <div className='dashboard__navigation'>
              <NavLink
                className='navigation__item'
                activeClassName='navigation__item--active'
                to='/portfolio/available'
              >
                Available
              </NavLink>
              <NavLink
                className='navigation__item'
                activeClassName='navigation__item--active'
                to='/portfolio/transaction'
              >
                Transaction
              </NavLink>
              <NavLink
                className='navigation__item'
                activeClassName='navigation__item--active'
                to='/portfolio/watchlist'
              >
                Watchlist
              </NavLink>
            </div>
          </div>
        </div>
        <div className='wrapper--default'>
          <div className='container'>
            <Switch>
              <Route path='/portfolio/available' component={Available} />
              <Route path='/portfolio/transaction' component={Transaction} />
              <Route path='/portfolio/watchlist' component={Watchlist} />
              <Redirect to='/portfolio/available' />
            </Switch>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className='wrapper--default'>
          <div className='container'>
            <div className='heightBox'>
              <div className='portfolio__noAuth'>Please login</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: selectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Portfolio);

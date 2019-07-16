import React, {Component} from 'react'
import './charts.scss'
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import {ForInvestors} from "../../components/forInvestors/ForInvestors";
import ForTraders from "../../components/forTraders/ForTraders";


class Charts extends Component {
  render() {
    return (
      <>
        <div className="wrapper--black">
          <div className="container">
            <h1 className="dashboard__title">Charts</h1>
            <div className="dashboard__navigation">
              <NavLink
                className='navigation__item'
                activeClassName='navigation__item--active'
                to='/charts/forInvestors'>
                For Investors
              </NavLink>
              <NavLink
                className='navigation__item'
                activeClassName='navigation__item--active'
                to='/charts/forTraders'>
                For Traders
              </NavLink>
            </div>
          </div>
        </div>
        <div className="wrapper--default">
          <div className="container">
            <Switch>
              <Route path='/charts/forInvestors' component={ForInvestors}/>
              <Route path='/charts/forTraders' component={ForTraders}/>
              <Redirect to='/charts/forInvestors'/>
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default Charts
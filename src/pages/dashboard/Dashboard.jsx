import React from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'

import './dashboard.scss'
import Listed from '../../components/listed/Listed'
import Sto from '../../components/sto/Sto'
import Ico from '../../components/ico/Ico'

const Dashboard = () => {
  return (
    <>
      <div className="wrapper--black wrapper--header">
        <div className="container">
          <h1 className="dashboard__title">Dashboard</h1>
          <div className="dashboard__navigation">
            <NavLink
              className='navigation__item'
              activeClassName='navigation__item--active'
              to='/dashboard/listed'>
              Listed
            </NavLink>
            <NavLink
              className='navigation__item'
              activeClassName='navigation__item--active'
              to='/dashboard/sto'>
              STO
            </NavLink>
            <NavLink
              className='navigation__item'
              activeClassName='navigation__item--active'
              to='/dashboard/ico'>
              ICO
            </NavLink>
          </div>
        </div>
      </div>
      <div className="wrapper--default">
        <div className="container">
          <Switch>
            <Route path='/dashboard/listed' component={Listed}/>
            <Route path='/dashboard/sto' component={Sto}/>
            <Route path='/dashboard/ico' component={Ico}/>
            <Redirect to='/dashboard/listed'/>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
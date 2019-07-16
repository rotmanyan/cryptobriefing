import React from 'react';
import {NavLink} from 'react-router-dom';
import './navigation.scss';

export const NavigationView = () => <div className='admin__navigationWrapper'>
  <div className='admin__navigationSection'>
    <NavLink to='/admin/news' className='admin__navigationTitle' activeClassName='admin__navigationTitle--active'>News</NavLink>
    <div className='admin__navigationItems'>
      <NavLink to='/admin/news/articles'
               className='admin__navigationLink'
               activeClassName='admin__navigationActiveLink'>Articles</NavLink>
      <NavLink to='/admin/news/sources'
               className='admin__navigationLink'
               activeClassName='admin__navigationActiveLink'>Sources</NavLink>
    </div>
  </div>
  <div className="admin__navigationSection">
    <NavLink to='/admin/users' activeClassName='admin__navigationTitle--active' className="admin__navigationTitle">Users</NavLink>
  </div>
</div>
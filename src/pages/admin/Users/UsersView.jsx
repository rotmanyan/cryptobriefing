import React from 'react';
import {TableUsers} from './TableUsers';

import {Link} from "react-router-dom";


export const UsersView = props => <div className='adminArticles__wrapper'>
  <div className="adminArticles__header">
    <h1 className="adminArticles__title">Users</h1>
    <Link to={{pathname: '/admin/user/add', state: {hideNavigation: true, redirectToUsers: true}}} className="adminArticles__add-btn">Add
      User</Link>
  </div>
  <TableUsers props={{...props}}/>
</div>

import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import NewArticle from "./News/Articles/NewArticle/NewArticle";
import EditArticle from "./News/Articles/EditArticle/EditArticle";
import {Articles} from './News/Articles/Articles';
import Sources from "./News/Sources/Sources";
import Navigation from "./Navigation/Navigation";
import Users from "./Users/Users";
import UserAddNew from './Users/UserAddNew/UserAddNew';
import UserEdit from './Users/UserEdit/UserEdit';

import './admin.scss';

export default class Admin extends Component {

  render() {
    return <div className='container'>
      <div className="admin__inner">
        <Navigation/>
        <Switch>
          <Route path="/admin/news/articles" component={Articles}/>
          <Route path="/admin/news/sources" component={Sources}/>
          <Route path="/admin/news/add" component={NewArticle} />
          <Route path="/admin/news/edit" component={EditArticle} />
          <Route path="/admin/users" component={Users}/>
          <Route path="/admin/user/add" component={UserAddNew}/>
          <Route path="/admin/user/edit" component={UserEdit}/>
          <Redirect to='/admin/news/articles'/>
        </Switch>
      </div>
    </div>

  }
}
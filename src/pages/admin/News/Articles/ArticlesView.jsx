import React from 'react';
import {Link}  from 'react-router-dom';

import FilterView from './Filter/FilterView';
import Table from './Table/Table';

import './articles.scss';

export const ArticlesView = () => (
  <div className='adminArticles__wrapper'>
    <div className="adminArticles__header">
      <Link to={{pathname: '/admin/news/add', state: {hideNavigation: true}}} className="adminArticles__add-btn">Add New Article</Link>
    </div>
    <FilterView />
    <Table />

  </div>
)
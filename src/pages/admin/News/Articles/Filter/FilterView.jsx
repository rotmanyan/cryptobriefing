import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import calendar from "assets/icons/calendar.svg";
import arrow from "assets/icons/ic-select.svg";

import Calendar from "./CalendarView";
import {ArticlesSelectView} from './ArticlesSelectView';

class FilterView extends Component {
  state = {
    openSource: false,
    openCalendar: false,
  };

  handleOpenSource = () => {
    this.setState({ openSource: !this.state.openSource });
  };

  handleOpenProject = () => {
    this.setState({ openProject: !this.state.openProject });
  };

  handleOpenCalendar = () => {
    this.setState({ openCalendar: !this.state.openCalendar });
  };

  render() {
    const { openCalendar } = this.state;

    return (
      <div className="wrapper-filter-news admin__articles--filters">
        <div className="wrapper-search-news">

          <div className="block-filter">

            {openCalendar && (
              <Calendar handleOpenCalendar={this.handleOpenCalendar} />
            )}
           <div className="admin__articlesFilter-left">
             <ArticlesSelectView />
             <div className="admin__articles-tabs">
               <NavLink to='/admin/news/articles/all' className='navigation__item navigation__item--inversion' activeClassName='navigation__item--inversionActive'>
                 All
               </NavLink>
               <NavLink to='/admin/news/articles/published' className='navigation__item navigation__item--inversion' activeClassName='navigation__item--inversionActive'>
                 Published
               </NavLink>
               <NavLink to='/admin/news/articles/hidden' className='navigation__item navigation__item--inversion' activeClassName='navigation__item--inversionActive'>
                 Hidden
               </NavLink>
             </div>
           </div>
            <button
              className="button button-period"
              onClick={this.handleOpenCalendar}
            >
              <img className="calendar" src={calendar} alt="calendar" />
              Period
              <img className="arrow" src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = {
//   fetchNews
// };

export default FilterView;

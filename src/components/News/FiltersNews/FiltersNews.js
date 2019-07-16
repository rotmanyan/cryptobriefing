import React, { Component } from "react";
import { debounce } from "lodash";
import { connect } from "react-redux";
import search from "assets/icons/ic-search-grey.svg";
import calendar from "assets/icons/calendar.svg";
import arrow from "assets/icons/ic-select.svg";

import NewsSource from "../NewsSource/NewsSource";
import Calendar from "../Calendar/Calendar";
import Project from "../Project/Project";

import { fetchNews } from "middleware/News/";

import "./FiltersNews.scss";

class  FiltersNews extends Component {
  state = {
    openSource: false,
    openCalendar: false,
    openProject: false
  };

  handleSearch = debounce(text => {
    const { fetchNews } = this.props;
    fetchNews(text);
  }, 1000);

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
    const { openSource, openCalendar, openProject } = this.state;

    return (
      <div className="wrapper-filter-news">
        <div className="wrapper-search-news">
          <div className="block-search">
            <img src={search} alt="search" />
            <input
              input="text"
              className="search"
              placeholder="Search news"
              onChange={e => this.handleSearch(e.target.value)}
            />
          </div>
          <div className="block-filter">
            {openSource && (
              <NewsSource handleOpenSource={this.handleOpenSource} />
            )}
            {openCalendar && (
              <Calendar handleOpenCalendar={this.handleOpenCalendar} />
            )}
            {openProject && (
              <Project handleOpenProject={this.handleOpenProject} />
            )}
            <button
              className="button button-source"
              onClick={this.handleOpenSource}
            >
              News Source <img className="arrow" src={arrow} alt="arrow" />
            </button>
            <button
              className="button button-project"
              onClick={this.handleOpenProject}
            >
              Project <img className="arrow" src={arrow} alt="arrow" />
            </button>
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

const mapDispatchToProps = {
  fetchNews
};

export default connect(
  null,
  mapDispatchToProps
)(FiltersNews);

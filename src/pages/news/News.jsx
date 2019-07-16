import React, { Component } from "react";
import { connect } from "react-redux";
import FiltersNews from "components/News/FiltersNews/FiltersNews";
import NewsList from "components/News/NewsList/NewsList";
import PopularNews from "components/News/PopularNews/PopularNews";
import FiltersByHashtag from "components/News/FiltersByHashtag/FiltersByHashtag";

import { fetchNews, fetchFilters } from "middleware/News/";

import "./news.scss";

class News extends Component {
  componentDidMount() {
    const { fetchNews, fetchFilters } = this.props;
    fetchNews();
    fetchFilters();
  }

  render() {
    return (
      <>
        <div className="wrapper--black">
          <div className="container">
            <div className="news-wrapper-title ">
              <h1 className="dashboard__title">News</h1>
            </div>
          </div>
        </div>

        <div className="wrapper--default">
          <div className="container">
            <FiltersNews />
            <div className="news-wrapper-newslist-right-block">
              <NewsList />

              <div className="news-wrapper-right-block">
                <FiltersByHashtag />

                <PopularNews />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  fetchNews,
  fetchFilters
};

export default connect(
  null,
  mapDispatchToProps
)(News);

import React, { Component } from "react";
import { connect } from "react-redux";

import { dataPopularNews } from "data/news/selectors";

import "./PopularNews.scss";

class PopularNews extends Component {
  render() {
    const { popularNews } = this.props;
    return (
      <div className="wrapper-popular-news">
        <p className="title">Popular News</p>

        {popularNews.map(item => (
          <div className="block-popular-news" key={item.id}>
            <p className="views-source">
              {item.views} views • {item.source}
            </p>

            <a
              className="title-block-new"
              href={item.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  popularNews: dataPopularNews(state)
});

export default connect(mapStateToProps)(PopularNews);

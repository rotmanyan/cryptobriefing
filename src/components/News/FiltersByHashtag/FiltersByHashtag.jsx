import React, { Component } from "react";
import { connect } from "react-redux";

import { dataTags } from "data/news/selectors";
import { newsActions } from "data/news/actions";
import { fetchNews } from "middleware/News/";

import "./FiltersByHashtag.scss";

class FiltersByHashtag extends Component {
  handleSelectCategory = category => {
    const { fetchNews, selectCategories } = this.props;
    selectCategories(category);
    fetchNews();
  };

  render() {
    const { tags } = this.props;

    return (
      <div className="wrapper-filter-by-hashtag">
        <div className="wrapper-categories-tokens">
          <p className="title">Categories</p>
          {tags &&
            tags.popular.map((item, index) => (
              <button
                className="item-hash"
                key={index}
                onClick={() => this.handleSelectCategory(item)}
              >
                {item}
              </button>
            ))}
        </div>

        <div className="wrapper-categories-tokens">
          <p className="title">Tokens</p>
          {tags &&
            tags.tokens.map((item, index) => (
              <button
                className="item-hash"
                key={index}
                onClick={() => this.handleSelectCategory(item)}
              >
                {item}
              </button>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tags: dataTags(state)
});

const mapDispatchToProps = {
  selectCategories: newsActions.selectCategories,
  fetchNews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersByHashtag);

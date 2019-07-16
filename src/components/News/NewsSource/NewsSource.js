import React, { Component } from "react";
import { connect } from "react-redux";
import onClickOutside from "react-onclickoutside";

import { dataSources } from "data/news/selectors";
import { newsActions } from "data/news/actions";
import { fetchNews } from "middleware/News";

import "./NewsSource.scss";

class NewsSource extends Component {
  handleClickOutside = evt => {
    const { handleOpenSource, fetchNews } = this.props;
    if (evt.isTrusted) {
      handleOpenSource();
      fetchNews();
    }
  };

  selectSource = (e, id) => {
    const { selectNewSource } = this.props;

    selectNewSource({ checked: e.target.checked, id });
  };

  selectSourceAll = e => {
    const { selectNewSourceAll } = this.props;

    selectNewSourceAll({ checked: e.target.checked });
  };

  render() {
    const { sources, handleOpenSource, selectedAll } = this.props;

    return (
      <div className="wrapper-news-source">
        <div className="title-source" onClick={handleOpenSource}>
          News Source
        </div>

        <div className="wrapper-source-item first">
          <input
            type="checkbox"
            checked={selectedAll}
            className="checkbox-source"
            onChange={this.selectSourceAll}
            id='selectedAll'
          />
          <label htmlFor='selectedAll' className="name-source">Select All</label>
        </div>

        <div className="wrapper-items">
          {sources.map((item, idx) => (
            <div className="wrapper-source-item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked || false}
                className="checkbox-source"
                onChange={e => this.selectSource(e, item.id)}
                id={`select${idx}`}
              />
              <label htmlFor={`select${idx}`} className="name-source">{item.name}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sources: dataSources(state),
  selectedAll: state.news.checkedAllSource
});

const mapDispatchToProps = {
  fetchNews,
  selectNewSource: newsActions.selectNewSource,
  selectNewSourceAll: newsActions.selectNewSourceAll
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(onClickOutside(NewsSource));

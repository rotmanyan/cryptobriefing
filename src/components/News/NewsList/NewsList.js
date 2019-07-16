import React, { Component } from 'react';
import { connect } from 'react-redux';
import close from 'assets/icons/ic-close.svg';
import notFoundNews from 'assets/icons/not-found-news.svg';
import { dataNews } from 'data/news/selectors';
import { newsActions } from 'data/news/actions';

import { fetchNews } from 'middleware/News/';

import './NewsList.scss';

class NewsList extends Component {
  state = {
    page: 1,
  };
  handleDeleteCategory = () => {
    const { fetchNews, deleteSelectCategories } = this.props;
    deleteSelectCategories();
    fetchNews();
  };

  handleSelectCategory = category => {
    const { fetchNews, selectCategories } = this.props;
    selectCategories(category);
    fetchNews();
  };

  onScrollList = event => {
    const { fetchNews, handleChangePage, page, news } = this.props;

    const scrollBottom =
      event.target.scrollTop + event.target.offsetHeight ===
      event.target.scrollHeight;

    if (scrollBottom && news.length / page === 15) {
      handleChangePage();
      fetchNews();
    }
  };

  render() {
    const { news, selectedCategory, newsLoading } = this.props;

    return (
      <div className='wrapper-news-list' onScroll={e => this.onScrollList(e)}>
        {selectedCategory && (
          <div className='actual-category'>
            # {selectedCategory}
            <img
              src={close}
              className='close'
              onClick={this.handleDeleteCategory}
              alt='close'
            />
          </div>
        )}

        {newsLoading ? (
          <div className='lds-roller'>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        ) : news.length > 0 ? (
          <>
            {news.map(item =>
              !item.info ? (
                <div className='wrapper-news-block' key={item.id}>
                  {item.image && (
                    <div className='wrapper-img'>
                      <figure
                        className='logo-new'
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    </div>
                  )}
                  <div className='wrapper-info-block'>
                    <div className='wrapper-data-hashtag'>
                      <div className='data-source-in-block-news'>
                        {item.date} • {item.source}
                      </div>
                      <div className='hashtag-in-block-news'>
                        {item &&
                          item.tags &&
                          item.tags.map((tag, index) => (
                            <span
                              key={index}
                              onClick={() => this.handleSelectCategory(tag)}
                            >
                              {' '}
                              #{tag}
                            </span>
                          ))}
                      </div>
                    </div>
                    <a
                      className='title-block-new'
                      href={item.url}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      {item.title}
                    </a>

                    <p className='info-block-new'>{item.body}</p>
                  </div>
                </div>
              ) : (
                <div className='wrapper-advertising' key={item.id}>
                  <p className='marker-advertising'>CryptoBriefing info</p>

                  <p className='title-advertising'>{item.title}</p>

                  <p className='text-advertising'>{item.body}</p>
                </div>
              ),
            )}
          </>
        ) : (
          <div className='wrapper-not-news'>
            <img src={notFoundNews} alt='notFoundNews' />
            <p className='info-not-found'>
              There are no results that match your search
            </p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: dataNews(state),
  newsLoading: state.news.newsLoading,
  selectedCategory: state.news.selectedCategory,
  page: state.news.page,
});

const mapDispatchToProps = {
  selectCategories: newsActions.selectCategories,
  deleteSelectCategories: newsActions.deleteSelectCategories,
  handleChangePage: newsActions.handleChangePage,
  fetchNews,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsList);

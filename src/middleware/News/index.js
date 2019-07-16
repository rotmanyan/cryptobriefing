import axios from 'axios';
import moment from 'moment';
import { newsActions } from 'data/news/actions';

export const fetchNews = searchValue => (dispatch, getState) => {
  const {
    news: {
      page,
      details: { projects, sources },
      date: { from, to },
      selectedCategory: tags,
    },
  } = getState();

  const dataSource = sources
    .filter(source => source.checked === true)
    .map(item => item.id)
    .join(',');

  const dataProject = projects
    .filter(project => project.checked === true)
    .map(item => item.name)
    .join(',');

  const source = dataSource.length > 0 ? dataSource : undefined;
  const project = dataProject.length > 0 ? dataProject : undefined;
  const start_date = from && moment(from).format('YYYY-MM-DD');
  const end_date = to && moment(to).format('YYYY-MM-DD');
  const search =
    searchValue && searchValue.length > 0 ? searchValue : undefined;

  dispatch(newsActions.fillNewsRequest());
  dispatch(newsActions.fetchNewsAsync());

  axios
    .get(process.env.REACT_APP_SERVER_ORIGIN + '/v1/news', {
      params: {
        page,
        search,
        source,
        project,
        start_date,
        end_date,
        tags,
      },
    })
    .then(data => dispatch(newsActions.fillNews(data.data.news)))
    .catch(error => dispatch(newsActions.fetchNewsError(error)));
};

export const fetchFilters = () => dispatch => {
  dispatch(newsActions.fetchFiltersAsync());

  axios
    .get(process.env.REACT_APP_SERVER_ORIGIN + '/v1/news/details', {})
    .then(data => dispatch(newsActions.fillFilters(data.data.details)))
    .catch(error => dispatch(newsActions.fetchFiltersError(error)));
};

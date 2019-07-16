import { constants } from './constants';

export const profileState = {
  news: [],
  newsLoading: false,
  details: {
    popular: [],
    projects: [],
    sources: [],
    tags: {
      popular: [],
      tokens: [],
    },
  },
  date: {
    from: undefined,
    to: undefined,
  },
  checkedAllSource: false,
  checkedAllProject: false,
  selectedCategory: undefined,
  page: 1,
};

export const newsReducer = (state = profileState, { type, payload }) => {
  switch (type) {
    case constants.FILL_FILTERS:
      return {
        ...state,
        details: {
          ...state.details,
          ...payload,
        },
      };

    case constants.SELECT_NEW_SOURCE:
      const newSourses = state.details.sources.map(sourse => {
        if (sourse.id === payload.id) {
          return {
            ...sourse,
            checked: payload.checked,
          };
        }
        return {
          ...sourse,
        };
      });

      return {
        ...state,
        details: {
          ...state.details,
          sources: newSourses,
        },
        page: 1,
      };

    case constants.SELECT_NEW_SOURCE_ALL:
      const dataAllCheckSources = state.details.sources.map(sourse => {
        if (payload.checked) {
          return {
            ...sourse,
            checked: true,
          };
        }
        return {
          ...sourse,
          checked: false,
        };
      });

      return {
        ...state,
        details: {
          ...state.details,
          sources: dataAllCheckSources,
        },
        checkedAllSource: payload.checked,
        page: 1,
      };

    case constants.SELECT_PROJECT:
      const newProjects = state.details.projects.map(project => {
        if (project.id === payload.id) {
          return {
            ...project,
            checked: payload.checked,
          };
        }
        return {
          ...project,
        };
      });

      return {
        ...state,
        details: {
          ...state.details,
          projects: newProjects,
        },
        page: 1,
      };

    case constants.SELECT_PROJECT_ALL:
      const dataAllCheckProjects = state.details.projects.map(project => {
        if (payload.checked) {
          return {
            ...project,
            checked: true,
          };
        }
        return {
          ...project,
          checked: false,
        };
      });

      return {
        ...state,
        details: {
          ...state.details,
          projects: dataAllCheckProjects,
        },
        checkedAllProject: payload.checked,
        page: 1,
      };

    case constants.SELECT_DATE:
      return {
        ...state,
        date: {
          ...state.date,
          from: payload.from,
          to: payload.to || payload.from,
        },
        page: 1,
      };

    case constants.SELECT_CATEGORIES:
      return {
        ...state,
        selectedCategory: payload,
        page: 1,
      };

    case constants.DELETE_SELECT_CATEGORIES:
      return {
        ...state,
        selectedCategory: undefined,
        page: 1,
      };

    case constants.CHANGE_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };

    case constants.FILL_NEWS:
      if (state.page > 1) {
        return {
          ...state,
          news: [...state.news, ...payload],
          newsLoading: false,
        };
      } else if (state.page === 1) {
        return { ...state, news: payload, newsLoading: false };
      } else return { ...state, newsLoading: false };
    case constants.FILL_NEWS_REQUEST:
      return {
        ...state,
        newsLoading: true,
      };
    default:
      return { ...state };
  }
};

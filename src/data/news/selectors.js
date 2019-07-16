export const dataNews = state => state.news.news || [];
export const dataPopularNews = state => state.news.details.popular || [];

export const dataTags = state => state.news.details.tags;

export const dataSources = state => state.news.details.sources || [];

export const dataProjects = state => state.news.details.projects || [];

export const dataDate = state => state.news.date;

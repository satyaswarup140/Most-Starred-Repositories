// api/githubApi.js
import axios from 'axios';

const API_URL = 'https://api.github.com';

export const fetchMostStarredRepos = (period = '30d', page = 1) => {
  const date = new Date();
  date.setDate(date.getDate() - (period === '1w' ? 7 : period === '2w' ? 14 : 30));
  const formattedDate = date.toISOString().split('T')[0];
  
  return axios.get(`${API_URL}/search/repositories`, {
    params: {
      q: `created:>${formattedDate}`,
      sort: 'stars',
      order: 'desc',
      page,
    }
  });
};

export const fetchRepoActivity = (owner, repo) => {
  return axios.all([
    axios.get(`${API_URL}/repos/${owner}/${repo}/stats/commit_activity`),
    axios.get(`${API_URL}/repos/${owner}/${repo}/stats/code_frequency`),
    axios.get(`${API_URL}/repos/${owner}/${repo}/stats/contributors`)
  ]);
};

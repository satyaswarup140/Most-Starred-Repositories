// features/repos/reposSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMostStarredRepos, fetchRepoActivity as getRepoActivity } from '../../api/githubApi';

// Fetch repositories
export const fetchRepos = createAsyncThunk('repos/fetchRepos', async () => {
  const response = await fetchMostStarredRepos();
  return response.data.items; 
});

// Fetch repository activity (Renamed from fetchRepoActivity)
export const fetchRepoStats = createAsyncThunk(
  'repos/fetchRepoStats',
  async ({ owner, repo }) => {
    const [commitActivity, codeFrequency, contributors] = await getRepoActivity(owner, repo);
    return { commitActivity: commitActivity.data, codeFrequency: codeFrequency.data, contributors: contributors.data };
  }
);

const reposSlice = createSlice({
  name: 'repos',
  initialState: {
    items: [],
    loading: false,
    error: null,
    repoActivity: {}, 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchRepoStats.fulfilled, (state, action) => {
        state.repoActivity[action.payload.repo] = action.payload; 
      });
  },
});

export default reposSlice.reducer;

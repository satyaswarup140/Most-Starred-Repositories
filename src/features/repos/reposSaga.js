// src/features/repos/reposSaga.js

import { call, put, takeLatest, all } from 'redux-saga/effects';
import { fetchRepos } from './reposSlice'; // Ensure this import points to the correct slice
import { fetchMostStarredRepos } from '../../api/githubApi'; // Adjust this import accordingly

function* fetchReposSaga() {
  try {
    const repos = yield call(fetchMostStarredRepos); // Call the API function
    yield put(fetchRepos.fulfilled(repos)); // Dispatch success action with payload
  } catch (error) {
    yield put(fetchRepos.rejected(error.message)); // Dispatch failure action
  }
}

// Watch for the fetchRepos action
export function* watchFetchRepos() {
  yield takeLatest(fetchRepos.type, fetchReposSaga);
}

// Create a root saga to export
export default function* rootSaga() {
  yield all([
    watchFetchRepos(), // Add other sagas here if you have more
  ]);
}

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'; // Import redux-saga middleware
import reposReducer from '../features/repos/reposSlice'; // Import your repos slice
import { watchFetchRepos } from '../features/repos/reposSaga'; // Import your root saga

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store
const store = configureStore({
  reducer: {
    repos: reposReducer, // Your repos reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(sagaMiddleware), // Add saga middleware to the default middleware
});

// Run the saga
sagaMiddleware.run(watchFetchRepos);

export default store; // Export the configured store


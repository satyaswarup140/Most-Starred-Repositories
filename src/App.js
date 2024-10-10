// src/App.js
import React from 'react';
import RepoList from './components/RepoList';

const App = () => {
  return (
    <div>
      <h1>Most Starred Repositories</h1>
      <RepoList />
    </div>
  );
};

export default App;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos, fetchRepoStats } from '../features/repos/reposSlice';
import RepoItem from './RepoItem';


const RepoList = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);
  const repoActivity = useSelector((state) => state.repos.repoActivity);

  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch]);

  const handleFetchActivity = (owner, repo) => {
    dispatch(fetchRepoStats({ owner, repo }));
  };

  return (
    <div className="repo-list">
      {repos.length === 0 ? (
        <p>No repositories found.</p>
      ) : (
        repos.map((repo) => (
          <RepoItem
            key={repo.id}
            repo={repo}
            onFetchActivity={() => handleFetchActivity(repo.owner.login, repo.name)}
            activity={repoActivity[repo.name]}
          />
        ))
      )}
    </div>
  );
};

export default RepoList;

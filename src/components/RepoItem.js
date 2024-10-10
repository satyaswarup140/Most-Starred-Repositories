import React from 'react';
import './RepoItem.css'; // Add CSS for styling if needed

const RepoItem = ({ repo, onFetchActivity, activity }) => {
  return (
    <div className="repo-item">
      <img
        src={repo.owner.avatar_url} // Use the owner's avatar URL as the logo
        alt={`${repo.owner.login}'s avatar`}
        className="repo-logo" // Add some CSS for styling
      />
      <div className="repo-details">
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
        <p><strong>Stars:</strong> {repo.stargazers_count}</p>
        <button onClick={onFetchActivity}>Show Activity</button>
        {activity && (
          <div className="repo-activity">
            <p><strong>Commits:</strong> {activity.commitActivity.length}</p>
            <p><strong>Additions:</strong> {activity.codeFrequency[0]}</p>
            <p><strong>Deletions:</strong> {activity.codeFrequency[1]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepoItem;

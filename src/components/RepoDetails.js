
      // src/components/RepoDetails.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Chart from './Chart';

const RepoDetails = ({ repoId }) => {
  const [dataType, setDataType] = useState('commits');
  const repoData = useSelector((state) =>
    state.repos.repos.find((repo) => repo.id === repoId)
  );

  useEffect(() => {
    // Fetch the required data (commits, additions, deletions) based on `repoId` and `dataType`
  }, [repoId, dataType]);

  const handleDataTypeChange = (e) => {
    setDataType(e.target.value);
  };

  return (
    <div className="repo-details">
      <div className="graph-controls">
        <label htmlFor="data-type">Show: </label>
        <select id="data-type" value={dataType} onChange={handleDataTypeChange}>
          <option value="commits">Commits</option>
          <option value="additions">Additions</option>
          <option value="deletions">Deletions</option>
        </select>
      </div>
      <Chart data={repoData[dataType]} title={`${dataType} over time`} dataType={dataType} />
    </div>
  );
};

export default RepoDetails;

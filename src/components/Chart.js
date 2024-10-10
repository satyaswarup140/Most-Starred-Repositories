// src/components/Chart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data, title, dataType }) => {
  const chartData = {
    labels: data.weeks.map((week) => week.start), // Example X-axis: Weeks
    datasets: [
      {
        label: dataType,
        data: data.weeks.map((week) => week.changes), // Example Y-axis: Changes (commits, additions, deletions)
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default Chart;

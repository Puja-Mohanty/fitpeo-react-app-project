import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityChart = () => {
  const data = {
    labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29'],
    datasets: [
      {
        label: 'Activity',
        data: [5000, 7000, 4000, 8000, 12000, 9000, 14000, 13000, 7000, 8000, 11000, 10000],
        backgroundColor: '#4F46E5', // Adjusted to match the color in the image
        borderColor: '#4F46E5',
        borderWidth: 1,
        borderRadius: 5, // Make the bars have rounded corners
        barThickness: 20, // Adjust the thickness of the bars
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#ffffff',
        },
        grid: {
          color: '#444444',
        },
      },
      x: {
        ticks: {
          color: '#ffffff',
        },
        grid: {
          color: '#444444',
        },
      },
    },
  };

  return (
    <div className="col-span-12 md:col-span-7 lg:col-span-7 grid grid-cols-1">
      <div className="bg-gray-800 p-4 rounded mb-4">
        <h2 className="text-xl mb-4 poppins-bold">Activity</h2>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default ActivityChart;

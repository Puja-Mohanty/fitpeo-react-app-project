
import React from 'react';
import { Chart } from 'chart.js/auto';
import { TiArrowSortedUp } from "react-icons/ti";

function NetProfit() {
  const chartRef = React.useRef(null);
  const chartInstance = React.useRef(null); // Create a ref to store the chart instance

  React.useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const chartData = {
      labels: ['Completed', 'Remaining'],
      datasets: [{
        label: 'Net Profit',
        data: [70, 30],
        backgroundColor: ['#4F46E5', '#778899'], // Adjust colors as needed
        borderWidth: 0,
      }]
    };

    const config = {
      type: 'doughnut',
      data: chartData,
      options: {
        cutout: '70%', // Adjust cutout percentage for donut hole size
        plugins: {
          legend: {
            display: false // Hide legend
          },
          tooltip: {
            enabled: false // Disable tooltip
          }
        }
      }
    };

    // Destroy the previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance and store it in the ref
    chartInstance.current = new Chart(ctx, config);

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <h2 className="text-white text-xl font-semibold">Net Profit</h2>
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl poppins-bold">$6759.25</div>
        <div className="relative">
          <canvas ref={chartRef} width="100" height="100" />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <p>70%</p>
            <p className="text-sm">Goal Completed</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className='flex'>
          <span>
            <TiArrowSortedUp />
          </span>
          <span>3%</span>
        </div>
        <div>
        <h3>*The values here has been rounded off.</h3>
        </div>
      </div>
    </div>
  );
}

export default NetProfit;




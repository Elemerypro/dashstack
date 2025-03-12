import React from 'react'
import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto';

// export default function Charts({ chartData }) {
    
//   return (
//     <Line data={chartData}/>
//   )
// }

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const Charts = () => {
  const data = {
    labels: ["5k", "10k", "15k", "20k", "25k", "30k", "35k", "40k", "45k", "50k", "55k", "60k"],
    datasets: [
      {
        label: "Sales",
        data: [25, 45, 38, 50, 40, 60, 35, 80, 40, 70, 50, 55],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        pointBackgroundColor: "#3b82f6",
        pointBorderColor: "#fff",
        pointRadius: 4,
        fill: false,
        tension: 0.4, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
    
  };

  return (
    
      <Line data={data} options={options} />
    
  );
};

export default Charts;
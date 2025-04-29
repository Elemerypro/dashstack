import React from 'react'
import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto';


import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const Charts = ({ chartDetails }) => {
  if (!chartDetails || !chartDetails.data || !chartDetails.options) {
    return <p>Loading chart...</p>;
  }
  const { data, options } = chartDetails
  

  return (
      
      <Line data={data} options={options} />
    
  );
};

export default Charts;
import React from 'react'
import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import '../../Spinner.css'


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
  const { data, options } = chartDetails

  if ( !chartDetails.data || !chartDetails.options) {
    return <div class="sk-chase">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>;
  }
  

  return (
      
      <Line data={data} options={options} />
    
  );
};

export default Charts;
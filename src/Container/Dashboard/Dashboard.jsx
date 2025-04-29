import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card'
import Charts from '../../Components/Chart';
// import { ChartData } from '../Chartdata/Chartdata';




 const Dashboard=()=> {
  const [details, setDetails] = useState([]);
  const [chartdata, setChartData] = useState([])

  //  console.log(chartdata);
  

  const fetchdata =async() => {

    const response =await fetch('/api/data');
    const result =await response.json()
    // console.log(result);
    
    setDetails(result.data);
    setChartData(result.chartdata[0]);
  };
  //  const fetchchartdata = async () => {

  //    const response = await fetch('/api/data');
  //    const result = await response.json()
  //    // console.log(result);

  //    setDetails(result.chartdata);

  //  };

  useEffect(() => {
    fetchdata();
    
  }, []);

  
  
  return <>
    <div className='container'>
      <div className="row">
        {details.map((details) => (<Card key={details.id} cardDetails={details} />))}
      </div>
      <div className="className p-10 bg-white rounded-xl m-5 shadow-xl">
        <div className='m-5'>
          <h2 className='text-left mb-5 font-semibold text-xl'>Sales Detailes</h2>
          {(<Charts chartDetails={chartdata} />)}
        </div>
      </div>
    </div>
    
      
      
    
    
    </>
  
}
export default Dashboard;
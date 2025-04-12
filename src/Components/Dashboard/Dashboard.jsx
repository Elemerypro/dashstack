import React, { useState } from 'react'
import Card from '../Card/Card'
import Charts from '../Chart/Charts';
// import { ChartData } from '../Chartdata/Chartdata';



export default function Dashboard() {
  const [details, setDetails] = useState([
    {id:1,TotalUsers:40.500,ratio:1.8},
    { id: 2, TotalUsers: 10.293, ratio: 1.3 },
    { id: 3, TotalUsers: 89.000, ratio: 4.3 },
    { id: 4, TotalUsers: 2040, ratio: 1.8}]);

  // const [userData, setUserData] = useState({
  //   labels: ChartData.map((data) => data.users),
  //   datasets:[{
  //     label: "User Gained",
  //     data: ChartData.map((data) => data.percentage),
  //     backgroundColor: [
  //       "rgba(75,192,192,1)",],
  //       borderColor: ['rgba(75,192,192,1)'],
  //     borderWidth: 2,
  //   }]
  // })  ;
  
  return <>
    <div className='container'>
      <div className="row">
        {details.map((details) => (<Card key={details.id} cardDetails={details} />))}
      </div>
      <div className="className p-10 bg-white rounded-xl m-5 shadow-xl">
        <div className='m-5'>
          <h2 className='text-left mb-5 font-semibold text-xl'>Sales Detailes</h2>
         <Charts />
        </div>
      </div>
    </div>
    
      
      
    
    
    </>
  
}

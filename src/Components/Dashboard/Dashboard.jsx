import React, { useState } from 'react'
import Card from '../Card/Card'

export default function Dashboard() {
  const [details, setDetails] = useState([
    {TotalUsers:40.500,ratio:1.8},
    { TotalUsers: 10.293, ratio: 1.3 },
    { TotalUsers: 89.000, ratio: 4.3 },
    { TotalUsers: 2040, ratio: 1.8}])
  return <>
    <div className='container'>
      <div className="row">
        {details.map((details) => (<Card cardDetails={details} />))}
      </div>
    </div>
    
    </>
  
}

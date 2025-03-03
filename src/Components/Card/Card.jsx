import React from 'react'

export default function Card(props) {
  let { TotalUsers, ratio } = props.cardDetails
  return (
    <>  
    <div className='w-1/4 p-4'>
      <div className='p-6 shadow-xl rounded-xl bg-gray-200 text-start'>
        <div className='w-1/2'>
            <span>Total users :</span>
            <h1 className='text-3xl'>{TotalUsers}</h1>
            <h4><i className="fa-solid fa-arrow-trend-up"></i>{ratio}</h4>
        </div>
        <div className='w-1/2'>
            <span><i className="fa-solid fa-user"></i></span>
        </div>
      </div>
    </div>
    
    </>
      )
}

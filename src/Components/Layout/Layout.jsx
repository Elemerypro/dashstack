import React from 'react'
import Sidebar from "../Sidebar"
import { Outlet } from 'react-router-dom'
import Navbar from './../Navbar/Navbar';

function Layout() {
  return (
    <div >
      <div >
        <Navbar />
        </div> 
    
    <div className= ' flex flex-row '>
      <div className="basis-64">
        <Sidebar />
      </div>
        <div className="basis-10/12 my-2 ms-2"> 
          <Outlet />
          </div>
       

      </div>
    </div>
    
  )
}
export default Layout
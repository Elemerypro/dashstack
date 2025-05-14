import React from 'react'
import Sidebar from "../Sidebar"
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className= 'container flex flex-row'>
      <div className="basis-64">
        <Sidebar />
      </div>
        <div className="basis-11/12 "> 
          <Outlet />
          </div>
       

      </div>
    
  )
}
export default Layout
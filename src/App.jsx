import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Container/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Notfound from './Container/Notfound';


let x= createBrowserRouter([
  {path : "",element : <Layout/> , children:[
    { index: true, element: <Dashboard /> },
    { path:"#", element: <Notfound /> },
  ]}
])
function App() {
  

  return <RouterProvider router={x}></RouterProvider>
}

export default App

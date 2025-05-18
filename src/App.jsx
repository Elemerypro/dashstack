import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Container/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Notfound from './Container/Notfound';
import Products from './Components/Products';
import Favorite from './Components/Favorite/Favorite';
import Inbox from './Components/Inbox/Inbox';
import OrderList from './Components/OrderList/OrderList';



let x= createBrowserRouter([
  {path : "",element : <Layout/> , children:[
    { index: true, element: <Dashboard /> },
    { path: "products", element: <Products /> },
    { path: "favorite", element: <Favorite /> },
    { path: "inbox", element: <Inbox /> },
    { path: "orderlist", element: <OrderList /> },
    { path:"#", element: <Notfound /> },
  ]}
])
function App() {
  

  return <RouterProvider router={x}></RouterProvider>
}

export default App

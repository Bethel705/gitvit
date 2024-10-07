import React from 'react'
import "./app.scss"
import Home from '../pages/Home/Home';
import Navbar from './component/Navbar/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from './component/Footer/Footer';


const App = () => {
  const Layout = ()=>{
    return (
      
      <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    
      
      </div>
    )
  } 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
        path:"/",
        element:<Home/>
      }

      
      


      ]
    
      
    },
  ]);
  
  return (
    <div>
        <RouterProvider router={router} />   
    </div>
   
  )
  }
 
 


export default App
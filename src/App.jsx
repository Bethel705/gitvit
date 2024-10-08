import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../pages/Home/Home'
import Register from '../pages/Register/Register';
import Servicecat from '../pages/Servicecat/Servicecat';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Services" element={<Servicecat/>}/>
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
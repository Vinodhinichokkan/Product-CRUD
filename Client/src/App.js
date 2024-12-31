import React from 'react'
import Navbar from './compoents/Navbar/Navbar'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './compoents/ProductApp/Home';
import Products from './compoents/ProductApp/Products';
import CreateProduct from './compoents/ProductApp/CreateProduct';
import Admin from './compoents/ProductApp/Admin'
const App = () => {
  return (
    <div>
      <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/index" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/create" element={<Home/>}/>
            
          </Routes>
      </Router>
    </div>
  )
}

export default App

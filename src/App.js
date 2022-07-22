import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import ProductDetails from './Components/ProductDetails'
import ProductListing from './Components/ProductListing'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productid" element={<ProductDetails />} />
        <Route>404 not found</Route>
      </Routes>
    </div>
  )
}

export default App

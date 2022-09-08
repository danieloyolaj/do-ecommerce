import { useState, useEffect } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/routes/Home'
import ProductDetail from './components/routes/ProductDetail'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import Cart from './components/routes/Cart'
import NotFound from './components/routes/NotFound'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import axios from 'axios'
import ProtectedRoutes from './components/routes/ProtectedRoutes'

function App() {



  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/'
  //   const obj = {
  //     firstName: 'Juancito',
  //     lastName: 'Pinto',
  //     email: 'pinto@juancito.com',
  //     password: 'pinto123456',
  //     phone: '1234567891',
  //     role: 'admin'
  //   }

  //   axios.post(URL, obj)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }, [])
  

  return (
    <>
        <Header />
          <div className="app">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="*" element={<NotFound />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/purchases" element={<Purchases />} />
              </Route>
            </Routes>
          </div>
        <Footer />
    </>
  )
}

export default App

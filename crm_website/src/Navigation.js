import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import SignUpPage from './pages/SignUppage';
import Otp from './components/Otp';

export default function Navigation() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

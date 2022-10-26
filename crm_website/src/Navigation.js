import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login'

export default function Navigation() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/errors/NotFound'
import Navbar from './Components/Navbar'
import Users from './pages/Users'
import UserPage from './pages/UserPage'
import Dashboard from './pages/Dashboard'
import Welcome from './components/Welcome'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserPage />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path='/dashboard/*' element={<Dashboard />}>
            <Route path='welcome' element={<Welcome />} />
          </Route>

          <Route path='/usuarios' element={<Navigate replace to="/users" />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

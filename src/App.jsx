import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/errors/NotFound'
import Navbar from './Components/Navbar'
import Users from './pages/Users'
import UserPage from './pages/UserPage'
import Dashboard from './pages/Dashboard'
import Welcome from './components/Welcome'
import ProtectRoute from './components/ProtectRoute'

const App = () => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({ id: 1, username: 'admin', permissions: ['admin'], roles: ['adm'] })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {
          user ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={login}>Login</button>
          )
        }
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Ruta protegida con outlet */}
          <Route element={<ProtectRoute isAllowed={!!user} />}>
            <Route path='/users' element={<Users />} />
            <Route path='/dashboard/*' element={<Dashboard />} >
              <Route path='welcome' element={<Welcome />} />
            </Route>
          </Route>

          {/* Ruta protegida por roles */}
          <Route path="/users/:id" element={
            <ProtectRoute isAllowed={!!user && user.roles.includes('adm')}>
              <UserPage />
            </ProtectRoute>
          } />

          {/* Ruta protegida individual y por permisos */}
          <Route path="/about" element={
            <ProtectRoute isAllowed={!!user && user.permissions.includes('admin')} redirectTo='/'>
              <AboutPage />
            </ProtectRoute>
          } />


          {/* <Route path="/users" element={
            // <ProtectRoute user={user} redirectTo='/'>
            <Users />
            // </ProtectRoute>
          } />
          <Route path='/dashboard/*' element={<Dashboard />} >
            <Route path='welcome' element={
              // <ProtectRoute user={user} redirectTo='/'>
              <Welcome />
              // </ProtectRoute>
            } />
          </Route> */}

          <Route path='/usuarios' element={<Navigate replace to="/users" />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

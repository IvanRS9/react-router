import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectRoute = ({children, isAllowed, redirectTo="/"}) => {
    if (!isAllowed){
        return <Navigate to={redirectTo} />
    }
    return children ? children : <Outlet />
}

export default ProtectRoute

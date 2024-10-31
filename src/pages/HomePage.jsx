import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const userId = 10;

    return (
        <div>
            <h1>React Router</h1>

            <Link to="/about">About</Link>
            <br />
            <Link to="/users">Users</Link>
            <br />
            <Link to={`/users/${userId}`}>User {userId}</Link>
        </div>
    )
}

export default HomePage

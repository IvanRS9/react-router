import React from 'react'

const Users = () => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'Bruce Wayne' },
        { id: 4, name: 'Clark Kent' },
    ]

    return (
        <div>
            <h1>Users</h1>
            <br />
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Users

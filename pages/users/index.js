import React from 'react'

import UserList from '../../components/UserList'

export default function index() {
    return (
        <div>
            <h2>Welcome to user page</h2>
            <UserList name="John Connor" country="US"/>
        </div>
    )
}

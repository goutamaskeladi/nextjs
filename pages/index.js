import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const index = () => {
    return (
        <div>
            <h2>Welcome to Next.js</h2>
            <p>Click here to see the <Link href="/users"><a>users</a></Link></p>
            <button onClick={() => Router.push('/users')}>Check the users</button>
        </div>
    )
}

export default index
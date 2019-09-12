import React from 'react'

function UserList(props) {
    return (
        <div>
            <h4>Name: {props.name}</h4>
            <h5>Country: {props.country}</h5>
            <style jsx>{`
                h4, h5 {
                  color: red;
                  font-family: sans-serif;
                }
            `}</style>
        </div>
    )
}

export default UserList
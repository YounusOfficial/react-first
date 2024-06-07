import React from 'react'

const Welcome = ({ handleLogout }) => {
    return (
        <>
            <div>Welcome back</div>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Welcome
import React from 'react'

const Login = ({ handleLogin }) => {
    return (
        <>
            <h2>Please Login</h2>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Login
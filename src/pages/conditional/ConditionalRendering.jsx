import React, { useState } from 'react'
import Welcome from '../Welcome'
import Login from '../Login'
import './conditional.css'

const ConditionalRendering = () => {

    const [isLoggedIn, setIsloggedIn] = useState(false)


    const handleLogin = () => {
        setIsloggedIn(true);
    }

    const handleLogout = () => {
        setIsloggedIn(false);
    }


    return (
        <>
            <div>
                {
                    isLoggedIn
                        ? (<Welcome handleLogout={handleLogout} />)
                        : (<Login handleLogin={handleLogin} />)
                }
            </div>
        </>
    )
}

export default ConditionalRendering

import React, { useContext, useState } from 'react'
import { CookieContext } from '../context/userContext'

export default function IsAuth({ children }) {
    const [isLogged, setIsLogged] = useState(null);
    const cookie = useContext(CookieContext);
    console.log(cookie, "is AUTHED")
    return (
        <>
            {children}
        </>
    )
}

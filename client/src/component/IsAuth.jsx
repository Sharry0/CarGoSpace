
import React, { useContext, useState } from 'react';
import { CookieContext } from '../context/userContext';
import Loading from '../pages/Loading';

export default function IsAuth({ children }) {
    const [isLogged, setIsLogged] = useState(false);
    const cookie = useContext(CookieContext);
   
    console.log(cookie, "is AUTHED")
    // if (cookie.cookie) setIsLogged(true)
    if (!cookie.isLoading) return <>{children}</>
    return (
        <>
            <Loading/>
        </>
    )
}


import React, { useContext, useState } from 'react';
import { CookieContext } from '../context/userContext';
import Loading from '../pages/Loading';
import { Navigate } from 'react-router-dom';

export default function IsAuth({ children }) {
    const cookie = useContext(CookieContext);
    console.log(cookie, "is AUTHED")

    if (!cookie.isLoading) return (
        <>
            {
                cookie.cookie ? <>{children} </> : <Navigate to="/register" />
            }
        </>
    )
    return (
        <>
            <Loading />
        </>
    )
}

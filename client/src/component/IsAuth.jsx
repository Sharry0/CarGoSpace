
import React, { useContext, useState } from 'react';
import { CookieContext } from '../context/userContext';
import Loading from '../pages/Loading';
import { Navigate } from 'react-router-dom';

export default function IsAuth({ children }) {
    const cookie = useContext(CookieContext);

    //_______ if isLoading out of the cookieContext is false, then return child component or redirect to register page____________
    if (!cookie.isLoading) return (cookie.cookie ? <>{children} </> : <Navigate to="/register" />);

    //_______ if isLoading is true, then render Loading page_________________
    return (<> <Loading /> </>);
}

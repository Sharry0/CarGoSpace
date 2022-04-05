
import React, { useContext, useState } from 'react';
import { CookieContext } from '../context/userContext';
import Loading from '../pages/Loading';
import { Navigate } from 'react-router-dom';

export default function IsAuth({ children }) {
    const cookie = useContext(CookieContext);

    //_______ Add useLocation to redirect them back to original route they wanted to, after logging / signing in________

    //_______ if isLoading out of the cookieContext is false, then return child component or redirect to register page____________
    if (!cookie.isLoading) return (cookie.cookie ? <>{children} </> : <Navigate to="/register" />);

    //_______ if isLoading is true, then render Loading page_________________
    return (<> <Loading /> </>);
}

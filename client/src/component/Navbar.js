import React, { useContext } from 'react';
import "../style/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import smLogo from "../images/CarGoSpace_logo_sm.svg";
import { CookieContext } from '../context/userContext';
import { logout } from '../API/apiRequests';

export default function Navbar() {
    const cookie = useContext(CookieContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout();
        cookie.updateContext()
        navigate("/", {replace: true})
    };

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid ">
                <Link className="navbar-brand" to="/">
                    <img style={{ height: "40px" }} src={smLogo} alt="small Logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-row-reverse " id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        {
                            cookie.cookie ?
                                <input type="submit" onClick={handleLogout} value="Logout" />
                                :
                                <>
                                    <Link className="nav-link navButton" to="/register" style={{ color: "rgb(33, 46, 68)" }}>Login</Link>
                                    <Link className="nav-link navButton" to="/register" style={{ color: "rgb(215, 86, 0)" }}>Sign up</Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

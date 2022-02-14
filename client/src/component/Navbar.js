import React from 'react'
import "../style/Navbar.css"
import smLogo from "../images/CarGoSpace_logo_sm.svg"

export default function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid ">
                <a className="navbar-brand" href="/">
                    <img style={{height: "40px" }} src={smLogo} alt="small Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-row-reverse " id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <a className="nav-link navButton" href="#" style={{color: "rgb(33, 46, 68)"}}>Login</a>
                        <a className="nav-link navButton" href="/register" style={{color: "rgb(215, 86, 0)"}}>Sign up</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

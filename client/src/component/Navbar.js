import React, { useContext } from 'react';
import "../style/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import smLogo from "../images/CarGoSpace_logo_sm.svg";
import { CookieContext } from '../context/userContext';
import { logout } from '../API/apiRequests';
import emptyProfilImg from "../images/icons/empty_profil_img.svg"

export default function Navbar() {

    // ________ get isLogged (boolean value) & updateContext (function) from CookieContext ________________
    const { isLogged, updateContext, cookie } = useContext(CookieContext);
    const navigate = useNavigate();

    //_________ on Logout click, clear cookies, update the cookie context & redirect to homepage___________
    const handleLogout = async () => {
        await logout();
        updateContext();
        navigate("/", { replace: true });
    };

    return (
        <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light">
            <div className="container-fluid ">
                <div>
                    {/* _________ Navbar CarGoSpace Icon (Link to homepage if clicked) ________________________ */}
                    <Link className="navbar-brand" to={isLogged ? "/feed" : "/"}>
                        <img style={{ height: "40px" }} src={smLogo} alt="small Logo" />
                    </Link>
                </div>

                {
                    isLogged &&
                    <div>
                        <img 
                        src={cookie.userImage ? cookie.userImage : emptyProfilImg} 
                        alt="Profil pic" 
                        style={{height: "35px", width: "35px", objectFit: "cover", borderRadius: "50%", marginRight: "0.5rem"}}
                        />
                        <span>{cookie.username}</span>
                    </div>
                }

                <div>
                    {/* _________ On small screen hamburger menu button _______________________________________ */}
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

                    {/* _________ show Navlinks depending on if user is logged in ______________________________ */}
                    <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            {
                                isLogged ?
                                    <>
                                        <input className='nav-link navButton logout' type="submit" onClick={handleLogout} value="Logout" style={{ color: "rgb(33, 46, 68)" }} />
                                    </>
                                    :
                                    <>
                                        <Link
                                            className="nav-link navButton login"
                                            to="/register"
                                            state={{ register: false }}
                                            style={{ color: "rgb(33, 46, 68)" }}
                                        >
                                            Login
                                        </Link>

                                        <Link
                                            className="nav-link navButton singUp"
                                            to="/register"
                                            state={{ register: true }}
                                            style={{ color: "rgb(215, 86, 0)" }}
                                        >
                                            Sign up
                                        </Link>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

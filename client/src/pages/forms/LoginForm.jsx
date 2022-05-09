

import React from 'react'
// import {history} from "react-router-dom"
import useToggleState from "../../hooks/useToggleState";
import useInputState from '../../hooks/useInputState';
import { toast } from 'react-toastify';
import headlightOffIcon from "../../images/icons/Headlights_off.svg";
import headlightOnIcon from "../../images/icons/Headlights_on.svg";
import axios from 'axios';

export default function LoginForm() {

    //_______________useStates & custom hooks______________________________________
    const [email, handleEmail] = useInputState("");
    const [pw, handlePw] = useInputState("");
    const [rememberMe, toggleRememberMe] = useToggleState(false);
    const [showPw, toggleShowPw] = useToggleState(false)

    //_______________checkbox & button styling______________________________________
    const styling = {
        backgroundColor: "rgb(215, 86, 0)",
        borderColor: "rgb(215, 86, 0)"
    };
    const removeCheckStyling = {
        backgroundColor: "white",
        borderColor: "lightgray"
    };

    //_______________show password styling______________________________________
    const headlightStyle = {
        height: "15px",
        position: "absolute",
        right: "5%",
        top: "30%",
        cursor: "pointer"
    }

    //_______________handle form submit______________________________________
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        axios.post("http://localhost:8080/login", { email, pw, rememberMe }, { withCredentials: true })
            .then(function (response) {
                toast.success(' Wow so easy! 🚘', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(() => { window.location.href = "http://localhost:3000/feed" }, 2000);
            })
            .catch(function (error) {
                toast.error(error.response.data, {
                    position: "top-center",
                    autoClose: 7500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };


    return (
        <>
            {/* _______________Login Form______________________________________ */}
            <form onSubmit={handleSubmit} >
                {/* _______________E-Mail address input______________________________________ */}
                <div className="row mb-3">
                    <div>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="E-Mail address"
                            aria-label="E-Mail address"
                            value={email}
                            onChange={handleEmail}
                        />
                    </div>
                </div>
                {/* _______________Password input______________________________________ */}
                <div className="row ">
                    <div className='mb-1' style={{ position: "relative" }}>
                        <input
                            type={showPw ? "text" : "password"}
                            className="form-control form-control-sm"
                            placeholder="Password"
                            aria-label="Password"
                            value={pw}
                            onChange={handlePw}
                        />
                        <img src={showPw ? headlightOnIcon : headlightOffIcon} style={headlightStyle} onClick={toggleShowPw} alt=""/>
                    </div>
                </div>
                {/* _______________Remember Me checkbox______________________________________ */}
                <div className="form-check d-flex justify-content-start mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input check"
                        checked={rememberMe}
                        id="flexCheckDefault"
                        value={rememberMe}
                        onChange={toggleRememberMe}
                        style={rememberMe ? styling : removeCheckStyling}
                    />
                    <label
                        className="form-check-label text-muted fw-bold ms-2 smallText d-flex align-items-center"
                        htmlFor="flexCheckDefault"
                    >
                        Remember me
                    </label>
                </div>
                {/* _______________Form Button______________________________________ */}
                <button
                    type="submit"
                    className="btn btn-danger d-flex justify-content-start fw-bold"
                    style={styling}
                >
                    Login
                </button>
            </form>

        </>
    )
}

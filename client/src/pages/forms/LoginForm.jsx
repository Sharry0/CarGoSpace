

import React, { useState } from 'react'
import useToggleState from "../../hooks/useToggleState";
import useInputState from '../../hooks/useInputState';
import "../../style/LoginForm.css"
import axios from 'axios';

export default function LoginForm() {

    //_______________useStates & custom hooks______________________________________
    const [email, handleEmail] = useInputState("");
    const [pw, handlePw] = useInputState("");
    const [rememberMe, toggleRememberMe] = useToggleState(false);

    //_______________checkbox styling______________________________________
    const styling = {
        backgroundColor: "rgb(215, 86, 0)",
        borderColor: "rgb(215, 86, 0)"
    };
    const removeCheckStyling = {
        backgroundColor: "white",
        borderColor: "lightgray"
    };

    //_______________handle form submit______________________________________
    const handleSubmit = (evt) => {
        evt.preventDefault();
        // axios({
        //     method: "post",
        //     url: "http://localhost:8080/login",
        //     // baseURL: "http://localhost:3000",
        //     data: { email, pw, rememberMe },
        //     // withCredentials: true
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        // console.log({email, pw, rememberMe});
        axios.post("http://localhost:8080/login", { email, pw, rememberMe })
            .then(function (response) {
                console.log(response.data, "success");
            })
            .catch(function (error) {
                console.log(error, "no success");
            });
    };


    return (
        <>
            {/* _______________Login Form______________________________________ */}
            <form onSubmit={handleSubmit} method="GET">
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
                    <div className='mb-1'>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Password"
                            aria-label="Password"
                            value={pw}
                            onChange={handlePw}
                        />
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

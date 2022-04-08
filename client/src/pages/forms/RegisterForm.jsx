
import React, { useRef, useState } from 'react';
import useToggleState from "../../hooks/useToggleState";
import useInputState from '../../hooks/useInputState';
import headlightOffIcon from "../../images/icons/Headlights_off.svg";
import headlightOnIcon from "../../images/icons/Headlights_on.svg";
import { toast } from 'react-toastify';
import axios from "axios";

export default function RegisterForm() {

    //_______________Year Selection generator__________________________________________________________________________
    const endYear = (new Date()).getFullYear();
    const startYear = endYear - 120;
    const yearSelection = [];
    for (let i = endYear; i > startYear; i--) {
        yearSelection.push(i)
    };

    //_______________Day Selection generator__________________________________________________________________________
    const daySelection = []
    for (let i = 1; i <= 31; i++) {
        daySelection.push(i);
    };
    //_______________Month Selection__________________________________________________________________________
    const monthSelection = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //_______________Gender Selection__________________________________________________________________________
    const genderSelection = ["Female", "Male", "Other"];

    //_______________useStates & custom hooks__________________________________________________________________________
    const [month, handleMonth] = useInputState(`${monthSelection[0]}`);
    const [day, handleDay] = useInputState(`${daySelection[0]}`);
    const [year, handleYear] = useInputState(`${endYear}`);
    const [gender, handleGender] = useInputState(`${genderSelection[0]}`);
    const [username, handleUsername] = useInputState("");
    const [email, handleEmail] = useInputState("");
    const [pw, handlePw] = useInputState("");
    const [showPw, toggleShowPw] = useToggleState(false);
    //_______________password condition states__________________________________________________________________________
    const [showPwConditions, setShowPwConditions] = useState(false);
    const [hasUppercase, setHasUppercase] = useState(false);
    const [hasLowercase, setHasLowercase] = useState(false);
    const [hasEnoughCharacters, setHasEnoughCharcters] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSymbol, setHasSymbol] = useState(false);

    //_______________check for password conditions & handle password input_______________________________________________
    const handlePasswordInput = (evt) => {
        handlePw(evt);
        uppercaseCheck(evt);
        lowercaseCheck(evt);
        enoughtCharactersCheck(evt);
        numberCheck(evt)
        symbolCheck(evt)
    };
    //_______________check for uppercase_______________________________________________
    const uppercaseCheck = (evt) => {
        const check = /[A-Z]/.test(evt.target.value);
        toggleCondition(check, setHasUppercase);
    };
    //_______________check for lowercase_______________________________________________
    const lowercaseCheck = (evt) => {
        const check = /[a-z]/.test(evt.target.value);
        toggleCondition(check, setHasLowercase);
    };
    //_______________check for enough characters_______________________________________________
    const enoughtCharactersCheck = (evt) => {
        if (evt.target.value.length >= 8) {
            toggleCondition(true, setHasEnoughCharcters);
        } else {
            toggleCondition(false, setHasEnoughCharcters);
        };
    }
    //_______________check for number_______________________________________________
    const numberCheck = (evt) => {
        const check = /[0-9]/.test(evt.target.value);
        toggleCondition(check, setHasNumber);
    }
    //_______________check for symbol_______________________________________________
    const symbolCheck = (evt) => {
        const check = /[\!\?\$\+\_\-]/.test(evt.target.value);
        toggleCondition(check, setHasSymbol);
    }

    //_______________toggle conditions function_______________________________________________
    const toggleCondition = (condition, checkFunction) => {
        if (condition) {
            checkFunction(true)
        };
        if (!condition) {
            checkFunction(false)
        };
    }

    //_______________toggle show Password conditions when focus on password input______________________________________
    const pwConditionsRef = useRef(null);
    const toggleShowPwConditions = (e) => {
        if (e.target.ariaLabel === pwConditionsRef.current.ariaLabel) {
            setShowPwConditions(true)
        }
        if (e.target.ariaLabel !== pwConditionsRef.current.ariaLabel) {
            setShowPwConditions(false)
        }
    }

    //_______________ button styling_____________________________________________________________________________________________
    const styling = {
        backgroundColor: "rgb(215, 86, 0)",
        borderColor: "rgb(215, 86, 0)"
    }
    const invalidPw = {
        color: "rgb(215, 86, 0)",
        fontSize: "0.75rem"
    }
    const validPw = {
        color: "rgb(86, 215, 0)",
        fontSize: "0.75rem"
    };

    //_______________show password styling______________________________________
    const headlightStyle = {
        height: "15px",
        position: "absolute",
        right: "5%",
        top: "30%",
        cursor: "pointer"
    };

    //_______________handle form submit__________________________________________________________________________
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (hasUppercase && hasLowercase && hasSymbol && hasNumber && hasEnoughCharacters) {
            axios.post("http://localhost:8080/register", {
                username,
                email,
                pw,
                birthday: {
                    month,
                    day,
                    year,
                },
                gender
            }, { withCredentials: true })
                .then(function (response) {
                    toast.success(response.data, {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setTimeout(() => { window.location.href = "http://localhost:3000/feed" }, 2500);
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
        } else {
            toast.error("someting went wong", {
                position: "top-center",
                autoClose: 7500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }

    return (
        <>
            {/* _______________Register Form__________________________________________________________________________ */}
            <form
                onSubmit={handleSubmit}
                onFocus={toggleShowPwConditions}
            >

                {/* _______________Username input__________________________________________________________________________ */}
                <div className="col mb-3">
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Username"
                        aria-label="Username"
                        value={username}
                        onChange={handleUsername}
                    />
                </div>

                {/* _______________E-Mail address input__________________________________________________________________________ */}
                <div className="row mb-3">
                    <div className="col">
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
                {/* _______________Password input__________________________________________________________________________ */}
                <div className="row mb-1">
                    <div className="col" style={{ position: "relative" }}>
                        <input
                            type={showPw ? "text" : "password"}
                            className="form-control form-control-sm "
                            placeholder="Password"
                            aria-label="Password"
                            value={pw}
                            onChange={handlePasswordInput}
                            ref={pwConditionsRef}
                        />
                        <img src={showPw ? headlightOnIcon : headlightOffIcon} style={headlightStyle} onClick={toggleShowPw} />
                    </div>
                </div>
                {/* _______________show Password conditions__________________________________________________________________________ */}
                {showPwConditions && <div className="ms-2 mb-3 d-flex justify-content-start">
                    <div className="row col-5">
                        <span className="mb-1 text-start fw-bold" style={hasUppercase ? validPw : invalidPw} >
                            atleast 1 uppercase letter
                        </span>
                        <span className="mb-1 text-start fw-bold" style={hasLowercase ? validPw : invalidPw} >
                            atleast 1 lowercase letter
                        </span>
                        <span className="text-start fw-bold" style={hasEnoughCharacters ? validPw : invalidPw} >
                            atleast 8 characters
                        </span>
                    </div>
                    <div className="d-flex flex-column">
                        <span className="mb-1 text-start fw-bold" style={hasNumber ? validPw : invalidPw} >
                            atleast 1 number
                        </span><span className="text-start fw-bold " style={hasSymbol ? validPw : invalidPw} >
                            atleast 1 symbol (! ? $ + _ -)
                        </span>
                    </div>

                </div>}
                {/* _______________Birthday input__________________________________________________________________________ */}
                <div className="row mb-3">
                    <p className='m-0 ms-2 text-start text-black-50 fw-bold smallText' >Birthday</p>
                    {/* _______________Month selection__________________________________________________________________________ */}
                    <div className="col-4">
                        <select
                            className="form-select text-muted form-select-sm"
                            value={month}
                            onChange={handleMonth}
                            aria-label="Default select example"
                        >
                            {monthSelection.map(m =>
                                <option key={m} value={`${m}`}>{`${m}`}</option>
                            )}
                        </select>
                    </div>
                    {/* _______________Day selection__________________________________________________________________________ */}
                    <div className="col-4">
                        <select
                            className="form-select text-muted form-select-sm"
                            value={day}
                            onChange={handleDay}
                            aria-label="Default select example"
                        >
                            {daySelection.map(d =>
                                <option key={d} value={`${d}`}>{`${d}`}</option>
                            )}
                        </select>
                    </div>
                    {/* _______________Year selection__________________________________________________________________________ */}
                    <div className="col-4">
                        <select
                            className="form-select text-muted form-select-sm"
                            value={year} onChange={handleYear}
                            aria-label="Default select example"
                        >
                            {yearSelection.map(y =>
                                <option key={y} value={`${y}`}>{`${y}`}</option>
                            )}
                        </select>
                    </div>
                </div>
                {/* _______________Gender selection__________________________________________________________________________ */}
                <p className='m-0  ms-2 text-start text-black-50 fw-bold smallText'>Gender</p>
                <div className="col-4 pe-3 mb-3">
                    <select
                        className="form-select text-muted form-select-sm"
                        value={gender}
                        onChange={handleGender}
                        aria-label="Default select example"
                    >
                        {genderSelection.map(y =>
                            <option key={y} value={`${y}`}>{`${y}`}</option>
                        )}
                    </select>
                </div>
                {/* _______________Form Button__________________________________________________________________________ */}
                <button
                    type="submit"
                    className="btn btn-danger d-flex justify-content-start fw-bold"
                    style={styling}
                >
                    Sign up
                </button>
            </form>

        </>
    )
}

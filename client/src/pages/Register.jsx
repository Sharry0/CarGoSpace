import React, { useState } from 'react'
import useToggleState from "../hooks/useToggleState"
import useInputState from '../hooks/useInputState';
import "../style/Register.css"

export default function Register() {

    //_______________Year Selection generator______________________________________
    const endYear = (new Date()).getFullYear();
    const startYear = endYear - 120;
    const yearSelection = []
    for (let i = endYear; i > startYear; i--) {
        yearSelection.push(i)
    }

    //_______________Day Selection generator______________________________________
    const daySelection = []
    for (let i = 1; i <= 31; i++) {
        daySelection.push(i);
    }
    //_______________Month Selection______________________________________
    const monthSelection = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    //_______________Gender Selection______________________________________
    const genderSelection = ["Female", "Male", "Other"]

    //_______________useStates & custom hooks______________________________________
    const [register, toggleRegister] = useToggleState(true);
    const [month, handleMonth] = useInputState(`${monthSelection[0]}`);
    const [day, handleDay] = useInputState(`${daySelection[0]}`);
    const [year, handleYear] = useInputState(`${endYear}`)
    const [gender, handleGender] = useInputState(`${genderSelection[0]}`)

    //_______________Styling object______________________________________
    const styling = { color: "rgb(33, 46, 68)" }
    const bgColor = { backgroundColor: "red" }
    return <div className='container pt-5 '>
        <div className="card bg-light text-center mt-5 col-6 offset-3">
            <div className="card-header">
                {/* _______________Register & Login Tabs______________________________________ */}
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item  col-6">
                        <input type="button"
                            className={`nav-link col-12 
                            text-center 
                            fw-bold
                            ${register && "active"} 
                            ${!register && "text-black-50"}
                            `}
                            style={styling}
                            value={"Register"}
                            onClick={toggleRegister}
                        />
                    </li>
                    <li className="nav-item col-6">
                        <input type="button"
                            className={`nav-link col-12 
                            text-center 
                            fw-bold
                            ${!register && "active"} 
                            ${register && "text-black-50"}
                            `}
                            style={styling}
                            value={"Login"}
                            onClick={toggleRegister}
                        />
                    </li>
                </ul>
            </div>
            <div className="card-body">
                {register ?
                    <form> {/* _______________Register Form______________________________________ */}
                        <div className="row">
                            {/* _______________First name input______________________________________ */}
                            <div className="col mb-3">
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            {/* _______________Last name input______________________________________ */}
                            <div className="col mb-3">
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div>
                        {/* _______________E-Mail address input______________________________________ */}
                        <div className="row mb-3">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="E-Mail address" aria-label="E-Mail address" />
                            </div>
                        </div>
                        {/* _______________Password input______________________________________ */}
                        <div className="row mb-3">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Password" aria-label="Password" />
                            </div>
                        </div>
                        {/* _______________Birthday input______________________________________ */}
                        <div className="row mb-3">
                            <p className='m-0 ms-2 text-start text-black-50 fw-bold smallText' >Birthday</p>
                            {/* _______________Month selection______________________________________ */}
                            <div className="col-4">
                                <select className="form-select text-muted" value={month} onChange={handleMonth} aria-label="Default select example">
                                    {monthSelection.map(m =>
                                        <option key={m} value={`${m}`}>{`${m}`}</option>
                                    )}
                                </select>
                            </div>
                            {/* _______________Day selection______________________________________ */}
                            <div className="col-4">
                                <select className="form-select text-muted" value={day} onChange={handleDay} aria-label="Default select example">
                                    {daySelection.map(d =>
                                        <option key={d} value={`${d}`}>{`${d}`}</option>
                                    )}
                                </select>
                            </div>
                            {/* _______________Year selection______________________________________ */}
                            <div className="col-4">
                                <select className="form-select text-muted" value={year} onChange={handleYear} aria-label="Default select example">
                                    {yearSelection.map(y =>
                                        <option key={y} value={`${y}`}>{`${y}`}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        {/* _______________Gender selection______________________________________ */}
                        <p className='m-0  ms-2 text-start text-black-50 fw-bold smallText'>Gender</p>
                        <div className="col-4 pe-3 mb-3">
                            <select className="form-select text-muted" value={gender} onChange={handleGender} aria-label="Default select example">
                                {genderSelection.map(y =>
                                    <option key={y} value={`${y}`}>{`${y}`}</option>
                                )}
                            </select>
                        </div>
                        {/* _______________Form Button______________________________________ */}
                        <button type="submit" className="btn btn-dark d-flex justify-content-start fw-bold">Sign in</button>
                    </form>
                    :
                    <form> {/* _______________Login Form______________________________________ */}
                        {/* _______________E-Mail address input______________________________________ */}
                        <div className="row mb-3">
                            <div>
                                <input type="text" className="form-control" placeholder="E-Mail address" aria-label="E-Mail address" />
                            </div>
                        </div>
                        {/* _______________Password input______________________________________ */}
                        <div className="row ">
                            <div className='mb-1'>
                                <input type="text" className="form-control" placeholder="Password" aria-label="Password" />
                            </div>
                        </div>
                        {/* _______________Remember Me checkbox______________________________________ */}
                        <div className="form-check d-flex justify-content-start mb-3">
                            <input className="form-check-input" type="checkbox" value="rememberMe" id="flexCheckDefault" />
                            <label className="form-check-label text-muted fw-bold ms-1 smallText d-flex align-items-center" htmlFor="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                        {/* _______________Form Button______________________________________ */}
                        <button type="submit" className="btn btn-dark d-flex justify-content-start fw-bold">Sign in</button>
                    </form>
                }
            </div>
        </div>







    </div>
}

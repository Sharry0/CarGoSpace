import React, { useState } from 'react'
import useToggleState from "../hooks/useToggleState"
import useInputState from '../hooks/useInputState';

export default function Register() {

    const [register, toggleRegister] = useToggleState(true);
    const [month, handleMonth] = useInputState("Jan");
    const [day, handleDay] = useInputState("01");
    const [year, handleYear] = useInputState("1990")

    const styling = {color: "rgb(33, 46, 68)"}

    return <div className='container pt-5 '>
        <div className="card text-center mt-5 col-6 offset-3">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item col-6">
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
                <form>
                    <div className="row">
                        <div className="col mb-3">
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                        </div>
                        <div className="col mb-3">
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="E-Mail Adress" aria-label="E-Mail Adress" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Password" aria-label="Password" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col mb-3">
                            <select className="form-select" value={month} onChange={handleMonth} aria-label="Default select example">
                                <option value="Jan">Jan</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col mb-3">
                            <select className="form-select" value={day} onChange={handleDay} aria-label="Default select example">
                                <option value="01">01</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col mb-3">
                            <select className="form-select" value={year} onChange={handleYear} aria-label="Default select example">
                                <option value="1990">1990</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>

            </div>
        </div>







    </div>
}

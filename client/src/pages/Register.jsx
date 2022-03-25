import React, { useContext } from 'react'
import useToggleState from "../hooks/useToggleState"
// import useInputState from '../hooks/useInputState';
import RegisterForm from './forms/RegisterForm';
import LoginForm from './forms/LoginForm';
import "../style/Register.css"
import { SomeContext } from '../context/userContext';



export default function Register() {

    const color = useContext(SomeContext);
    //_______________useStates & custom hooks______________________________________
    const [register, toggleRegister] = useToggleState(true);

    //_______________Styling object______________________________________
    const tabStyling = {
        color: "rgb(33, 46, 68)",
        backgroundColor: "rgb(248, 249, 250)",
        borderBottomColor: "rgb(248, 249, 250)"
    };

    return <div className='container pt-5 '>
        <div className="card bg-light text-center mt-5 col-6 offset-3">
            <div className="card-header">
                {/* _______________Register & Login Tabs______________________________________ */}
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item  col-6">
                        <input type="button"
                            className={`
                            nav-link col-12 
                            text-center 
                            fw-bold
                            ${register && "active"} 
                            ${!register && "text-black-50"}
                            `}
                            style={register ? tabStyling : {}}
                            value={"Register"}
                            onClick={toggleRegister}
                        />
                    </li>
                    <li className="nav-item col-6">
                        <input type="button"
                            className={`
                            nav-link col-12 
                            text-center 
                            fw-bold
                            ${!register && "active"} 
                            ${register && "text-black-50"}
                            `}
                            style={!register ? tabStyling : {}}
                            value={"Login"}
                            onClick={toggleRegister}
                        />
                    </li>
                </ul>
            </div>
            {/* _______________show Register or Login Form______________________________________ */}
            <div className="card-body">
                {register ?
                    <RegisterForm />
                    :
                    <LoginForm />
                }
            </div>
        </div>







    </div>
}

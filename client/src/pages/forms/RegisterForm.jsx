
import React from 'react';
import useToggleState from "../../hooks/useToggleState";
import useInputState from '../../hooks/useInputState';

export default function RegisterForm() {

    //_______________Year Selection generator______________________________________
    const endYear = (new Date()).getFullYear();
    const startYear = endYear - 120;
    const yearSelection = [];
    for (let i = endYear; i > startYear; i--) {
        yearSelection.push(i)
    };

    //_______________Day Selection generator______________________________________
    const daySelection = []
    for (let i = 1; i <= 31; i++) {
        daySelection.push(i);
    }
    //_______________Month Selection______________________________________
    const monthSelection = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //_______________Gender Selection______________________________________
    const genderSelection = ["Female", "Male", "Other"];

    //_______________useStates & custom hooks______________________________________
    const [month, handleMonth] = useInputState(`${monthSelection[0]}`);
    const [day, handleDay] = useInputState(`${daySelection[0]}`);
    const [year, handleYear] = useInputState(`${endYear}`)
    const [gender, handleGender] = useInputState(`${genderSelection[0]}`)
    const [firstName, handleFirstName] = useInputState("");
    const [lastName, handleLastname] = useInputState("");
    const [email, handleEmail] = useInputState("");
    const [pw, handlePw] = useInputState("");

    const styling = {
        backgroundColor: "rgb(215, 86, 0)",
        borderColor: "rgb(215, 86, 0)"
    };

    return (
        <>
            {/* _______________Register Form______________________________________ */}
            <form>
                <div className="row">
                    {/* _______________First name input______________________________________ */}
                    <div className="col mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            aria-label="First name"
                            value={firstName}
                            onChange={handleFirstName}
                        />
                    </div>
                    {/* _______________Last name input______________________________________ */}
                    <div className="col mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            aria-label="Last name"
                            value={lastName}
                            onChange={handleLastname}
                        />
                    </div>
                </div>
                {/* _______________E-Mail address input______________________________________ */}
                <div className="row mb-3">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="E-Mail address"
                            aria-label="E-Mail address"
                            value={email}
                            onChange={handleEmail}
                        />
                    </div>
                </div>
                {/* _______________Password input______________________________________ */}
                <div className="row mb-3">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Password"
                            aria-label="Password"
                            value={pw}
                            onChange={handlePw}
                        />
                    </div>
                </div>
                {/* _______________Birthday input______________________________________ */}
                <div className="row mb-3">
                    <p className='m-0 ms-2 text-start text-black-50 fw-bold smallText' >Birthday</p>
                    {/* _______________Month selection______________________________________ */}
                    <div className="col-4">
                        <select
                            className="form-select text-muted"
                            value={month}
                            onChange={handleMonth}
                            aria-label="Default select example"
                        >
                            {monthSelection.map(m =>
                                <option key={m} value={`${m}`}>{`${m}`}</option>
                            )}
                        </select>
                    </div>
                    {/* _______________Day selection______________________________________ */}
                    <div className="col-4">
                        <select
                            className="form-select text-muted"
                            value={day}
                            onChange={handleDay}
                            aria-label="Default select example"
                        >
                            {daySelection.map(d =>
                                <option key={d} value={`${d}`}>{`${d}`}</option>
                            )}
                        </select>
                    </div>
                    {/* _______________Year selection______________________________________ */}
                    <div className="col-4">
                        <select
                            className="form-select text-muted"
                            value={year} onChange={handleYear}
                            aria-label="Default select example"
                        >
                            {yearSelection.map(y =>
                                <option key={y} value={`${y}`}>{`${y}`}</option>
                            )}
                        </select>
                    </div>
                </div>
                {/* _______________Gender selection______________________________________ */}
                <p className='m-0  ms-2 text-start text-black-50 fw-bold smallText'>Gender</p>
                <div className="col-4 pe-3 mb-3">
                    <select
                        className="form-select text-muted"
                        value={gender}
                        onChange={handleGender}
                        aria-label="Default select example"
                    >
                        {genderSelection.map(y =>
                            <option key={y} value={`${y}`}>{`${y}`}</option>
                        )}
                    </select>
                </div>
                {/* _______________Form Button______________________________________ */}
                <button
                    type="submit"
                    className="btn btn-danger d-flex justify-content-start fw-bold"
                    style={styling}
                >
                    Sign in
                </button>
            </form>

        </>
    )
}

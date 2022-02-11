import React from 'react'
import logo from "./images/CarGoSpace_logo.svg"
import smLogo from "./images/CarGoSpace_logo_sm.svg"

export default function Home() {
    return <div className=''>
        
        <main className='d-flex flex-row align-items-center vh-100 '>
            <div className='col-6'>
                <h1>We love cars.</h1>
                <h2>Social Network for <br /> Car enthusiasts.</h2>
                <p>A place where you can connect with new people and share you stories, experience and love for cars</p>
            </div>
            <img className='col-6 ' src={logo} alt="CarGoSpace Logo" />
        </main>
    </div>

}

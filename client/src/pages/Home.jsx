import React from 'react'
import logo from "../images/CarGoSpace_logo.svg"
import bgCurves from "../images/background_curve.svg"
import "../style/Home.css"

export default function Home() {
    return <>
        <div className='home'>

            <main className='d-flex flex-row align-items-center vh-100 mx-5 main '>
                <div className='col-6 ps-5'>
                    <h1 id='title'>We love cars.</h1>
                    <h2 id='subtitle'>Social Network for <br /> Car enthusiasts.</h2>
                    <p id='subtext'>A place where you can connect with new people <br /> and share you stories, experience and <br /> love for cars.</p>
                    <button className='button'>Join the Family</button>
                </div>

                <img className='col-6 logo pe-5' src={logo} alt="CarGoSpace Logo" />

                <img className='bgCurves position-absolute' src={bgCurves} alt="" />
            </main>
        </div>
    </>

}

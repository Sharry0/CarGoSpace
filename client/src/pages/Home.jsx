import React from 'react'
import { Link } from "react-router-dom"
import logo from "../images/CarGoSpace_logo.svg"
import "../style/Home.css"

export default function Home() {

    const styling = {
        background: "rgb(215, 86, 0)",
        color: "white",
        fontWeight: "bold",
        borderRadius: "5px",
        border: "none",
        padding: "0.8rem 1rem",
        textDecoration: "none"
    }

    return <>
        
        <div className='home'>
            <main className='d-flex flex-xl-row flex-column align-items-center justify-content-center vh-100 mx-5 main '>
                <div className='col-xl-6 ps-5 mb-5 '>
                    <h1 id='title'>We love cars.</h1>
                    <h2 id='subtitle'>Social Network for <br /> Car enthusiasts.</h2>
                    <p id='subtext'>A place where you can connect with new people <br /> and share you stories, experience and <br /> love for cars.</p>
                    <Link className='joinButton' to="/register" state={{ register: true }} style={styling} >Join the Family</Link>
                </div>
                
                <img className='col-lg-6  col-md-8 logo pe-5' src={logo} alt="CarGoSpace Logo" />

            </main>
        </div>
    </>

}

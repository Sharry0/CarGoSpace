
import React from 'react'
import "../style/Loading.css"

export default function Loading() {
    return (
        <div id="loader-wrapper">
            <div className="loader">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="subline"></div>
                <div className="subline"></div>
                <div className="subline"></div>
                <div className="subline"></div>
                <div className="subline"></div>
                <div className="loader-circle-1">
                    <div className="loader-circle-2"></div>
                </div>
                <div className="needle"></div>
                <div className="loading">CarGoSpace</div>
            </div>
        </div>
    )
}


import React from 'react'
import settingsIcon from "../images/icons/settings_icon.svg"


export default function Feed() {
    const post = [
        {
            postTitle: "Great car",
            postText: "i love this car, its very fast",
            postAuthor: "Bobby"
        },
        {
            postTitle: "Great car",
            postText: "i love this car, its very fast",
            postAuthor: "Bobby"
        },
        {
            postTitle: "Great car",
            postText: "i love this car, its very fast",
            postAuthor: "Bobby"
        }
    ]

    const profileIconStyling = {
        height: "35px",
        maxWidth: "35px",
        borderRadius: "50%",
        objectFit: "cover"
    }

    return (
        <div className='container pt-5'>


            <main className='d-flex justify-content-center'>
                {/* _______________Sidebar content______________________________________ */}
                <div className="card col-2 shadow" style={{ fontSize: "0.8rem", height: "200px" }}>
                    <div
                        className="card-body d-flex flex-column justify-content-between"
                    >
                        {/* _______________Links______________________________________ */}
                        <div className='d-flex flex-column'>
                            <a
                                href="#"
                                className="card-link text-reset text-decoration-none"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="card-link m-0 text-reset text-decoration-none"
                            >
                                Careers
                            </a>
                            <a
                                href="#"
                                className="card-link m-0 text-reset text-decoration-none"
                            >
                                Policies
                            </a>
                        </div>
                        {/* _______________Sidebar footer______________________________________ */}
                        <div>
                            <p className="card-text text-muted justify-self-end m-0">
                                2022 CarGoSpace Inc &copy;.
                            </p>
                            <p className="card-text text-muted justify-self-end">
                                All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
                {/* _______________Create post & show feed content______________________________________ */}
                <div className='col-6 mx-5'>
                    {/* _______________Create post______________________________________ */}
                    <div className='card p-3 d-flex flex-row mb-3'>
                        {/* _______________Profil picture icon______________________________________ */}
                        <img src="https://assets.cdn.moviepilot.de/files/6e4bc29be481dad6d2fd2b3011df1409083166f3e22a97bdae27a428dfff/fill/1200/576/Yoshi.jpg" alt="" style={profileIconStyling} className="me-4" />
                        {/* _______________Create post input link______________________________________ */}
                        <input
                            className="form-control"
                            type="text"
                            defaultValue="Create a post"
                            aria-label="readonly input example"
                            readOnly
                        />
                    </div>
                    {/* _______________Show feed content______________________________________ */}
                    <div className="card col-12 shadow my-3">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-footer">
                            Card footer
                        </div>
                    </div>



                </div>
            </main>

        </div>
    )
}

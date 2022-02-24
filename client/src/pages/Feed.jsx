
import React from 'react';
import settingsIcon from "../images/icons/settings_icon.svg";
import emptyProfilImg from "../images/icons/empty_profil_img.svg";
import commentIcon from "../images/icons/comment_icon.svg";
import likeIcon from "../images/icons/like_icon.svg";
import editIcon from "../images/icons/edit_icon.svg";


export default function Feed() {
    const post = [
        {
            postTitle: "Great car",
            postText: "i love this car, its very fast",
            postAuthor: "Bobby",
            profilImg: "https://assets.cdn.moviepilot.de/files/6e4bc29be481dad6d2fd2b3011df1409083166f3e22a97bdae27a428dfff/fill/1200/576/Yoshi.jpg",
            commentsNr: "35"
        },
        {
            postTitle: "Great car",
            postText: " love this car.",
            postAuthor: "Frank",
            profilImg: "",
            commentsNr: "25"
        },
        {
            postTitle: "Great car",
            postText: " its very fast",
            postAuthor: "John",
            profilImg: "",
            commentsNr: "5"
        }
    ]

    const profileIconStyling = {
        height: "35px",
        maxWidth: "35px",
        borderRadius: "50%",
        objectFit: "cover"
    }

    const postFooterStyling = {
        height: "20px",
        width: "20px"
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
                    <div className='card p-3 d-flex flex-row mb-3 shadow'>
                        {/* _______________Profil picture icon______________________________________ */}
                        <img src={emptyProfilImg} alt="" style={profileIconStyling} className="me-4" />
                        {/* _______________Create post input link______________________________________ */}
                        {/* ____________add a link to creat page to this input */}
                        <input
                            className="form-control bg-secondary bg-opacity-25"
                            type="text"
                            defaultValue="Create a post"
                            aria-label="readonly input example"
                            readOnly
                        />
                    </div>
                    {/* _______________Show feed content______________________________________ */}
                    <div className="card col-12 shadow my-3">
                        <div className="card-body">
                            <div className='d-flex flex-row align-items-center '>
                                <img src={emptyProfilImg} alt="" style={profileIconStyling} className="me-2" />
                                <h6 className="card-subtitle text-muted">Some_Profilname</h6>
                            </div>
                            <h5 className="card-title fw-bold fs-3 mt-2 text-dark text-opacity-75">Post title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-footer bg-secondary bg-opacity-25 d-flex flex-row ">
                            <a href="/" role="button" className='text-decoration-none text-muted d-flex flex-row align-items-center me-3' >
                                <img src={commentIcon} alt="" style={postFooterStyling} />
                                <p className='my-0 ms-1'>{`45 Comments`}</p>
                            </a>
                            <a href="/" role="button" className='text-decoration-none text-muted d-flex flex-row align-items-center me-3' >
                                <img src={likeIcon} alt="" style={postFooterStyling} />
                                <p className='my-0 ms-1'>{`100 Likes`}</p>
                            </a>
                            <a href="/" role="button" className='text-decoration-none text-muted d-flex flex-row align-items-center me-3' >
                                <img src={editIcon} alt="" style={postFooterStyling} />
                                <p className='my-0 ms-1'>Edit</p>
                            </a>
                        </div>
                    </div>



                </div>
            </main>

        </div>
    )
}

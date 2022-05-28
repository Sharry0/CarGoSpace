
import React, { useContext, useState, useEffect } from 'react';
import emptyProfilImg from "../images/icons/empty_profil_img.svg";
import commentIcon from "../images/icons/comment_icon.svg";
import likeIconEmpty from "../images/icons/like_icon.svg";
import likeIconFull from "../images/icons/like_icon_full.svg"
import editIcon from "../images/icons/edit_icon.svg";
import deleteIcon from "../images/icons/delete_icon.svg";
import { CookieContext } from '../context/userContext';
import { useNavigate, Link } from 'react-router-dom';
import { getPosts, likePost, unlikePost } from '../API/apiRequests';


export default function Feed() {
    const { cookie } = useContext(CookieContext);
    const navigate = useNavigate();

    const [posts, setPosts] = useState(null);
    const [runEffect, setRunEffect] = useState(false)

    // _________ Call API to get all Posts and save them in posts state ____________
    useEffect(() => {
        getPosts()
            .then(response => setPosts(response.data))
            .catch(err => console.log(err, "this a error"))
        setRunEffect(false)
    }, [runEffect]);

    const handlePostClick = (id) => {
        navigate(`/post/${id}`)
    };

    // __________ check if current user id is in likes array from Post, __________
    // __________ return true if so and false if not _____________________________
    const checkIfUserLiked = (post) => {
        return post.likersIds.some(element => element === cookie.id);
    }

    // __________ depending on if current user has liked this post, _______________
    // __________ run like API call or unlike API call on click of btn ____________
    const handleLikeClick = (post) => {
        if (checkIfUserLiked(post)) {
            unlikePost({ userId: cookie.id, postId: post._id });
        }
        if (!checkIfUserLiked(post)) {
            likePost({ userId: cookie.id, postId: post._id });
        };
        setRunEffect(true);
    };

    // __________ check if current user and post creator id are the same, _______
    // __________ return a boolean ______________________________________________
    const checkUserAndCreator = (post) => {
        return post.creator._id === cookie.id
    }
    // ___________________ styling ____________________________
    const profileIconStyling = {
        height: "35px",
        maxWidth: "35px",
        borderRadius: "50%",
        objectFit: "cover"
    };

    return (
        <div className='container pt-5'>
            <main className='d-flex justify-content-center'>
                {/* _______________Sidebar content______________________________________ */}
                {/* _______________make sticky top______________________________________ */}
                <div className="card col-2 shadow sticky-top" style={{ fontSize: "0.8rem", height: "200px"}}>
                    <div
                        className="card-body d-flex flex-column justify-content-between"
                    >
                        {/* _______________Links______________________________________ */}
                        <div className='d-flex flex-column'>
                            <a
                                href="/SOMEWHERE"
                                className="card-link text-reset text-decoration-none"
                            >
                                About
                            </a>
                            <a
                                href="/SOMEWHERE"
                                className="card-link m-0 text-reset text-decoration-none"
                            >
                                Careers
                            </a>
                            <a
                                href="/SOMEWHERE"
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
                        <img src={emptyProfilImg} style={profileIconStyling} className="me-4" alt="Profil image"/>
                        {/* _______________Create post input link______________________________________ */}
                        {/* ____________add a link to creat page to this input */}
                        <input
                            className="form-control bg-secondary bg-opacity-25 text-dark text-opacity-75"
                            type="text"
                            defaultValue="Create a post"
                            aria-label="readonly input example"
                            readOnly
                            onClick={() => navigate("/new")}
                        />
                    </div>
                    {/* _______________Show feed content______________________________________ */}

                    {!posts ?
                        <div className='d-flex flex-column align-items-center'>
                            <p className='fw-bold fs-5'>Something went wrong,  please try again later.</p>
                            <img src="https://c.tenor.com/DtOHYAtvTaoAAAAM/fail-mini-car.gif" alt="Something went wrong" className='col-6' />
                        </div>
                        :
                        posts.map(post => (
                            <div className="card col-12 shadow my-4" key={post._id}>
                                <div className="card-body" >
                                    {/* _______________Post profile pic & name______________________________________ */}
                                    <div className='d-flex flex-row align-items-center'>
                                        <img src={post.creator.userImage ? post.creator.userImage : emptyProfilImg}
                                            alt="Profil image"
                                            style={profileIconStyling} className="me-2"
                                            onClick={() => console.log("clicked profile")}
                                            role="button"
                                        />
                                        <h6 className="card-subtitle text-secondary text-opacity-75 mt-0">{post.creator.username}</h6>
                                    </div>
                                    <div role="button" onClick={() => handlePostClick(post._id)}>
                                        {/* _______________Post title______________________________________ */}
                                        <h5 className="card-title fw-bold fs-3 pt-2 text-dark text-opacity-75">{post.title}</h5>
                                        {/* _______________Post text______________________________________ */}
                                        <p className="card-text text-dark text-opacity-75 ">{post.text}</p>
                                    </div>
                                </div>
                                {/* _______________Post footer______________________________________ */}
                                <div className="card-footer bg-secondary bg-opacity-25 d-flex flex-row " style={{ fontSize: "0.8rem" }}>
                                    {/* _______________ Comment Icon ______________________________________ */}
                                    <Link
                                        to={`/post/${post._id}`}
                                        className='text-decoration-none text-muted d-flex flex-row align-items-center me-3'
                                    >
                                        <img src={commentIcon} alt="Comment icon" style={{ height: "15px", width: "15px" }} />
                                        <p className='my-0 ms-1'>{`${post.commentIds.length} Comment${post.commentIds.length !== 1 ? "s" : ""}`}</p>
                                    </Link>
                                    {/* _______________ Like Icon ______________________________________ */}
                                    <button
                                        style={{ border: "none", background: "transparent" }}
                                        className='text-decoration-none text-muted d-flex flex-row align-items-center me-3'
                                        onClick={() => handleLikeClick(post)}
                                    >
                                        <img src={checkIfUserLiked(post) ? likeIconFull : likeIconEmpty} alt="Like icon" style={{ height: "15px", width: "15px" }} />
                                        <p className='my-0 ms-1'>{`${post.likersIds.length} Like${post.likersIds.length !== 1 ? "s" : ""}`}</p>
                                    </button>
                                    {/* _______________ Edit Icon ______________________________________ */}
                                    {/* _______________ ADD ALT PROP TO IMG !!!!!! ______________________________________ */}
                                    {
                                        checkUserAndCreator(post) &&
                                        <>
                                            <Link
                                                to={`/post/${post._id}`}
                                                state={{ editMode: true }}
                                                className='text-decoration-none text-muted d-flex flex-row align-items-center me-3'
                                            >
                                                <img src={editIcon} alt="Edit icon" style={{ height: "15px", width: "15px" }} />
                                                <p className='my-0 ms-1'>Edit</p>
                                            </Link>
                                            <Link
                                                to={`/post/${post._id}`}
                                                className='text-decoration-none text-muted d-flex flex-row align-items-center me-3'
                                            >
                                                <img src={deleteIcon} alt="Delete icon" style={{ height: "15px", width: "15px" }} />
                                                <p className='my-0 ms-1'>Delete</p>
                                            </Link>
                                        </>
                                    }
                                </div>
                            </div>
                        ))}
                </div>
            </main>
        </div>
    )
}

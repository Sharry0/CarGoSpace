
import React, { useContext, useState, useEffect } from 'react';
import emptyProfilImg from "../images/icons/empty_profil_img.svg";
import commentIcon from "../images/icons/comment_icon.svg";
import likeIcon from "../images/icons/like_icon.svg";
import editIcon from "../images/icons/edit_icon.svg";
import { CookieContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../API/apiRequests';


export default function Feed() {
    const { isLogged } = useContext(CookieContext);
    const navigate = useNavigate();

    const [post, setPosts] = useState()

    const posts = [
        {
            profilName: "John_1978",
            profilImg: "https://assets.cdn.moviepilot.de/files/6e4bc29be481dad6d2fd2b3011df1409083166f3e22a97bdae27a428dfff/fill/1200/576/Yoshi.jpg",
            postId: "1",
            postTitle: "Great car",
            postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus maiores debitis, eveniet enim aliquid ex delectus, quo quisquam vero quod optio fuga accusantium, libero tenetur ea dolor quis corrupti?",
            commentsCount: 15,
            likesCount: 70
        },
        {
            profilName: "Bobby Ranger",
            profilImg: "",
            postId: "2",
            postTitle: "best car",
            postText: " love this car.",
            commentsCount: 25,
            likesCount: 10
        },
        {
            profilName: "Tedd_23",
            profilImg: "",
            postId: "3",
            postTitle: "Awesome",
            postText: " its very fast",
            commentsCount: 5,
            likesCount: 40
        }
    ]

    useEffect(() => {
        getPosts()
            .then( response => console.log(response.data))
            .catch(err => console.log(err,"this a error"))
    },[])



    const profileIconStyling = {
        height: "35px",
        maxWidth: "35px",
        borderRadius: "50%",
        objectFit: "cover"
    };

    const postFooterStyling = {
        height: "15px",
        width: "15px"
    };



    return (
        <div className='container pt-5'>
            <main className='d-flex justify-content-center'>
                {/* _______________Sidebar content______________________________________ */}
                {/* _______________make sticky top______________________________________ */}
                <div className="card col-2 shadow" style={{ fontSize: "0.8rem", height: "200px" }}>
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
                        <img src={emptyProfilImg} alt="" style={profileIconStyling} className="me-4" />
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

                    {posts.map(post => (
                        <div className="card col-12 shadow my-4" key={post.postId}>
                            <div className="card-body">
                                {/* _______________Post profile pic & name______________________________________ */}
                                <div className='d-flex flex-row align-items-center '>
                                    <img src={post.profilImg ? post.profilImg : emptyProfilImg} alt="" style={profileIconStyling} className="me-2" />
                                    <h6 className="card-subtitle text-secondary text-opacity-75">{post.profilName}</h6>
                                </div>
                                {/* _______________Post title______________________________________ */}
                                <h5 className="card-title fw-bold fs-3 mt-2 text-dark text-opacity-75">{post.postTitle}</h5>
                                {/* _______________Post text______________________________________ */}
                                <p className="card-text text-dark text-opacity-75 ">{post.postText}</p>
                            </div>
                            {/* _______________Post footer______________________________________ */}
                            <div className="card-footer bg-secondary bg-opacity-25 d-flex flex-row " style={{ fontSize: "0.8rem", backgroundColor: "red" }}>
                                <a href="/SOMEWHERE" role="button" className='text-decoration-none text-muted d-flex flex-row align-items-center me-3' >
                                    <img src={commentIcon} alt="" style={postFooterStyling} />
                                    <p className='my-0 ms-1'>{`${post.commentsCount} Comments`}</p>
                                </a>
                                <a href="/SOMEWHERE" role="button" className='text-decoration-none text-muted d-flex flex-row align-items-center me-3' >
                                    <img src={likeIcon} alt="" style={postFooterStyling} />
                                    <p className='my-0 ms-1'>{`${post.likesCount} Likes`}</p>
                                </a>
                                <a href="/SOMEWHERE" role="button" className='text-decoration-none text-muted d-flex flex-row align-items-center me-3' >
                                    <img src={editIcon} alt="" style={postFooterStyling} />
                                    <p className='my-0 ms-1'>Edit</p>
                                </a>
                            </div>
                        </div>
                    ))}



                </div>
            </main>

        </div>
    )
}

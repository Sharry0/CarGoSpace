
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
// ____________ Icon & images import _____________________
import emptyProfilImg from "../images/icons/empty_profil_img.svg";
import commentIcon from "../images/icons/comment_icon.svg";
import likeIconEmpty from "../images/icons/like_icon.svg";
import likeIconFull from "../images/icons/like_icon_full.svg"
import editIcon from "../images/icons/edit_icon.svg";
import deleteIcon from "../images/icons/delete_icon.svg"
// ____________ Costum hooks & context ___________________
import useToggleState from "../hooks/useToggleState";
import useInputState from "../hooks/useInputState";
import { CookieContext } from "../context/userContext";

import { updatePost, likePost, unlikePost } from "../API/apiRequests";

export default function PostSection({ post, setRunEffect }) {
    const { cookie } = useContext(CookieContext);
    const location = useLocation();

    const [editMode, toggleEditMode] = useToggleState(false);
    const [updatedTitle, setUpdatedTitle] = useInputState(post.title);
    const [updatedText, setUpdatedText] = useInputState(post.text);
    const [deletePopup, setDeletePopup] = useToggleState(false);

    useEffect(() => {
        if (location.state && location.state.editMode !== editMode) toggleEditMode();
        console.log("fish effect")
    })

    // ________ on submit when in edit more, run updatePost API call ______________
    // ________ toggle out of edit mode and run useEffect to show updated post ____
    const handleEditSubmit = (evt) => {
        evt.preventDefault();
        updatePost({ updatedTitle, updatedText, postId: post._id, currUserId: cookie.id });
        toggleEditMode();
        setRunEffect(true);
    };

    // __________ check if current user id is in likes array from Post, __________
    // __________ return true if so and false if not _____________________________
    const hasLiked = post.likersIds.some(element => element === cookie.id);

    // __________ depending on if current user has liked this post, _______________
    // __________ run like API call or unlike API call on click of btn ____________
    const handleLikeClick = () => {
        if (hasLiked) {
            unlikePost({ userId: cookie.id, postId: post._id });
        }
        if (!hasLiked) {
            likePost({ userId: cookie.id, postId: post._id });
        };
        setRunEffect(true);
    };

    // ____ if User cancels editing process, reset inputs and turn of editmode _____
    const cancelEditMode = (evt) => {
        evt.preventDefault();
        toggleEditMode();
    };

    // ____ 
    const handleDeleteClick = () =>{
        
    };

    // _____ check if post creator id and current user (cookie id) is the same  ______
    const showEditAndDelBtn = post.creator._id === cookie.id;

    // ___________________ styling ____________________________
    const profileIconStyling = {
        height: "35px",
        maxWidth: "35px",
        borderRadius: "50%",
        objectFit: "cover"
    };

    return (
        <>
            {post &&
                !editMode ?
                <div className="card">
                    <div className="card-body">
                        {/* _____________  Profil pic section ______________________________________ */}
                        <div className='d-flex flex-row align-items-center mb-2'>
                            <img src={post.creator.userImage ? post.creator.userImage : emptyProfilImg}
                                style={profileIconStyling} className="me-2"
                                alt="Profile icon"
                            />
                            <h6 className="card-subtitle text-secondary text-opacity-75 mt-0">{post.creator.username}</h6>
                        </div>
                        {/* _____________  Post title & text section ______________________________________ */}
                        <h5 className="card-title fw-bold fs-3 mt-2 text-dark text-opacity-75">{post.title}</h5>
                        <p className="card-text text-dark text-opacity-75">{post.text}</p>
                    </div>
                    <div className="card-footer bg-secondary bg-opacity-25 d-flex flex-row" style={{ fontSize: "0.8rem" }}>
                        {/* _____________  Show how many comments this post has  ___________________________ */}
                        <div className='text-decoration-none text-muted d-flex flex-row align-items-center me-3' >
                            <img src={commentIcon} style={{ height: "15px", width: "15px" }} alt="Comment icon" />
                            <p className='my-0 ms-1'>{`${post.commentIds.length} Comment${post.commentIds.length !== 1 ? "s" : ""}`}</p>
                        </div>
                        {/* _____________  Like button  ____________________________________________________ */}
                        <button
                            className='text-decoration-none text-muted d-flex flex-row align-items-center me-3'
                            onClick={handleLikeClick}
                            style={{ border: "none", background: "transparent" }}
                        >
                            <img src={hasLiked ? likeIconFull : likeIconEmpty}
                                style={{ height: "15px", width: "15px" }}
                                alt="Like icon"
                            />
                            <p className='my-0 ms-1'>{`${post.likersIds.length} Like${post.likersIds.length !== 1 ? "s" : ""}`}</p>
                        </button>
                        {/* _____________  Edit button  ____________________________________________________ */}
                        {
                            showEditAndDelBtn &&
                            <>
                                <button
                                    className='text-decoration-none text-muted d-flex flex-row align-items-center me-3'
                                    style={{ border: "none", background: "transparent" }}
                                    onClick={toggleEditMode}
                                >
                                    <img src={editIcon} style={{ height: "15px", width: "15px" }} alt="Edit icon" />
                                    <p className='my-0 ms-1'>Edit</p>
                                </button>
                                <button
                                    className='text-decoration-none text-muted d-flex flex-row align-items-center me-3'
                                    style={{ border: "none", background: "transparent" }}
                                    onClick={handleDeleteClick}
                                >
                                    <img src={deleteIcon} style={{ height: "15px", width: "15px" }} alt="Edit icon" />
                                    <p className='my-0 ms-1'>Edit</p>
                                </button>
                            </>
                        }
                    </div>
                </div>
                :
                <form onSubmit={handleEditSubmit}>
                    {/* __________ Edit post Form ___________________________________________________ */}
                    <div className="card">
                        <div className="card-body">
                            {/* _____________  Profil pic section __________________ */}
                            <div className='d-flex flex-row align-items-center mb-2'>
                                <img src={post.creator.userImage ? post.creator.userImage : emptyProfilImg}
                                    style={profileIconStyling} className="me-2"
                                    alt="Profile icon"
                                />
                                <h6 className="card-subtitle text-secondary text-opacity-75 mt-0">
                                    {post.creator.username}
                                </h6>
                            </div>

                            {/* _____________  Post title & text section __________________ */}
                            {/* _____________  Post title  ________________________________ */}
                            <input type="text"
                                className="card-title fw-bold fs-3 mt-2 text-dark 
                                text-opacity-75 border border-secondary rounded"
                                value={updatedTitle} onChange={setUpdatedTitle}
                            />

                            {/* _____________  Post textsection  __________________________ */}
                            <div className="form-floating">
                                <textarea
                                    className="form-control border border-secondary"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea2"
                                    style={{ height: "100px" }}
                                    value={updatedText}
                                    onChange={setUpdatedText}
                                >
                                </textarea>
                                <label htmlFor="floatingTextarea2">Edit your text</label>
                            </div>
                        </div>
                        <div className="card-footer bg-secondary bg-opacity-25 d-flex flex-row "
                            style={{ fontSize: "0.8rem" }}
                        >
                            <button
                                className='me-3 btn btn-sm btn-danger fw-bold'
                                type="submit"
                                style={{ backgroundColor: "rgb(215, 86, 0)", borderColor: "rgb(215, 86, 0)" }}
                            >
                                <p className='my-0 ms-1'>Save</p>
                            </button>
                            <button
                                className='btn btn-sm btn-secondary fw-bold'
                                onClick={cancelEditMode}
                            >
                                <p className='my-0 ms-1'>Cancel</p>
                            </button>
                        </div>
                    </div>
                </form>
            }
        </>
    )
}

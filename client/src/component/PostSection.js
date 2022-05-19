
import { useContext } from "react";
// ____________ Icon & images import _____________________
import emptyProfilImg from "../images/icons/empty_profil_img.svg";
import commentIcon from "../images/icons/comment_icon.svg";
import likeIconEmpty from "../images/icons/like_icon.svg";
import likeIconFull from "../images/icons/like_icon_full.svg"
import editIcon from "../images/icons/edit_icon.svg";
// ____________ Costum hooks & context ___________________
import useToggleState from "../hooks/useToggleState";
import useInputState from "../hooks/useInputState";
import { CookieContext } from "../context/userContext";

import { updatePost, likePost, unlikePost } from "../API/apiRequests";

export default function PostSection({ post, setRunEffect }) {
    const { cookie } = useContext(CookieContext);

    const [editMode, toggleEditMode] = useToggleState(false);
    const [updatedTitle, setUpdatedTitle, resetUpdatedTitle] = useInputState(post.title);
    const [updatedText, setUpdatedText, resetUpdatedText] = useInputState(post.text);

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

    // _____ check if post creator id and current user (cookie id) is the same  ______
    const showEditBtn = post.creator._id === cookie.id;

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
                                alt="" style={profileIconStyling} className="me-2"
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
                            <img src={commentIcon} alt="" style={{ height: "15px", width: "15px" }} />
                            <p className='my-0 ms-1'>{`${post.commentIds.length} Comment${post.commentIds.length !== 1 ? "s" : ""}`}</p>
                        </div>
                        {/* _____________  Like button  ____________________________________________________ */}
                        <button
                            className='text-decoration-none text-muted d-flex flex-row align-items-center me-3'
                            onClick={handleLikeClick}
                            style={{ border: "none", background: "transparent" }}
                        >
                            <img src={hasLiked ? likeIconFull : likeIconEmpty}
                                alt="" style={{ height: "15px", width: "15px" }}
                            />
                            <p className='my-0 ms-1'>{`${post.likersIds.length} Like${post.likersIds.length !== 1 ? "s" : ""}`}</p>
                        </button>
                        {/* _____________  Edit button  ____________________________________________________ */}
                        {
                            showEditBtn &&
                            <button
                                className='text-decoration-none text-muted d-flex flex-row align-items-center me-3'
                                style={{ border: "none", background: "transparent" }}
                                onClick={toggleEditMode}
                            >
                                <img src={editIcon} alt="" style={{ height: "15px", width: "15px" }} />
                                <p className='my-0 ms-1'>Edit</p>
                            </button>
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
                                    alt="" style={profileIconStyling} className="me-2"
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
                                className='d-flex flex-row align-items-center
                                me-3 btn btn-sm btn-danger fw-bold'
                                type="submit"
                                style={{ backgroundColor: "rgb(215, 86, 0)", borderColor: "rgb(215, 86, 0)" }}
                            >
                                <p className='my-0 ms-1'>Save</p>
                            </button>
                        </div>
                    </div>
                </form>
            }
        </>
    )
}

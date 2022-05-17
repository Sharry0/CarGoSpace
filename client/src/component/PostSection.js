
import { useContext } from "react";
// ____________ Icon & images import _____________________
import emptyProfilImg from "../images/icons/empty_profil_img.svg";
import commentIcon from "../images/icons/comment_icon.svg";
import likeIcon from "../images/icons/like_icon.svg";
import editIcon from "../images/icons/edit_icon.svg";
// ____________ Costum hooks & context ___________________
import useToggleState from "../hooks/useToggleState";
import useInputState from "../hooks/useInputState";
import { CookieContext } from "../context/userContext";

import { updatePost } from "../API/apiRequests";

export default function PostSection({ post, setRunEffect }) {
    const { cookie } = useContext(CookieContext)

    
    const [editMode, toggleEditMode] = useToggleState(false);
    const [updatedTitle, setUpdatedTitle, resetUpdatedTitle] = useInputState(post.title);
    const [updatedText, setUpdatedText, resetUpdatedText] = useInputState(post.text);

    const handleEditSubmit = (evt) => {
        evt.preventDefault();
        updatePost({updatedTitle, updatedText, id: post._id});
        toggleEditMode();
        setRunEffect(true);
        console.log(post.title, "titleeee")
    }
    console.log(cookie)

    // ___________________ styling ____________________________
    const profileIconStyling = {
        height: "35px",
        maxWidth: "35px",
        borderRadius: "50%",
        objectFit: "cover"
    };
    const editBtnStyle = {
        border: "none",
        background: "transparent"
    }

    return (
        <>
            {post &&
                !editMode ?
                <div className="card">
                    <div className="card-body">
                        {/* _____________  Profil pic section __________________ */}
                        <div className='d-flex flex-row align-items-center mb-2'>
                            <img src={post.creator.userImage ? post.creator.userImage : emptyProfilImg}
                                alt="" style={profileIconStyling} className="me-2"
                            />
                            <h6 className="card-subtitle text-secondary text-opacity-75 mt-0">{post.creator.username}</h6>
                        </div>
                        {/* _____________  Post title & text section __________________ */}
                        <h5 className="card-title fw-bold fs-3 mt-2 text-dark text-opacity-75">{post.title}</h5>
                        <p className="card-text text-dark text-opacity-75">{post.text}</p>
                    </div>
                    <div className="card-footer bg-secondary bg-opacity-25 d-flex flex-row" style={{ fontSize: "0.8rem" }}>
                        <div href="/SOMEWHERE" className='text-decoration-none text-muted d-flex flex-row align-items-center me-3' >
                            <img src={commentIcon} alt="" style={{ height: "15px", width: "15px" }} />
                            <p className='my-0 ms-1'>{`${post.commentIds.length} Comments`}</p>
                        </div>
                        <button className='text-decoration-none text-muted d-flex flex-row align-items-center me-3' >
                            <img src={likeIcon} alt="" style={{ height: "15px", width: "15px" }} />
                            <p className='my-0 ms-1'>{`${post.likersIds.length} Likes`}</p>
                        </button>
                        <button
                            className='text-decoration-none text-muted d-flex flex-row align-items-center me-3'
                            style={editBtnStyle}
                            onClick={toggleEditMode}
                        >
                            <img src={editIcon} alt="" style={{ height: "15px", width: "15px" }} />
                            <p className='my-0 ms-1'>Edit</p>
                        </button>
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

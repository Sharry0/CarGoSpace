
// ____________ Icon & images import _____________________
import emptyProfilImg from "../images/icons/empty_profil_img.svg";
import commentIcon from "../images/icons/comment_icon.svg";
import likeIcon from "../images/icons/like_icon.svg";
import editIcon from "../images/icons/edit_icon.svg";

export default function PostSection({ post }) {

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
                        <a href="/SOMEWHERE" role="button" className='text-decoration-none text-muted d-flex flex-row align-items-center me-3' >
                            <img src={commentIcon} alt="" style={{ height: "15px", width: "15px" }} />
                            <p className='my-0 ms-1'>{`${post.commentIds.length} Comments`}</p>
                        </a>
                        <a href="/SOMEWHERE" role="button" className='text-decoration-none text-muted d-flex flex-row align-items-center me-3' >
                            <img src={likeIcon} alt="" style={{ height: "15px", width: "15px" }} />
                            <p className='my-0 ms-1'>{`${post.likersIds.length} Likes`}</p>
                        </a>
                        <a href="/SOMEWHERE" role="button" className='text-decoration-none text-muted d-flex flex-row align-items-center me-3' >
                            <img src={editIcon} alt="" style={{ height: "15px", width: "15px" }} />
                            <p className='my-0 ms-1'>Edit</p>
                            
                        </a>
                    </div>
                </div>
            }
        </>
    )
}

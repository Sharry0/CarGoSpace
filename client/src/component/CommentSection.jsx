import { useContext } from "react";

import emptyProfilImg from "../images/icons/empty_profil_img.svg";
import deleteIcon from "../images/icons/delete_icon.svg"
import { CookieContext } from "../context/userContext";

export default function CommentSection({ comments }) {

  const { cookie } = useContext(CookieContext);

  // console.log(comments[0].creator._id === cookie.id)
  // useEffect(()=>{
  //   console.log("this is commentsection")
  // },[comments])

  const checkCommentCreatorIsCurrentUser = (creatorId) => {
    return creatorId === cookie.id
  }

  const handleDeleteCommentClick = () => {
    console.log("delete comment click")
  }

  // ___________________ styling ____________________________
  const profileIconStyling = {
    height: "25px",
    maxWidth: "25px",
    borderRadius: "50%",
    objectFit: "cover"
  };
  // console.log(comments)
  return (
    <>
      {
        comments.length >= 1 ?
          <>
            {
              comments.map(comment => (
                <div className="card mb-3" key={comment._id}>
                  {/* _____________  Profil pic section __________________ */}
                  <div className="card-body">
                    <div>
                      <div className="d-flex flex-row" >
                        <div className='d-flex flex-row align-items-center mb-2'>
                          <img src={comment.creator.userImage ? comment.creator.userImage : emptyProfilImg}
                            alt="" style={profileIconStyling} className="me-2"
                          />
                          <h6 className="card-subtitle text-secondary text-opacity-75 mt-0">{comment.creator.username}</h6>
                        </div>
                        {
                          checkCommentCreatorIsCurrentUser(comment.creator._id) &&
                          <button
                            className='text-decoration-none text-muted d-flex flex-row align-items-center me-3'
                            style={{ border: "none", background: "transparent" }}
                            onClick={handleDeleteCommentClick}
                          >
                            <img src={deleteIcon} style={{ height: "15px", width: "15px" }} alt="Edit icon" />
                          </button>
                        }
                      </div>
                      <p className="card-text text-dark text-opacity-75">{comment.comment}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </>
          :
          <div>
            no comments
          </div>
      }
    </>
  )
}

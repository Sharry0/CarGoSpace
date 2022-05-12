
import { useEffect } from "react";
import emptyProfilImg from "../images/icons/empty_profil_img.svg";

export default function CommentSection({ comments }) {

  // useEffect(()=>{
  //   console.log("this is commentsection")
  // },[comments])

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
                      <div className='d-flex flex-row align-items-center mb-2'>
                        <img src={comment.creator.userImage ? comment.creator.userImage : emptyProfilImg}
                          alt="" style={profileIconStyling} className="me-2"
                        />
                        <h6 className="card-subtitle text-secondary text-opacity-75 mt-0">{comment.creator.username}</h6>
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

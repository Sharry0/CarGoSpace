// ____________ Framwork & library import ________________
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


// ____________ Icon & images import _____________________
import emptyProfilImg from "../images/icons/empty_profil_img.svg";
import commentIcon from "../images/icons/comment_icon.svg";
import likeIcon from "../images/icons/like_icon.svg";
import editIcon from "../images/icons/edit_icon.svg";

// ____________ API import _______________________________
import { getPost } from '../API/apiRequests'

export default function Post() {

  const params = useParams();

  const [post, setPost] = useState(null)

  useEffect(() => {
    getPost(params.id)
      .then(response => setPost(response.data))
      // .then(response => console.log(response))
      .catch(err => console.log(err, "this a error"))
  }, [])

  // ___________________ styling ____________________________
  const profileIconStyling = {
    height: "35px",
    maxWidth: "35px",
    borderRadius: "50%",
    objectFit: "cover"
  };
  // console.log(post)
  return (
    <div className='container pt-5'>
      {
        post
          ? <div className='d-flex '>
            {/* _____________ See main post & create comment section __________________ */}
            <div className='col-7 me-4'>
              {/* _____________  Post section __________________ */}
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
                    <img src={commentIcon} alt="" style={{height: "15px", width: "15px"}} />
                    <p className='my-0 ms-1'>{`${post.commentIds.length} Comments`}</p>
                  </a>
                  <a href="/SOMEWHERE" role="button" className='text-decoration-none text-muted d-flex flex-row align-items-center me-3' >
                    <img src={likeIcon} alt="" style={{height: "15px", width: "15px"}} />
                    <p className='my-0 ms-1'>{`${post.likersIds.length} Likes`}</p>
                  </a>
                  <a href="/SOMEWHERE" role="button" className='text-decoration-none text-muted d-flex flex-row align-items-center me-3' >
                    <img src={editIcon} alt="" style={{height: "15px", width: "15px"}} />
                    <p className='my-0 ms-1'>Edit</p>
                  </a>
                </div>
              </div>
              {/* _____________ Create comment section __________________ */}
              <div className='card mt-2'>

                <h6>create comment</h6>
              </div>
            </div>

            {/* _____________ see all comments section __________________ */}
            <div className='col-4 card'>
              <h4>no comments</h4>
            </div>
          </div>
          : <h2>Sorry we couldn't find this post</h2>
      }


    </div>
  )
}

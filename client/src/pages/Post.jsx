import React, { useEffect, useState } from 'react'
import emptyProfilImg from "../images/icons/empty_profil_img.svg"

import { getPost } from '../API/apiRequests'

export default function Post() {

  const [post, setPost] = useState(null)

  useEffect(() => {
    getPost("626e5a08961947ded887b084")
      .then(response => setPost(response.data))
      .catch(err => console.log(err, "this a error"))
  }, [])

  // ___________________ styling ____________________________
  const profileIconStyling = {
    height: "35px",
    maxWidth: "35px",
    borderRadius: "50%",
    objectFit: "cover"
  };
  console.log(post)
  return (
    <div className='container pt-5'>
      {
        post
          ? <div className='d-flex '>
            {/* _____________ See main post & create comment section __________________ */}
            <div className='col-7 me-4'>
            {/* _____________  Post section __________________ */}
              <div className="card">
                <div className="card-header">
                  <div className='d-flex flex-row align-items-center '>
                    <img src={post.creator.userImage ? post.creator.userImage : emptyProfilImg}
                      alt="" style={profileIconStyling} className="me-2"
                    />
                    <h6 className="card-subtitle text-secondary text-opacity-75 mt-0">{post.creator.username}</h6>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.text}</p>
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

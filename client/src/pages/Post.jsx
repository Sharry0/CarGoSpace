// ____________ Framwork & library import ________________
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


import PostSection from '../component/PostSection';
import CommentForm from './forms/CommentForm';
import CommentSection from '../component/CommentSection';

// ____________ API import _______________________________
import { getPost } from '../API/apiRequests'

export default function Post() {

  const params = useParams();

  const [post, setPost] = useState(null);
  const [updateComSec, setUpdateComSec] = useState(false)

  useEffect(() => {
    getPost(params.id)
      .then(response => {
        setPost(response.data);
        setUpdateComSec(false);
        console.log(response.data);
      })
      .catch(err => {
        console.log(err, "this a error");
        setUpdateComSec(false);
      })
  }, [updateComSec])

  // console.log(post)
  return (
    <div className='container pt-5'>
      {
        post
          ? <div className='d-flex '>
            {/* _____________ See main post & create comment section __________________ */}
            <div className='col-7 me-4'>
              {/* _____________  Post section __________________ */}
              <PostSection post={post} />
              
              {/* _____________ Create comment section __________________ */}
              <CommentForm setUpdateComSec={setUpdateComSec}/>
            </div>

            {/* _____________ see all comments section __________________ */}
            <div className='col-4'>
              <CommentSection comments={post.commentIds}/>
            </div>
          </div>
          : <h2>Sorry we couldn't find this post</h2>
      }


    </div>
  )
}

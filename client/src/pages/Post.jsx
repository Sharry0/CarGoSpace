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
  const [runEffect, setRunEffect] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      await getPost(params.id)
      .then(response => {
        setPost(response.data);
      })
      .catch(err => {
        console.log(err, "this a error");
      })
    };
    fetchPosts();
    setRunEffect(false);
  }, [runEffect])

  // console.log(post)
  return (
    <div className='container pt-5'>
      {
        post
          ? <div className='d-flex flex-column flex-lg-row'>
            {/* _____________ See main post & create comment section __________________ */}
            <div className='col-lg-7 me-lg-4 mb-5'>
              
              {/* _____________  Post section __________________ */}
              <PostSection post={post} setRunEffect={setRunEffect}/>

              {/* _____________ Create comment section __________________ */}
              <CommentForm setRunEffect={setRunEffect} />
            </div>

            {/* _____________ see all comments section __________________ */}
            <div className='col-lg-4'>
              <CommentSection comments={post.commentIds} setRunEffect={setRunEffect} />
            </div>
          </div>
          : <h2>Sorry we couldn't find this post</h2>
      }


    </div>
  )
}

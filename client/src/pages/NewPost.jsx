
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import useInputState from '../hooks/useInputState';
import emptyProfilImg from "../images/icons/empty_profil_img.svg";

export default function NewPost() {
const [title, handleTitle] = useInputState("");
const [textarea, handleTextarea] = useInputState("");


  return (
    <div className='container pt-5 col-5'>
      <h1 className="fw-bold" style={{color: "rgb(33, 46, 68"}} >New post</h1>
      <div className="card mt-4 shadow">
        <div className="card-header d-flex align-items-center">
          <img src={emptyProfilImg} alt="Profile pic" className='me-2' style={{ height: "35px" }} />
          <p className='mb-0  text-dark text-opacity-75'>Profile</p>
        </div>
        <div className="card-body">
          <div className='mb-3'>
            <input
              type="text"
              className="form-control form-control-lg fw-bold text-dark text-opacity-75"
              placeholder="Title"
              aria-label="Title"
            />
          </div>
          <div className="mb-3">
            <textarea className="form-control text-dark text-opacity-75" placeholder='Leave your text here ...' rows="4"></textarea>
          </div>
          <input type="submit" className="btn btn-primary me-4" value="Submit" />
          <input type="submit" className="btn btn-secondary" value="Discard" />
        </div>
      </div>
    </div>
  )
}

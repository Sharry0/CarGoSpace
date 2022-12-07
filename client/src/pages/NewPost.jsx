
import React, { useContext } from 'react'
import { CookieContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import useInputState from '../hooks/useInputState';
import emptyProfilImg from "../images/icons/empty_profil_img.svg";
import axios from "axios";
import { toast } from 'react-toastify';

export default function NewPost() {
  const { cookie } = useContext(CookieContext)
  const navigate = useNavigate()
  const [title, handleTitle, resetTitle] = useInputState("");
  const [textarea, handleTextarea, resetTextarea] = useInputState("");

  //_______ on Submit create the new post & on Discard clear all inputs and redirect to feed page ______
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newPost = { title, textarea, email: cookie.email }
    axios.post("https://cgs-server.up.railway.app/post/create", newPost)
      .then(response => {
        resetTitle();
        resetTextarea();
        navigate("/feed")
      })
      .catch(err => {
        toast.error(err.response.data, {
          position: "top-center",
          autoClose: 7500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
  };

  const handleDiscard = (evt) => {
    evt.preventDefault()
    resetTitle();
    resetTextarea();
    navigate("/feed")
  };

  // _______ check if title & textarea have A-Z a-z or 0-9 as values, if so return true ________________
  const titleHasValues = /[A-Za-z0-9]/.test(title);
  const textareaHasValues = /[A-Za-z0-9]/.test(textarea);

  //________ button styling ____________________________________________________________________________
  const styling = {
    backgroundColor: "rgb(215, 86, 0)",
    borderColor: "rgb(215, 86, 0)"
  }

  return (
    <div className='container pt-5 col-xxl-5 col-lg-6'>
      <h1 className="fw-bold" style={{ color: "rgb(33, 46, 68" }}>New post</h1>

      {/* ________ Create a new post Form _______________________________________________________ */}
      <form onSubmit={handleSubmit} >
        <div className="card mt-4 shadow">
          <div className="card-header d-flex align-items-center">
            <img src={cookie.userImage ? cookie.userImage : emptyProfilImg} alt="Profile pic" className='me-2' style={{ height: "35px", width: "35px", borderRadius: "50%", objectFit: "cover" }} />
            <p className='mb-0  text-dark text-opacity-75'>{cookie.username}</p>
          </div>
          <div className="card-body">
            {/* ________ newPost Title input  __________________________________________________ */}
            <div className='mb-3'>
              <input
                type="text"
                className="form-control form-control-lg fw-bold text-dark text-opacity-75"
                placeholder="Title"
                aria-label="Title"
                value={title}
                onChange={handleTitle}
              />
            </div>
            {/* ________ newPost Textarea input ________________________________________________ */}
            <div className="mb-3">
              <textarea
                className="form-control text-dark text-opacity-75"
                placeholder='Leave your text here ...'
                value={textarea}
                onChange={handleTextarea}
                rows="4"
              ></textarea>
            </div>
            {/* ________ Submit & Discard Buttons ___________________________________________ */}
            <input type="submit"
              className="btn btn-danger me-4"
              disabled={!titleHasValues || !textareaHasValues}
              style={styling}
              value="Submit"
            />
            <input type="button"
              className="btn btn-secondary"
              value="Cancel"
              onClick={handleDiscard}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

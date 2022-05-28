
import axios from "axios";

// ________ get cookies from browser _________________________________________________________
export const getCookie = () => {
    return axios.get("http://localhost:8080/getCookie", { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            return err.response
        })
};

// ________ logout the user _________________________________________________________________
export const logout = () => {
    return axios.get("http://localhost:8080/logout", { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            return err.response
        })
};

// ________ get all Posts for /feed ________________________________________________________
export const getPosts = () => {
    return axios.get("http://localhost:8080/post", { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            return err.response
        })
};

// ________ get single Post with id for /post/:id __________________________________________
export const getPost = (id) => {
    return axios.get(`http://localhost:8080/post/${id}`, { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            throw "Post couldn't be found"
        })
};

export const updatePost = (updatedPost) => {
    return axios.patch(`http://localhost:8080/post/update`, updatedPost, { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            throw "Couldn't update post"
        })
};

export const likePost = (ids) => {
    return axios.patch(`http://localhost:8080/post/like`, ids, { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            throw "Couldn't like this post"
        })
};

export const unlikePost = (ids) => {
    return axios.patch(`http://localhost:8080/post/unlike`, ids, { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            throw "Couldn't like this post"
        })
};

export const deletePost = (postId) =>{
    return axios.delete(`http://localhost:8080/post/delete/${postId}`, postId, { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            throw "Couldn't delete this post"
        })
};

export const deleteComment = (commentId) =>{
    return axios.delete(`http://localhost:8080/comment/delete/${commentId}`, commentId, { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            throw "Couldn't delete this comment"
        })
};


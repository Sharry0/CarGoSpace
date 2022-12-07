
import axios from "axios";

// const server = "http://localhost:8080/";
const server = "https://cgs-server.up.railway.app/";

// ________ get cookies from browser _________________________________________________________
export const getCookie = () => {
    return axios.get(`${server}getCookie`, { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            return err.response
        })
};

// ________ logout the user _________________________________________________________________
export const logout = () => {
    return axios.get(`${server}logout`, { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            return err.response
        })
};

// ________ get all Posts for /feed ________________________________________________________
export const getPosts = () => {
    return axios.get(`${server}post`, { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            return err.response
        })
};

// ________ get single Post with id for /post/:id __________________________________________
export const getPost = (id) => {
    return axios.get(`${server}post/${id}`, { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            throw "Post couldn't be found"
        })
};

export const updatePost = (updatedPost) => {
    return axios.patch(`${server}post/update`, updatedPost, { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            throw "Couldn't update post"
        })
};

export const likePost = (ids) => {
    return axios.patch(`${server}post/like`, ids, { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            throw "Couldn't like this post"
        })
};

export const unlikePost = (ids) => {
    return axios.patch(`${server}post/unlike`, ids, { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            throw "Couldn't like this post"
        })
};

export const deletePost = (postId) =>{
    return axios.delete(`${server}post/delete/${postId}`, postId, { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            throw "Couldn't delete this post"
        })
};

export const deleteComment = (commentId) =>{
    return axios.delete(`${server}comment/delete/${commentId}`, commentId, { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            throw "Couldn't delete this comment"
        })
};


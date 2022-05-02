
import axios from "axios";

export const getCookie = () => {

// ________ get cookies from browser _________________________________________________________
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
}

// ________ get single Post with id for /post/:id __________________________________________
export const getPost = (id) => {
    return axios.get(`http://localhost:8080/post/${id}`, { withCredentials: true })
    .then((response) => {
        return response
    })
    .catch((err) => {
        return err.response
    })
}

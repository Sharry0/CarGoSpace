
import axios from "axios";

export const getCookie = () => {

    return axios.get("http://localhost:8080/getCookie", { withCredentials: true })
        .then((response) => {
            return response
        })
        .catch((err) => {
            return err.response
        })

};




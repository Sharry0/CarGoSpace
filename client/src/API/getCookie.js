
const axios = require("axios")

export const getCookie = async () => {

    axios.get("http://localhost:8080/getCookie", { withCredentials: true })
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })

};




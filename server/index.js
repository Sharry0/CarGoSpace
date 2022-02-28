
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "./.env" })
};

const epxress = require("express");
const app = epxress();

const mongoose = require("mongoose")


mongoose.connect(process.env.DB_URI)
    .then(console.log("DB CONNECTED"))
    .catch(err => console.log("CONNECTION ERROR DB", err))





app.get("/", (req, res) => {
    res.send("welcome to port 8080")
})

app.listen(8080, (req, res) => {
    console.log("listening on port 8080")
})



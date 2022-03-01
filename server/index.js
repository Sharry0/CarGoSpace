
//__________________________imports____________________________________
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "./.env" })
};

const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/userSchema");
const mongoose = require("mongoose");

//__________________________DB connection____________________________________
mongoose.connect(process.env.DB_URI)
    .then(console.log("DB CONNECTED"))
    .catch(err => console.log("CONNECTION ERROR DB", err));

//__________________________Middleware____________________________________
app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
    res.send("welcome to port 8080")
});

//__________________________Create new User____________________________________
//__________________________Take pw from frontend, hash it (bcrypt), and put it back into object____________________________________
app.post("/newUser", async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    // console.log(req.body, "this body____________")
    // console.log(req.body.username, "single beas")
    // console.log("this body____________")
});

const getUser = async () => {
    const foundUser = await User.find({ username: "bobby" })
    console.log(foundUser[0].createdAt)
}

getUser();
// createUser();




app.listen(8080, (req, res) => {
    console.log("listening on port 8080")
});


//__________________________imports____________________________________
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "./.env" })
};

const express = require("express");
const app = express();
const { urlencoded } = express;
const cors = require("cors");
const morgan = require("morgan")
const bcrypt = require("bcrypt")
const User = require("./models/userSchema");
const mongoose = require("mongoose");

//__________________________DB connection____________________________________
mongoose.connect(process.env.DB_URI)
    .then(console.log("DB CONNECTED"))
    .catch(err => console.log("CONNECTION ERROR DB", err));



const corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:8080"],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
//__________________________Middleware____________________________________
// app.use(urlencoded({extended: false}));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsOptions));


app.get("/", (req, res) => {
    res.send("welcome to port 8080")
});

//__________________________Create new User____________________________________
//__________________________Take pw from frontend, hash it (bcrypt), and put it back into object____________________________________
app.post("/register", async (req, res) => {
    const {username, email, pw, birthday, gender} = req.body;
    // console.log(req.body, "This req.body");
    const hashedPassword = await bcrypt.hash(pw, 13);
    const newUser = new User({username, email, hashedPassword, birthday, gender});
    await newUser.save();
});

//__________________________Create new User____________________________________
app.post("/login", async (req, res) => {
    const { email, pw, rememberMe } = req.body;
    const foundUser = await User.findOne({ email });
    const checkPw = await bcrypt.compare(pw, foundUser.hashedPassword)
    if (foundUser && checkPw) {
        console.log("found user success")
        res.send("ypu made it")
    } else {
        res.status(418).send("sorry we couldn't find your teapot")
    }
    // console.log(foundUser, "found user")
    // console.log(req.body, "_______");
})




app.listen(8080, (req, res) => {
    console.log("listening on port 8080")
});

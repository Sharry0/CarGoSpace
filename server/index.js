
//__________________________imports____________________________________
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "./.env" })
};

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
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
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true
};
//__________________________Middleware____________________________________
// app.use(urlencoded({extended: false}));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(cookieParser())


app.get("/", (req, res) => {
    res.send("welcome to port 8080")
});

//__________________________Create new User____________________________________
//__________________________Take pw from frontend, hash it (bcrypt), and put it back into object____________________________________
app.post("/register", async (req, res) => {
    const { username, email, pw, birthday, gender } = req.body;
    //___ if form is filled out, then check if pw conditions are met. ____
    if (username && email && pw && birthday && gender) {
        //___ if pw meets conditions, save new user ___
        if (/[A-Z]/.test(pw) && /[a-z]/.test(pw) && /[0-9]/.test(pw) && pw.length >= 8 && /[\!\?\$\+\_\-]/.test(pw)) {
            const hashedPassword = await bcrypt.hash(pw, 13);
            const newUser = new User({ username, email, hashedPassword, birthday, gender });
            await newUser.save();
            res.send("Success 🏆")
        } else {
            res.status(400).send("🚧 Password invalid 🚧")
        }
    } else {
        res.status(400).send("Please fill out the form")
    }
    // console.log(/[A-Z]/.test(pw))
    // console.log(req.body, "This req.body");
});

//__________________________Create new User____________________________________
app.post("/login", async (req, res) => {
    const { email, pw, rememberMe } = req.body;
    //___ if form is filled out, go check if user exist ___
    if (email && pw) {
        const foundUser = await User.findOne({ email });
        const checkPw = foundUser && await bcrypt.compare(pw, foundUser.hashedPassword);
        //___  if user and input pw matches then create token/cookie, else clear token/cookies  ___
        if (foundUser && checkPw) {
            let tokenExpire = rememberMe ? "7d" : "1h";
            const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: tokenExpire});
            res.cookie("token", token);
            res.send("ypu made it");
        } else {
            res.clearCookie("token");
            res.status(418).send("wrong car, please check if you have the right key 🔑")
        }
    } else {
        res.status(400).send("Please fill out the form 🤖")
    }
})




app.listen(8080, (req, res) => {
    console.log("listening on port 8080");
});


//__________________________ imports _______________________________________________________________
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "../.env" })
};
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const User = require("../models/userSchema");

//__________________________ Register logic _______________________________________________________________
exports.register = async (req, res) => {
    const { username, email, pw, birthday, gender } = req.body;
    const duplicateEmail = await User.findOne({ email });
    if (duplicateEmail) {
        res.clearCookie("token");
        return res.status(400).send("E-mail already taken")
    };
    //___ if form is filled out, then check if pw conditions are met. ____
    if (username && email && pw && birthday && gender) {
        //___ if pw meets conditions, save new user. Else send 400 Error ___
        if (/[A-Z]/.test(pw) && /[a-z]/.test(pw) && /[0-9]/.test(pw) && pw.length >= 8 && /[\!\?\$\+\_\-]/.test(pw)) {
            //___ create token/cookie 🍪 ___
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
            res.cookie("jwt", token, { httpOnly: true, sameSite: "None" });
            //___ create & save new user ___
            const hashedPassword = await bcrypt.hash(pw, 13);
            const newUser = new User({ username, email, hashedPassword, birthday, gender });
            await newUser.save();
            res.send("Success 🏆")
        } else {
            //___ send password invalid allert & clear cookies ___
            res.clearCookie("jwt");
            res.status(400).send("🚧 Password invalid 🚧")
        }
    } else {
        res.clearCookie("jwt");
        res.status(400).send("Please fill out the form")
    }
};

//__________________________ Login logic _______________________________________________________________
exports.login = async (req, res) => {
    const { email, pw, rememberMe } = req.body;
    //___ if form is filled out, go check if user exist ___
    if (email && pw) {
        const foundUser = await User.findOne({ email });
        const checkPw = foundUser && await bcrypt.compare(pw, foundUser.hashedPassword);
        //___  if user and input pw matches then create token/cookie, else clear token/cookies  ___
        if (foundUser && checkPw) {
            let tokenExpire = rememberMe ? "7d" : "1h";
            const token = jwt
                .sign({ username: foundUser.username, email, id: foundUser._id, userImage: foundUser.userImage ? foundUser.userImage : false },
                    process.env.JWT_SECRET,
                    { expiresIn: tokenExpire }
                );
            res.cookie("jwt", token, { httpOnly: true, sameSite: "None" });
            res.send("ypu made it");
        } else {
            res.clearCookie("jwt");
            res.status(418).send("wrong car, please check if you have the right key 🔑")
        }
    } else {
        res.status(400).send("Please fill out the form 🤖")
    }
};

//__________________________ Get Cookie logic _______________________________________________________________
exports.getCookie = (req, res) => {
    const cookie = req.cookies.jwt;
    if (!cookie) return res.status(400).send("No cookies found");
    const decode = jwt.verify(cookie, process.env.JWT_SECRET,
        (err, decoded) => {
            if (err) return err;
            if (decoded) return decoded;
        });
    res.send(decode);
};

//__________________________ Logout logic _______________________________________________________________
exports.logout = (req, res) => {
    res.clearCookie("jwt");
    res.send("Logout successful")
};
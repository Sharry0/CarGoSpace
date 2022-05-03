
//__________________________imports____________________________________
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "./.env" })
};
const express = require("express");
const app = express();
const userRoutes = require("./routes/user")
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const User = require("./models/userSchema");
const Post = require("./models/postSchema")
const mongoose = require("mongoose");

//__________________________DB connection____________________________________
mongoose.connect(process.env.DB_URI)
    .then(console.log("DB CONNECTED"))
    .catch(err => console.log("CONNECTION ERROR DB", err));

const corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:8080"],
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
};
//__________________________ Middleware ____________________________________
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(cookieParser())


app.get("/", (req, res) => {
    res.send("welcome to port 8080")
});

//__________________________ User routes ____________________________________
app.use("/", userRoutes)

app.get("/post", async (req, res) => {
    // ______ error handling where? _________
    const populatedPosts = await Post
        .find()
        .populate("creator", "username userImage email")
        .sort({ createdAt: -1 })

    res.send(populatedPosts)
});

app.post("/post/create", async (req, res) => {

    const { title, textarea, email } = req.body
    const foundUser = await User.findOne({ email });
    try {
        const newPost = new Post({
            creator: foundUser,
            title,
            text: textarea,
        });
        foundUser.postIds.push(newPost)
        await newPost.save();
        await foundUser.save();
        res.send(foundUser);
    } catch (error) {
        console.log(error)
        res.status(400).send("Something went wrong, please try again later...")
    }
    // console.log(newPost);


});

app.get("/post/:id", async (req,res)=>{
    const {id} = req.params;
    try {
        const foundPost = await Post.findById(id)
        .populate("creator", "username userImage")
        res.send(foundPost)
    } catch (error) {
        res.status(404).send(error)
    }
    // if (foundPost) res.send(foundPost)
})


app.listen(8080, (req, res) => {
    console.log("listening on port 8080");
});

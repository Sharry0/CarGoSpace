
//__________________________imports__________________________________________
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: "./.env" })
};
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const User = require("./models/userSchema");
const Post = require("./models/postSchema");
const Comment = require("./models/commentSchema")
const mongoose = require("mongoose");

// ________________________routes____________________________________________
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

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

//__________________________ Routes ____________________________________
app.use("/", userRoutes);
app.use("/post", postRoutes);

app.post("/comment/create", async (req, res) => {
    const { email, comment, postId } = req.body;
    const foundUser = await User.findOne({ email });
    const foundPost = await Post.findById(postId);
    try {
        const newComment = new Comment({
            postId: foundPost,
            creator: foundUser,
            comment
        });
    
        foundPost.commentIds.push(newComment);
        foundUser.commentIds.push(newComment);
        
        await foundPost.save();
        await newComment.save();
        res.status(200).send("new comment created");
        
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    };
});




app.listen(8080, (req, res) => {
    console.log("listening on port 8080");
});

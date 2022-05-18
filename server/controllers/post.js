
const Post = require("../models/postSchema");
const { populate } = require("../models/userSchema");
const User = require("../models/userSchema");


exports.allPosts = async (req, res) => {
    // ______ error handling where? _________
    const populatedPosts = await Post
        .find()
        .populate("creator", "username userImage email")
        .sort({ createdAt: -1 })

    res.send(populatedPosts)
};

exports.createPost = async (req, res) => {

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
        console.log(error);
        res.status(400).send("Something went wrong, please try again later...");
    }
};

exports.showPost = async (req, res) => {
    const { id } = req.params;
    try {
        const foundPost = await Post.findById(id)
            .populate("creator", "username userImage")
            // .populate("commentIds", "comment")
            .populate({
                path: "commentIds",
                select: "comment createdAt",
                populate: {
                    path: "creator",
                    select: "username userImage",
                },
                options: { sort: { createdAt: -1 } }
            })

        res.send(foundPost)
    } catch (error) {
        res.status(404).send(error)
    }
};

exports.updatePost = async (req, res) => {
    const { updatedTitle, updatedText, id } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(id, { title: updatedTitle, text: updatedText });
    updatedPost.save();
    res.send("update successful")
};

exports.likePost = async (req, res) => {
    const {userId, postId} = req.body;
    try {
        const foundUser = await User.findById(userId);
        const foundPost = await Post.findById(postId);
        foundPost.likersIds.push(foundUser)
        await foundPost.save()
        res.send("Post was liked")
    } catch (error) {
        console.log("ERRRORR")
        console.log(error)
    }
};

exports.unlikePost = async (req, res) => {
    const {userId, postId} = req.body;
    try {
        const foundUser = await User.findById(userId);
        const foundPost = await Post.findById(postId);
        foundPost.likersIds.filter(likeId => {
            console.log(likeId === foundUser._id)
            console.log(likeId)
            console.log(userId)
            likeId !== userId
        })
        // console.log(foundPost)
        // console.log(userId)
        await foundPost.save()
        res.send("Post was unliked")
    } catch (error) {
        console.log("ERRRORR")
        console.log(error)
    }
};
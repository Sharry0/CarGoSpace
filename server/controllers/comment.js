
const Post = require("../models/postSchema");
const User = require("../models/userSchema");
const Comment = require("../models/commentSchema")


exports.createComment = async (req, res) => {
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

        await foundPost.save();
        await newComment.save();
        res.status(200).send("new comment created");

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    };
};

exports.deleteComment = async (req, res) => {
    const { commentId } = req.params;
    await Post.findOneAndUpdate({ commentIds: commentId }, {
        $pull: { commentIds: commentId }
    });
    await Comment.findByIdAndDelete(commentId);

    res.send("comment deleted")
}

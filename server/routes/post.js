
const express = require("express");
const router = express.Router();

const {
    allPosts, 
    createPost, 
    showPost, 
    updatePost, 
    likePost, 
    unlikePost, 
    deletePost
} = require("../controllers/post");

router.get("/", allPosts);
router.post("/create", createPost);
router.patch("/update", updatePost);
router.patch("/like", likePost)
router.patch("/unlike", unlikePost)
router.get("/:id", showPost);
router.delete("/delete/:postId", deletePost);

module.exports = router


const express = require("express");
const router = express.Router();

const {allPosts, createPost, showPost, updatePost, likePost} = require("../controllers/post");

router.get("/", allPosts);
router.post("/create", createPost);
router.patch("/update", updatePost);
router.patch("/like", likePost)
router.get("/:id", showPost);

module.exports = router

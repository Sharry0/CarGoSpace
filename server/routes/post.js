
const express = require("express");
const router = express.Router();

const {allPosts, createPost, showPost} = require("../controllers/post")

router.get("/", allPosts);
router.post("/create", createPost);
router.get("/:id", showPost)

module.exports = router

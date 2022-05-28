
const express = require("express");
const router = express.Router();

const { createComment, deleteComment } = require("../controllers/comment.js");

router.post("/create", createComment)
router.delete("/delete/:commentId", deleteComment)

module.exports = router


const mongoose = require("mongoose");
const userSchema = require ("./userSchema")

const postSchema = new mongoose.Schema({
    creator: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    likersIds: [],
    commenterIds: []





},
    { timestamps: true }
);



module.exports = mongoose.model("Post", postSchema);

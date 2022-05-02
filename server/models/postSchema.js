
const mongoose = require("mongoose");
const { Schema } = mongoose

const postSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
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
    
    likersIds: [],
    commentIds: []





},
    { timestamps: true }
);



module.exports = mongoose.model("Post", postSchema);

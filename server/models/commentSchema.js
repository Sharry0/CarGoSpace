const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
    postId: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    likersIds: [{type: Schema.Types.ObjectId, ref: "User", required: true}],

},
{ timestamps: true }
);



module.exports = mongoose.model("Comment", commentSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

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
    
    likersIds: [{type: Schema.Types.ObjectId, ref: "User", required: true}],
    commentIds: [{type: Schema.Types.ObjectId, ref: "Comment", required: true}]

},
    { timestamps: true }
);



module.exports = mongoose.model("Post", postSchema);

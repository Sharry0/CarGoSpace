
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    userImage: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    birthday: {
        month: {
            type: String,
            required: true
        },
        day: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        }
    },
    gender: {
        type: String,
        required: true,
        enum: ["Female", "Male", "Other"]
    },
    postIds: [{ type: Schema.Types.ObjectId, ref: "Post", required: true }]
},
    { timestamps: true }
);


module.exports = mongoose.model("User", userSchema);



const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
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
    // maybe dont use crypto (leave out salt) and use bycrpt library
    // salt: {
    //     type: String,
    //     required: true
    // },
    postIds: [],
    commentIds: []
},
    { timestamps: true }
);


module.exports = mongoose.model("User", userSchema)


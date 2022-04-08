
const express = require("express");
const router = express.Router();

const {register,login, logout, getCookie} = require("../controllers/user")

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/getCookie", getCookie);

module.exports = router


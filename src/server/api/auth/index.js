const express = require("express");
const { createUser, login, findUserByToken } = require("./handlers");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);
router.get("/me", findUserByToken);

module.exports = router;

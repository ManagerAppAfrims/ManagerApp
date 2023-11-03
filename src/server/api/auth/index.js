const express = require("express");
const { createUser, login } = require("./handlers");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);

module.exoprts = router;

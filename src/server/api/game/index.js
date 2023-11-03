const express = require("express");
const { createGame } = require("./handlers");

const router = express.Router();

router.post("/", createGame);

module.exports = router;

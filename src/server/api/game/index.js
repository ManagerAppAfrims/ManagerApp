const express = require("express");
const { createGame, updateGame } = require("./handlers");

const router = express.Router();

router.post("/", createGame);
router.post("/:gameId", updateGame);

module.exports = router;

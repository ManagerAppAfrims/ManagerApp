const express = require("express");
const { createTeam } = require("./handlers");

const router = express.Router();

router.post("/", createTeam);

module.exports = router;

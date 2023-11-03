const express = require("express");
const { assignPlayerToTeam } = require("./handlers");

const router = express.Router();

router.post("/", assignPlayerToTeam);

module.exports = router;

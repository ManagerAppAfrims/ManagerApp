const express = require("express");
const { createTeam, getAllTeams } = require("./handlers");

const router = express.Router();

router.post("/", createTeam);
router.get("/all", getAllTeams);

module.exports = router;

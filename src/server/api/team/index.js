const express = require("express");
const { createTeam, getAllTeams, getSingleTeam } = require("./handlers");

const router = express.Router();

router.post("/", createTeam);
router.get("/all", getAllTeams);
router.get("/:teamId", getSingleTeam);

module.exports = router;

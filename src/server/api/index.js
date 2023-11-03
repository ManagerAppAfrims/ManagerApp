const express = require("express");
const gameRouter = require("./game/index");
const playerRouter = require("./player/index");
const teamRouter = require("./team/index");
const userTeamRouter = require("./userTeam/index");

const router = express.Router();

router.use("/game", gameRouter);
router.use("/player", playerRouter);
router.use("/team", teamRouter);
router.use("/userTeam", userTeamRouter);

module.exports = router;

const express = require("express");
const { getPlayerInfo, getPlayerTeamInfo } = require("./handlers");

const router = express.Router();

router.get("/:playerId", getPlayerInfo);
router.get("/teams/:playerId", getPlayerTeamInfo);

module.exports = router;

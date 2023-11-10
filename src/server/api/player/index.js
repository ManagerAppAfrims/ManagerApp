const router = require("express").Router();
const {
  getPlayerInfo,
  getPlayerTeamInfo,
  getAllPlayers,
} = require("./handlers");

router.get("/all", getAllPlayers);
router.get("/:playerId", getPlayerInfo);
router.get("/teams/:playerId", getPlayerTeamInfo);

module.exports = router;

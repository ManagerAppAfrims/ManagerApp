const prisma = require("../../client");

async function getPlayerInfo(req, res, next) {
  const { playerId } = req.params;
  try {
    const player = await prisma.user.findUnique({
      where: {
        id: playerId,
      },
    });
    console.log("player from server", player);
    res.status(200).send(player);
  } catch (error) {
    console.error(error);
    next();
  }
}

async function getPlayerTeamInfo(req, res, next) {
  const { playerId } = req.params;
  try {
    const teams = await prisma.userTeam.findMany({
      where: {
        userId: playerId,
      },
      include: {
        Team: {
          include: {
            Games: {
              orderBy: {
                time: "asc",
              },
              orderBy: {
                date: "asc",
              },
            },
          },
        },
      },
    });
    res.status(200).send(teams);
  } catch (error) {
    console.error(error);
    next();
  }
}

async function getAllPlayers(req, res, next) {
  try {
    const players = await prisma.user.findMany();
    res.status(200).send(players);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = { getPlayerInfo, getPlayerTeamInfo, getAllPlayers };

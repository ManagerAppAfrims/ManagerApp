const prisma = require("../../client");

async function getPlayerInfo(req, res, next) {
  const { playerId } = req.params;
  try {
    const player = await prisma.user.findUnique({
      where: {
        id: playerId,
      },
    });

    res.status(200).send({ player });
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
            Games: true,
          },
        },
      },
    });
    res.status(200).send({ teams });
  } catch (error) {
    console.error(error);
    next();
  }
}

module.exports = { getPlayerInfo, getPlayerTeamInfo };

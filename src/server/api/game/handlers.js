const prisma = require("../../client");

async function createGame(req, res, next) {
  const { date, time, location, field, teamId, opponent, home } = req.body;
  try {
    const duplicate = await prisma.game.findFirst({
      where: {
        date,
        time,
        teamId,
      },
    });

    if (duplicate) {
      throw "Game Already In Schedule";
    }

    const game = await prisma.game.create({
      data: {
        date,
        time,
        location,
        field,
        home: home === "true" ? true : false,
        opponent,
        teamId,
      },
    });
    res
      .status(201)
      .send({ message: `Game ${game.id} created successfully`, game });
  } catch (error) {
    console.error(error);
    next();
  }
}

async function updateGame(req, res, next) {
  const { selectedGame, ourGoals, opponentGoals, result, completed } = req.body;
  try {
    const updated = await prisma.game.update({
      where: {
        id: selectedGame,
      },
      data: {
        ourGoals,
        opponentGoals,
        result,
        completed,
      },
    });
    res.status(200).send(updated);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = { createGame, updateGame };

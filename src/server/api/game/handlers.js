const prisma = require("../../client");

async function createGame(req, res, next) {
  const { date, time, location, teamId, opponent } = req.body;

  try {
    const game = await prisma.game.create({
      data: {
        date,
        time,
        location,
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

module.exports = { createGame };

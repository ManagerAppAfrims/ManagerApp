const prisma = require("../../client");

async function createGame(req, res, next) {
  const { date, time, location, field, teamId, opponent, home } = req.body;
  console.log("req body", req.body);
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
    console.log("created game", game);
    res
      .status(201)
      .send({ message: `Game ${game.id} created successfully`, game });
  } catch (error) {
    console.error(error);
    next();
  }
}

module.exports = { createGame };

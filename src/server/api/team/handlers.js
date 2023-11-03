const prisma = require("../../client");

async function createTeam(req, res, next) {
  const { name } = req.body;
  try {
    const team = await prisma.team.create({
      data: {
        name,
      },
    });
    res.status(201).send({ team });
  } catch (error) {
    console.error(error);
    next();
  }
}

module.exports = { createTeam };

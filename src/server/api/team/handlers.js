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

async function getAllTeams(req, res, next) {
  try {
    const teams = await prisma.team.findMany();
    res.status(200).send(teams);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = { createTeam, getAllTeams };

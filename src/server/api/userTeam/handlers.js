const prisma = require("../../client");

async function assignPlayerToTeam(req, res, next) {
  const { userId, teamId } = req.body;

  try {
    const assigned = await prisma.userTeam.create({
      data: {
        userId,
        teamId,
      },
    });
    res.status(201).send({
      message: `Player ${userId} has been assigned to Team ${teamId}`,
      assigned,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = { assignPlayerToTeam };

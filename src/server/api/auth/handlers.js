const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../../client");

async function createUser(req, res, next) {
  const { email, password, firstName, lastName, phoneNumber } = req.body;

  const SALT_ROUNDS = 5;
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  try {
    const isDuplicate = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (isDuplicate) {
      res.send({
        message: "Oops... An account is already associated with this email!",
      });
      return;
    }

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phoneNumber,
      },
    });

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET
    );

    res.status(201).send({ user, token });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function login(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      res.send({ message: "Incorrect login credentials!" });
      return;
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      res.send({ message: "Incorrect login credentials!" });
      return;
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET
    );
    res.status(200).send({ user, token });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function findUserByToken(req, res, next) {
  const token = req.headers.authorization;
  try {
    const { userId } = await jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw "oh no!";
    }

    const response = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      isAdmin: user.isAdmin,
    };

    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = { createUser, login, findUserByToken };

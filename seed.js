const prisma = require("./src/server/client");
const bcrypt = require("bcrypt");

const users = [
  {
    email: "nievescs20@gmail.com",
    password: "123",
    firstName: "Chris",
    lastName: "Nieves",
    isAdmin: true,
  },
  {
    email: "test1@gmail.com",
    password: "123",
    firstName: "James",
    lastName: "Smith",
    isAdmin: false,
  },
  {
    email: "test2@gmail.com",
    password: "123",
    firstName: "Robert",
    lastName: "Jones",
    isAdmin: false,
  },
  {
    email: "test3@gmail.com",
    password: "123",
    firstName: "John",
    lastName: "Johnson",
    isAdmin: false,
  },
  {
    email: "test4@gmail.com",
    password: "123",
    firstName: "Michael",
    lastName: "Garcia",
    isAdmin: false,
  },
  {
    email: "test5@gmail.com",
    password: "123",
    firstName: "David",
    lastName: "Williams",
    isAdmin: false,
  },
];

const teams = [
  {
    name: "Silence of the Llamas",
  },
  {
    name: "Double Brace",
  },
];

async function seed() {
  await prisma.userTeam
    .deleteMany()
    .then(async () => await prisma.user.deleteMany())
    .then(async () => await prisma.team.deleteMany());

  const SALT_ROUNDS = 5;
  await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
      return prisma.user.create({
        data: {
          email: user.email,
          password: hashedPassword,
          isAdmin: user.isAdmin,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      });
    })
  );
  await Promise.all(
    teams.map(async (team) => {
      return prisma.team.create({
        data: {
          name: team.name,
        },
      });
    })
  );
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

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
    email: "annierosems@yahoo.com",
    password: "0426",
    firstName: "Annie",
    lastName: "Rose",
    isAdmin: true,
  },
  {
    email: "jzabeats@gmail.com",
    password: "8393",
    firstName: "Jonathan",
    lastName: "Brzozowski",
    isAdmin: true,
  },
  {
    email: "charloecc@gmail.com",
    password: "4280",
    firstName: "Charlie",
    lastName: "Clarke",
    isAdmin: false,
  },
  {
    email: "david.wu.gao@gmail.com",
    password: "0359",
    firstName: "David",
    lastName: "Gao",
    isAdmin: false,
  },
  {
    email: "dixatron@gmail.com",
    password: "7773",
    firstName: "Brendan",
    lastName: "Dix",
    isAdmin: false,
  },
  {
    email: "embyers04@gmail.com",
    password: "3061",
    firstName: "Emily",
    lastName: "Byers",
    isAdmin: false,
  },
  {
    email: "kimforance@gmail.com",
    password: "9477",
    firstName: "Kimberly",
    lastName: "Dix",
    isAdmin: false,
  },
  {
    email: "leathd22@gmail.com",
    password: "7250",
    firstName: "Duncan",
    lastName: "Leathrum",
    isAdmin: false,
  },
  {
    email: "michael.mckay005@gmail.com",
    password: "7446",
    firstName: "Mike",
    lastName: "McKay",
    isAdmin: false,
  },
  {
    email: "nvelic87@gmail.com",
    password: "4118",
    firstName: "Nijaz",
    lastName: "Velic",
    isAdmin: false,
  },
  {
    email: "peter.scatena@gmail.com",
    password: "4356",
    firstName: "Peter",
    lastName: "Scatena",
    isAdmin: false,
  },
  {
    email: "prateekhundekar@gmail.com",
    password: "3528",
    firstName: "Prateek",
    lastName: "Hundekar",
    isAdmin: false,
  },
  {
    email: "rbabas11@comcast.net",
    password: "9654",
    firstName: "Reda",
    lastName: "Babas",
    isAdmin: false,
  },
  {
    email: "tomriggi@gmail.com",
    password: "5150",
    firstName: "Thomas",
    lastName: "Riggi",
    isAdmin: false,
  },
  {
    email: "wcaynoski@gmail.com",
    password: "1811",
    firstName: "Cole",
    lastName: "Caynoski",
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
  // await prisma.userTeam.deleteMany();
  // await prisma.team.deleteMany();
  // await prisma.user.deleteMany();
  // .then(async () => await prisma.team.deleteMany())
  // .then(async () => await prisma.user.deleteMany());

  const SALT_ROUNDS = 5;
  await Promise.all(
    users.map(async (user) => {
      console.log("user email", user.email);
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

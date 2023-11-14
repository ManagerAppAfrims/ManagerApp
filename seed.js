const prisma = require("./src/server/client");
const bcrypt = require("bcrypt");

const users = [
  {
    email: "nievescs20@gmail.com",
    password: "123",
    firstName: "Chris",
    lastName: "Nieves",
    phoneNumber: "5183015721",
    isAdmin: true,
  },
  {
    email: "annierosems@yahoo.com",
    password: "0426",
    firstName: "Annie",
    lastName: "Rose",
    phoneNumber: "6179620426",
    isAdmin: true,
  },
  {
    email: "jzabeats@gmail.com",
    password: "8393",
    firstName: "Jonathan",
    lastName: "Brzozowski",
    phoneNumber: "6033008393",
    isAdmin: true,
  },
  {
    email: "charloecc@gmail.com",
    password: "4280",
    firstName: "Charlie",
    lastName: "Clarke",
    phoneNumber: "5184144280",
    isAdmin: false,
  },
  {
    email: "david.wu.gao@gmail.com",
    password: "0359",
    firstName: "David",
    lastName: "Gao",
    phoneNumber: "5057090359",
    isAdmin: false,
  },
  {
    email: "dixatron@gmail.com",
    password: "7773",
    firstName: "Brendan",
    lastName: "Dix",
    phoneNumber: "6037327773",
    isAdmin: false,
  },
  {
    email: "embyers04@gmail.com",
    password: "3061",
    firstName: "Emily",
    lastName: "Byers",
    phoneNumber: "7246513061",
    isAdmin: false,
  },
  {
    email: "kimforance@gmail.com",
    password: "9477",
    firstName: "Kimberly",
    lastName: "Dix",
    phoneNumber: "9788669477",
    isAdmin: false,
  },
  {
    email: "leathd22@gmail.com",
    password: "7250",
    firstName: "Duncan",
    lastName: "Leathrum",
    phoneNumber: "7573757250",
    isAdmin: false,
  },
  {
    email: "michael.mckay005@gmail.com",
    password: "7446",
    firstName: "Mike",
    lastName: "McKay",
    phoneNumber: "5189447446",
    isAdmin: false,
  },
  {
    email: "nvelic87@gmail.com",
    password: "4118",
    firstName: "Nijaz",
    lastName: "Velic",
    phoneNumber: "3157234118",
    isAdmin: false,
  },
  {
    email: "peter.scatena@gmail.com",
    password: "4356",
    firstName: "Peter",
    lastName: "Scatena",
    phoneNumber: "5189444356",
    isAdmin: false,
  },
  {
    email: "prateekhundekar@gmail.com",
    password: "3528",
    firstName: "Prateek",
    lastName: "Hundekar",
    phoneNumber: "5184963528",
    isAdmin: false,
  },
  {
    email: "rbabas11@comcast.net",
    password: "9654",
    firstName: "Reda",
    lastName: "Babas",
    phoneNumber: "4108689654",
    isAdmin: false,
  },
  {
    email: "tomriggi@gmail.com",
    password: "5150",
    firstName: "Thomas",
    lastName: "Riggi",
    phoneNumber: "5183385150",
    isAdmin: false,
  },
  {
    email: "wcaynoski@gmail.com",
    password: "1811",
    firstName: "Cole",
    lastName: "Caynoski",
    phoneNumber: "9703761811",
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

const doubleId = "6c72bcca-f18d-4ab9-8458-ec491b91d443";
const llamasId = "639aeeda-bed3-4308-b049-e8b40d7baae3";

const teamAssociations = [
  {
    name: "annie rose",
    userId: "15e8c438-10ba-4234-b2d9-e24df4c21234",
    teamIds: [llamasId, doubleId],
  },
  {
    name: "brendan dix",
    userId: "def0f72b-5ecb-47c7-a069-c905db2a917d",
    teamIds: [llamasId, doubleId],
  },
  {
    name: "charlie clarke",
    userId: "1e8ace3d-ed10-4541-90d7-3417be8885ee",
    teamIds: [doubleId, llamasId],
  },
  {
    name: "chris nieves",
    userId: "f61779ed-12c6-44e4-888d-52505722c362",
    teamIds: [doubleId, llamasId],
  },
  // {
  //   name: "cole caynoski",
  //   userId: "73f28d33-aaa6-4ef7-8441-6e9ac24d5aa4",
  //   teamIds: [doubleId],
  // },
  // {
  //   name: "dave gao",
  //   userId: "e2e88846-5da2-4e41-9cf0-c5e3d9893f62",
  //   teamIds: [doubleId, llamasId],
  // },
  // {
  //   name: "duncan leathrum",
  //   userId: "4ba22253-31eb-4858-a249-59e238fc8327",
  //   teamIds: [doubleId],
  // },
  // {
  //   name: "emily byers",
  //   userId: "c713b0f1-86cf-460a-bec4-19def656af5b",
  //   teamIds: [llamasId],
  // },
  // {
  //   name: "john brzozowski",
  //   userId: "6a5cac19-ff9c-4cb1-911d-3940ef728070",
  //   teamIds: [doubleId],
  // },
  // {
  //   name: "kimberly dix",
  //   userId: "174eba63-6ef7-4ea9-8457-bfeedfdb952a",
  //   teamIds: [llamasId],
  // },
  // {
  //   name: "michael mckay",
  //   userId: "a60444b4-ab89-4415-82c1-9fc9f87c7d94",
  //   teamIds: [llamasId, doubleId],
  // },
  // {
  //   name: "nijaz velic",
  //   userId: "859837dd-af0a-493a-980e-0830887e9a6a",
  //   teamIds: [doubleId, llamasId],
  // },
  // {
  //   name: "peter scatena",
  //   userId: "cf91e165-4741-4d7a-a40d-14d202c8b200",
  //   teamIds: [llamasId, doubleId],
  // },
  // {
  //   name: "prateek hundekar",
  //   userId: "ecca1e65-93aa-4464-a700-608fbc3e9302",
  //   teamIds: [llamasId],
  // },
  // {
  //   name: "reda babas",
  //   userId: "a0c2556e-9633-4142-b5c3-eed089cdf2a7",
  //   teamIds: [llamasId],
  // },
  // {
  //   name: "thomas riggi",
  //   userId: "250b493d-8d8d-45ec-b20d-1148244e8711",
  //   teamIds: [doubleId, llamasId],
  // },
];

const games = [
  {
    date: "2023-11-15",
    time: "21:00",
    location: "Afrim's Sports: Colonie",
    field: "Field 1 IN",
    teamId: doubleId,
    opponent: "AFC Richmond",
    score: "",
    home: false,
  },
  {
    date: "2023-11-09",
    time: "20:00",
    location: "Afrim's Sports: SP",
    field: "Field 3 IN",
    teamId: doubleId,
    opponent: "Regn Select",
    score: "3-5",
    home: false,
  },
  {
    date: "2023-11-01",
    time: "21:50",
    location: "Afrim's Sports: Colonie",
    field: "Field 4 IN",
    teamId: doubleId,
    opponent: "FC Jaguar",
    score: "7-7",
    home: true,
  },
  {
    date: "2023-11-13",
    time: "20:15",
    location: "Afrim's Sports: SP",
    field: "Field 1 IN",
    teamId: llamasId,
    opponent: "Gengar Gankers",
    score: "",
    home: false,
  },
  {
    date: "2023-11-06",
    time: "21:10",
    location: "Afrim's Sports: SP",
    field: "Field 2 IN",
    teamId: llamasId,
    opponent: "Tipsy Moose",
    score: "4-8",
    home: true,
  },
];

async function createPlayersAndTeams() {
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
          phoneNumber: user.phoneNumber,
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

async function createPlayerTeamAssociations() {
  for (const player of teamAssociations) {
    for (const teamId of player.teamIds) {
      await prisma.userTeam.create({
        data: {
          userId: player.userId,
          teamId,
        },
      });
    }
  }
}

async function createGames() {
  await Promise.all(
    games.map((game) => {
      return prisma.game.create({
        data: game,
      });
    })
  );
}

async function seed() {
  // await prisma.game
  //   .deleteMany()
  //   .then(async () => await prisma.userTeam.deleteMany())
  //   .then(async () => await prisma.team.deleteMany())
  //   .then(async () => await prisma.user.deleteMany());
  createPlayersAndTeams();
  // createPlayerTeamAssociations();
  // createGames();
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

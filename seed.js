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

const doubleId = "d763eaa4-8ac5-43aa-a382-39338a9138c3";
const llamasId = "46079d1a-b4de-4117-b36f-c67f5655eb84";

const teamAssociations = [
  {
    name: "annie rose",
    userId: "d4fd72a1-bbbf-45e3-b7b0-b6dbd422cfbd",
    teamIds: [llamasId, doubleId],
  },
  {
    name: "brendan dix",
    userId: "092c6c26-d909-4263-8f4b-77631ad6b59d",
    teamIds: [llamasId, doubleId],
  },
  {
    name: "charlie clarke",
    userId: "d9106b58-4b18-4bfd-afc1-33c257b995d6",
    teamIds: [doubleId, llamasId],
  },
  {
    name: "chris nieves",
    userId: "4b87cb02-4615-4d8c-b76c-67bb84c7e64a",
    teamIds: [doubleId, llamasId],
  },
  {
    name: "cole caynoski",
    userId: "3c7df593-4172-43d7-a6cc-83fefd621f92",
    teamIds: [doubleId],
  },
  {
    name: "dave gao",
    userId: "ef0ff9f4-6155-479e-b21a-dd86136eec5d",
    teamIds: [doubleId, llamasId],
  },
  {
    name: "duncan leathrum",
    userId: "9b84135c-58a3-422d-bfff-9420efb44f7a",
    teamIds: [doubleId],
  },
  {
    name: "emily byers",
    userId: "3f038bae-0b36-40db-ac80-6fb8546a034c",
    teamIds: [llamasId],
  },
  {
    name: "john brzozowski",
    userId: "fd01cdd2-ed4b-4cfc-9246-07f7ab688e40",
    teamIds: [doubleId],
  },
  {
    name: "kimberly dix",
    userId: "a3c68983-5a01-4625-b294-90cf9dfe7fb7",
    teamIds: [llamasId],
  },
  {
    name: "michael mckay",
    userId: "270349a3-a993-451f-9f77-16691d15d8cc",
    teamIds: [llamasId, doubleId],
  },
  {
    name: "nijaz velic",
    userId: "a8b43089-4a4e-4449-863e-49f37e6042d5",
    teamIds: [doubleId, llamasId],
  },
  {
    name: "peter scatena",
    userId: "79b16333-9bca-42bd-a955-fa2749875ef6",
    teamIds: [llamasId, doubleId],
  },
  {
    name: "prateek hundekar",
    userId: "2ff01199-e892-4b44-b0e6-88938136b4f5",
    teamIds: [llamasId],
  },
  {
    name: "reda babas",
    userId: "e22bf006-e2e7-4420-95e5-43ca6df85051",
    teamIds: [llamasId],
  },
  {
    name: "thomas riggi",
    userId: "9f3500ee-2753-478f-880c-b24580200903",
    teamIds: [doubleId, llamasId],
  },
];

const games = [
  {
    date: "2023-11-15",
    time: "21:00",
    location: "Afrim's Sports: Colonie",
    field: "Field 1 IN",
    teamId: doubleId,
    opponent: "AFC Richmond",
    home: false,
  },
  {
    date: "2023-11-09",
    time: "20:00",
    location: "Afrim's Sports: SP",
    field: "Field 3 IN",
    teamId: doubleId,
    opponent: "Regn Select",
    ourGoals: 3,
    opponentGoals: 5,
    home: false,
    completed: true,
    result: "loss",
  },
  {
    date: "2023-11-01",
    time: "21:50",
    location: "Afrim's Sports: Colonie",
    field: "Field 4 IN",
    teamId: doubleId,
    opponent: "FC Jaguar",
    ourGoals: 7,
    opponentGoals: 7,
    home: true,
    completed: true,
    result: "tie",
  },
  {
    date: "2023-11-13",
    time: "20:15",
    location: "Afrim's Sports: SP",
    field: "Field 1 IN",
    teamId: llamasId,
    opponent: "Gengar Gankers",
    ourGoals: 8,
    opponentGoals: 5,
    home: false,
    completed: true,
    result: "win",
  },
  {
    date: "2023-11-06",
    time: "21:10",
    location: "Afrim's Sports: SP",
    field: "Field 2 IN",
    teamId: llamasId,
    opponent: "Tipsy Moose",
    ourGoals: 8,
    opponentGoals: 4,
    home: true,
    completed: true,
    result: "win",
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
  // await prisma.game.deleteMany().then(() => createGames());
  // createPlayersAndTeams();
  createPlayerTeamAssociations();
  createGames();
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

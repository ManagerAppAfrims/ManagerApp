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

const doubleId = "4f3a8d78-e03a-479a-912d-fb51e25ecadc";
const llamasId = "b68400b8-f9db-4a91-a1b0-62973a4f63f0";

const teamAssociations = [
  {
    name: "annie rose",
    userId: "0d605584-2da6-4758-bfef-cac8bfea021e",
    teamIds: [llamasId, doubleId],
  },
  {
    name: "brendan dix",
    userId: "91f42e51-19f7-460b-a4e5-28e8379d44fa",
    teamIds: [llamasId, doubleId],
  },
  {
    name: "charlie clarke",
    userId: "21b60dd1-9e06-446b-b824-39edc7989f98",
    teamIds: [doubleId, llamasId],
  },
  {
    name: "chris nieves",
    userId: "be5937d5-ff49-485d-bc85-67c420724043",
    teamIds: [doubleId, llamasId],
  },
  {
    name: "cole caynoski",
    userId: "52bc34d3-af4a-4694-8dd0-a4d8a13f33af",
    teamIds: [doubleId],
  },
  {
    name: "dave gao",
    userId: "b08c6505-3e15-4218-b95c-71f5810fce6f",
    teamIds: [doubleId, llamasId],
  },
  {
    name: "duncan leathrum",
    userId: "89c161c2-7a02-4863-b4f2-7d6f2fa6eb02",
    teamIds: [doubleId],
  },
  {
    name: "emily byers",
    userId: "3b84f908-e0d0-450d-83cc-e6fe1ff69f6b",
    teamIds: [llamasId],
  },
  {
    name: "john brzozowski",
    userId: "7de462e2-1253-4dd2-accb-094ba42b4c05",
    teamIds: [doubleId],
  },
  {
    name: "kimberly dix",
    userId: "2b275a37-8e28-41c7-b729-6f02412bc2bc",
    teamIds: [llamasId],
  },
  {
    name: "michael mckay",
    userId: "30f6a9db-51a3-4b7f-a6cb-e197a7fe5b77",
    teamIds: [llamasId, doubleId],
  },
  {
    name: "nijaz velic",
    userId: "0dc37d19-5af1-4967-b4d9-1515c66155c9",
    teamIds: [doubleId, llamasId],
  },
  {
    name: "peter scatena",
    userId: "ec5cff26-f7a5-48ce-a419-41bd9048826e",
    teamIds: [llamasId, doubleId],
  },
  {
    name: "prateek hundekar",
    userId: "adeb9787-9a46-408b-9153-b8227b988189",
    teamIds: [llamasId],
  },
  {
    name: "reda babas",
    userId: "d4639501-ef7c-4499-b8be-ddabad6ac81f",
    teamIds: [llamasId],
  },
  {
    name: "thomas riggi",
    userId: "c2bd8182-10e2-45f7-a6a8-241a560038f3",
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

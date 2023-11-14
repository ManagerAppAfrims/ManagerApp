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

const doubleId = "2a1142b2-e8c4-4cf1-845b-0f6999cf552f";
const llamasId = "41064aed-6778-4b9f-810f-8555a94c7aca";

const teamAssociations = [
  // {
  //   name: "annie rose",
  //   userId: "9e744928-ffef-4594-ba84-652051363ac1",
  //   teamIds: [llamasId, doubleId],
  // },
  // {
  //   name: "brendan dix",
  //   userId: "80a1896d-7ad4-4b6a-8457-53aa30611641",
  //   teamIds: [llamasId, doubleId],
  // },
  // {
  //   name: "charlie clarke",
  //   userId: "ea9ec744-de20-4c78-aa69-decaaf9e5c0f",
  //   teamIds: [doubleId, llamasId],
  // },
  // {
  //   name: "chris nieves",
  //   userId: "4d91e4bd-9e7b-4bf9-9a47-c0a63d274cbb",
  //   teamIds: [doubleId, llamasId],
  // },
  {
    name: "cole caynoski",
    userId: "bae0d880-990c-488c-b574-06ee1ca088ec",
    teamIds: [doubleId],
  },
  {
    name: "dave gao",
    userId: "bcc73536-a3b4-484d-a2b5-e87947b19a6e",
    teamIds: [doubleId, llamasId],
  },
  {
    name: "duncan leathrum",
    userId: "9b0143d0-36e1-48aa-b3e0-9ff1e5b5b840",
    teamIds: [doubleId],
  },
  {
    name: "emily byers",
    userId: "fca0a535-fc77-45cf-9bb0-bd06e3f400f4",
    teamIds: [llamasId],
  },
  {
    name: "john brzozowski",
    userId: "da2484e2-b4ab-4515-b9d4-ac62ce0679c6",
    teamIds: [doubleId],
  },
  {
    name: "kimberly dix",
    userId: "5a0682c9-4086-4449-baa5-857c76cd19b6",
    teamIds: [llamasId],
  },
  {
    name: "michael mckay",
    userId: "a5c03737-b6b0-4e20-af27-b2df3a89ed73",
    teamIds: [llamasId, doubleId],
  },
  {
    name: "nijaz velic",
    userId: "b7bd1177-8c6f-4e88-ace0-42e421f92808",
    teamIds: [doubleId, llamasId],
  },
  {
    name: "peter scatena",
    userId: "a7b1434c-0b1c-466a-bc4e-f2b93ced91e1",
    teamIds: [llamasId, doubleId],
  },
  {
    name: "prateek hundekar",
    userId: "dd87ad98-f7fa-40fb-8065-304937671fe7",
    teamIds: [llamasId],
  },
  {
    name: "reda babas",
    userId: "e9a241ba-f8d4-46c3-88f9-c72635dd6458",
    teamIds: [llamasId],
  },
  {
    name: "thomas riggi",
    userId: "aeed3d56-4ab9-40ed-bb02-6019bcb227cf",
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
  await prisma.game.deleteMany().then(() => createGames());
  // createPlayersAndTeams();
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

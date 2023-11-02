const prisma = require("./src/server/client");

const users = [{ username: "chris" }, { username: "tim" }];

async function seed() {
  await Promise.all(
    users.map((user) => {
      return prisma.user.create({
        data: {
          username: user.username,
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

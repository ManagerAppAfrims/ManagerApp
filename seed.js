const prisma = require("./src/server/client");
const bcrypt = require("bcrypt");

const users = [
  {
    email: "nievescs20@gmail.com",
    password: "123",
    isAdmin: true,
  },
];

async function seed() {
  const SALT_ROUNDS = 5;
  await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
      return prisma.user.create({
        data: {
          email: user.email,
          password: hashedPassword,
          isAdmin: user.isAdmin,
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

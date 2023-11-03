const express = require("express");
const ViteExpress = require("vite-express");
const prisma = require("./client");
const dotenv = require("dotenv");
const apiRouter = require("./api/index");

dotenv.config();

const app = express();

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).send({ users });
});
app.use("/api", apiRouter);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

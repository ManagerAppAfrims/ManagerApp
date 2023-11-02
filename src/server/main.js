const express = require("express");
const ViteExpress = require("vite-express");
const prisma = require("./client");

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).send({ users });
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

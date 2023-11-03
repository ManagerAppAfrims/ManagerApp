const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const ViteExpress = require("vite-express");
const dotenv = require("dotenv");
const prisma = require("./client");
const apiRouter = require("./api/index");
const authRouter = require("./api/auth");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan());
app.use(cors());

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).send({ users });
});
app.use("/api", apiRouter);
app.use("/auth", authRouter);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

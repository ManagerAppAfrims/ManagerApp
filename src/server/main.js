const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const ViteExpress = require("vite-express");
const dotenv = require("dotenv");
const prisma = require("./client");
const apiRouter = require("./api/index");
const authRouter = require("./api/auth");

dotenv.config();

const BASE_URL = process.env.VITE_URL
  ? "https://footballmanager.onrender.com"
  : "";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan());
app.use(cors());

app.get(`${BASE_URL}/users`, async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).send({ users });
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: "Oops!" });
  }
});
app.use(`${BASE_URL}/api`, apiRouter);
app.use(`${BASE_URL}/auth`, authRouter);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

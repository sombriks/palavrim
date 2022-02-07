import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

import { knex } from "./config/db.js";

import { users } from "./routes/users.js";
import { games } from "./routes/games.js";

const app = express();

app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json());

app.use(users);
app.use(games);

app.use(express.static(process.env.STATIC_FOLDER));

const PORT = process.env.PORT || 3000;

console.log("running pending migrations");
knex.migrate.latest().then(() => {
  console.log("starting service");
  app.listen(PORT);
});

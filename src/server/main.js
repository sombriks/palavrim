import express from "express";
import morgan from "morgan";

import { knex } from "./config/db.js";

const app = express();

app.use(morgan("common"));
app.use(express.static(process.env.STATIC_FOLDER));

app.get("/", (req, res) => {
  res.send("hello " + process.env.NODE_ENV);
  console.log("hello " + new Date() + " " + process.env.NODE_ENV);
});

knex.migrate.latest().then((_) => {
  app.listen(3000);
});

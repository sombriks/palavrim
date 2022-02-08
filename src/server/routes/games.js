import { Router } from "express";
import { getGame } from "../services/game.js";

import { gamesFromUser, newGame } from "../services/game.js";

export const games = new Router();

games.get("/api/games", async (req, res) => {
  const { uid } = req.query;
  res.send(await gamesFromUser(uid));
});

games.post("/api/game", async (req, res) => {
  res.send(await newGame(req.body));
});

games.get("/api/game/:uid", async (req, res) => {
  res.send(await getGame(req.params.uid));
});

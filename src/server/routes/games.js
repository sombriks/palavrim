import { Router } from "express";

import { gamesFromUser } from "../services/game.js";

export const games = new Router();

games.get("/api/games", async (req, res) => {
  const { uid } = req.query;
  res.send(await gamesFromUser(uid));
});

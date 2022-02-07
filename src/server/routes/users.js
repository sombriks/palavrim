import { Router } from "express";

import { refreshUser } from "../services/user.js";

export const users = new Router();

users.post("/api/user", async (req, res) => {
  const { uid } = req.body;
  const user = await refreshUser(uid);
  res.send(user);
});

import { Router } from "express";

import { saveResult, getResults } from "../services/result.js";

export const results = new Router();

results.get("/api/results", async (req, res) => {
  res.send(await getResults(req.query));
});

results.post("/api/result", async (req, res) => {
  res.send(await saveResult(req.body));
});
